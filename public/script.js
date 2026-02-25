const express = require('express');
const bodyParser = require('body-parser');
const ExcelJS = require('exceljs');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public')); // 假设前端文件在public目录

// 人员资质数据
const personnelData = {
    "李楹": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "主班", "监控", "支持"],
    "赵思茗": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "主班", "监控", "支持"],
    "左晓晨": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "主班", "监控", "支持"],
    "胡建": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "主班", "监控", "支持"],
    "刘资涵": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二","监控", "支持"],
    "商晓萌": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二","监控", "支持"],
    "王晶华": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二","监控", "支持"],
    "彭鲁昕": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持", "情报"],
    "孟庆茂": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持", "情报"],
    "林子靖": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持", "情报"],
    "康凯": ["B11", "B13", "B16", "B18", "大夜二", "监控", "支持"],
    "王雨晴": ["监控", "支持"],
    "曹浩宇": ["支持"]
};

// 班次类型
const SHIFT_TYPES = {
    DAY_SHIFT: ['B11', 'B12', 'B13', 'B16', 'B18', '主班', '跟踪', '支持'],
    NIGHT_SHIFT: ['B11', 'B12', 'B13', 'B16', 'B18', '主班', '跟踪', '支持', '大夜一', '大夜二']
};

// 特殊班次类型
const SPECIAL_SHIFTS = {
    VACATION: '年假',
    TRAINING: '复训',
    D_MODEL: 'D模',
    FLIGHT_PRACTICE: '航实',
    intelligence: '情报',
    ADMIN: '行政',
    BUSINESS_TRIP: '出差',
    TRAINING_COURSE: '培训',
    REST: '休息'
};

// 减班规则
const REDUCTION_RULES = {
    [SPECIAL_SHIFTS.VACATION]: { day: 1, night: 2 },
    [SPECIAL_SHIFTS.FLIGHT_PRACTICE]: { day: 1, night: 1 },
    [SPECIAL_SHIFTS.TRAINING]: { day: 1, night: 2 },
    [SPECIAL_SHIFTS.D_MODEL]: { night: 1 },
    [SPECIAL_SHIFTS.intelligence]: { day: 1 },
    [SPECIAL_SHIFTS.ADMIN]: { day: 1 },
    [SPECIAL_SHIFTS.BUSINESS_TRIP]: { day: 1 },
    [SPECIAL_SHIFTS.TRAINING_COURSE]: { day: 1 }
};

// 保存排班数据（实际应用中应使用数据库）
let scheduleData = {};

// 获取人员资质
app.get('/api/personnel', (req, res) => {
    res.json(personnelData);
});

// 一键排班
app.post('/api/schedule/generate', (req, res) => {
    const { year, month, startDay, specialDates } = req.body;

    try {
        const schedule = generateSchedule(year, month, startDay, specialDates);
        scheduleData = schedule; // 保存排班数据
        res.json({ success: true, schedule });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// 保存排班数据
app.post('/api/schedule/save', (req, res) => {
    const { schedule } = req.body;
    scheduleData = schedule;
    res.json({ success: true, message: '排班数据已保存' });
});

// 导出Excel
app.get('/api/schedule/export', async (req, res) => {
    if (!scheduleData || Object.keys(scheduleData).length === 0) {
        return res.status(400).json({ success: false, message: '没有排班数据可导出' });
    }

    try {
        const filePath = await exportToExcel(scheduleData);
        res.download(filePath);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// 生成排班表的核心算法
function generateSchedule(year, month, startDay, specialDates) {
    const daysInMonth = new Date(year, month, 0).getDate();
    const schedule = {};
    const personnel = Object.keys(personnelData);

    // 初始化人员排班计数
    const shiftCount = {};
    personnel.forEach(person => {
        shiftCount[person] = { day: 0, night: 0 };
        schedule[person] = Array(daysInMonth).fill(null);
    });

    // 应用特殊日期设置
    applySpecialDates(schedule, specialDates, shiftCount);

    // 应用减班规则
    applyReductionRules(schedule, shiftCount);

    // 生成排班序列（白夜早休）
    const shiftPattern = ['day', 'night', 'rest'];
    let patternIndex = (startDay - 1) % shiftPattern.length;

    // 按天分配班次
    for (let day = 0; day < daysInMonth; day++) {
        const currentDate = `${year}-${month.toString().padStart(2, '0')}-${(day + 1).toString().padStart(2, '0')}`;
        const dayOfWeek = new Date(year, month - 1, day + 1).getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

        // 跳过特殊日期
        if (specialDates[currentDate]) continue;

        const shiftType = shiftPattern[patternIndex];
        patternIndex = (patternIndex + 1) % shiftPattern.length;

        if (shiftType === 'rest') {
            // 休息日
            personnel.forEach(person => {
                if (!schedule[person][day]) {
                    schedule[person][day] = SPECIAL_SHIFTS.REST;
                }
            });
            continue;
        }

        // 白班或夜班
        const shiftSlots = shiftType === 'day' ? SHIFT_TYPES.DAY_SHIFT : SHIFT_TYPES.NIGHT_SHIFT;

        // 随机打乱人员顺序以实现均匀分配
        const shuffledPersonnel = [...personnel].sort(() => Math.random() - 0.5);

        // 分配席位
        for (const slot of shiftSlots) {
            // 找到有资质且当前时段空闲的人员
            const availablePerson = shuffledPersonnel.find(person =>
                personnelData[person].includes(slot) &&
                !schedule[person][day]
            );

            if (availablePerson) {
                schedule[availablePerson][day] = slot;
                shiftCount[availablePerson][shiftType]++;
            }
        }
    }

    // 特殊处理：均匀分配大夜班
    distributeNightShifts(schedule, daysInMonth);

    return {
        year,
        month,
        days: daysInMonth,
        schedule,
        shiftCount
    };
}

// 应用特殊日期设置
function applySpecialDates(schedule, specialDates, shiftCount) {
    Object.entries(specialDates).forEach(([date, personShifts]) => {
        const dayIndex = parseInt(date.split('-')) - 1;

        Object.entries(personShifts).forEach(([person, shift]) => {
            if (schedule[person] && schedule[person][dayIndex] === null) {
                schedule[person][dayIndex] = shift;

                // 更新计数（如果是减班类型）
                if (Object.values(SPECIAL_SHIFTS).includes(shift)) {
                    const rule = REDUCTION_RULES[shift];
                    if (rule) {
                        shiftCount[person].day = Math.max(0, shiftCount[person].day - (rule.day || 0));
                        shiftCount[person].night = Math.max(0, shiftCount[person].night - (rule.night || 0));
                    }
                }
            }
        });
    });
}

// 应用减班规则
function applyReductionRules(schedule, shiftCount) {
    Object.entries(shiftCount).forEach(([person, counts]) => {
        // 根据人员特殊班次应用减班规则
        Object.entries(schedule).forEach(([p, shifts]) => {
            if (p === person) {
                shifts.forEach(shift => {
                    if (Object.values(SPECIAL_SHIFTS).includes(shift)) {
                        const rule = REDUCTION_RULES[shift];
                        if (rule) {
                            counts.day = Math.max(0, counts.day - (rule.day || 0));
                            counts.night = Math.max(0, counts.night - (rule.night || 0));
                        }
                    }
                });
            }
        });
    });
}

// 均匀分配大夜班
function distributeNightShifts(schedule, daysInMonth) {
    const nightShifts = ['大夜一', '大夜二'];
    const nightShiftCount = {};

    // 初始化大夜班计数
    Object.keys(schedule).forEach(person => {
        nightShiftCount[person] = 0;
    });

    // 计算当前大夜班分布
    for (let day = 0; day < daysInMonth; day++) {
        nightShifts.forEach(shift => {
            const person = Object.keys(schedule).find(p => schedule[p][day] === shift);
            if (person) {
                nightShiftCount[person]++;
            }
        });
    }

    // 重新分配大夜班以实现均匀分布
    nightShifts.forEach(shift => {
        const minCount = Math.min(...Object.values(nightShiftCount));
        const candidates = Object.keys(nightShiftCount).filter(person =>
            nightShiftCount[person] === minCount &&
            personnelData[person].includes(shift)
        );

        // 找到需要大夜班的日子
        for (let day = 0; day < daysInMonth; day++) {
            if (candidates.length === 0) break;

            // 检查这天是否已有大夜班
            const hasNightShift = nightShifts.some(s =>
                Object.keys(schedule).some(p => schedule[p][day] === s)
            );

            if (!hasNightShift) {
                // 随机选择一个候选人
                const randomIndex = Math.floor(Math.random() * candidates.length);
                const selectedPerson = candidates[randomIndex];

                // 检查该人员这天是否空闲
                if (!schedule[selectedPerson][day]) {
                    schedule[selectedPerson][day] = shift;
                    nightShiftCount[selectedPerson]++;
                    candidates.splice(randomIndex, 1); // 从候选人中移除
                }
            }
        }
    });
}

// 导出到Excel
async function exportToExcel(scheduleData) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('排班表');

    const { year, month, days, schedule } = scheduleData;

    // 设置表头
    const headers = ['人员', ...Array.from({ length: days }, (_, i) => `${i + 1}日`)];
    worksheet.addRow(headers);

    // 添加数据行
    Object.entries(schedule).forEach(([person, shifts]) => {
        const row = [person];
        shifts.forEach(shift => {
            row.push(shift || '');
        });
        worksheet.addRow(row);
    });

    // 设置单元格样式
    worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
        if (rowNumber === 1) return; // 跳过标题行

        row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
            if (colNumber === 1) return; // 跳过人员列

            if (cell.value) {
                // 设置班次颜色
                switch (cell.value) {
                    case 'B11':
                        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF5252' } };
                        break;
                    case 'B12':
                        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF9800' } };
                        break;
                    case 'B13':
                        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF4CAF50' } };
                        break;
                    case 'B16':
                        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFCE93D8' } };
                        break;
                    case 'B18':
                        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1976D2' } };
                        break;
                    case '主班':
                        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF48FB1' } };
                        break;
                    case '跟踪':
                        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF81D4FA' } };
                        break;
                    case '支持':
                        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF388E3C' } };
                        break;
                    case '大夜一':
                        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFEB3B' } };
                        break;
                    case '大夜二':
                        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFA5D6A7' } };
                        break;
                    case '年假':
                        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFCDD2' } };
                        break;
                    case '复训':
                        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD32F2F' } };
                        break;
                    case 'D模':
                        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE1BEE7' } };
                        break;
                    case '航实':
                        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFBA68C8' } };
                        break;
                    case '情报':
                        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFBA69C9' } };
                        break;
                    case '培训':
                    case '行政':
                    case '出差':
                        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF80DEEA' } };
                        break;
                    case '休息':
                        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF8D6E63' } };
                        break;
                }
            }
        });
    });

    // 保存文件
    const fileName = `排班表_${year}年${month}月.xlsx`;
    const filePath = path.join(__dirname, 'exports', fileName);

    // 确保导出目录存在
    if (!fs.existsSync(path.join(__dirname, 'exports'))) {
        fs.mkdirSync(path.join(__dirname, 'exports'));
    }

    await workbook.xlsx.writeFile(filePath);
    return filePath;
}

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});
