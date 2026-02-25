const personnelData = {
    "李楹": ["主班","B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "赵思茗": ["主班","B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "左晓晨": ["主班","B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "胡建": ["主班","B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "刘资涵": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "商晓萌": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "王晶华": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "彭鲁昕": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持", "情报"],
    "孟庆茂": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持", "情报"],
    "林子靖": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持", "情报"],
    "康凯": ["B11", "B13", "B16", "B18", "大夜二", "监控", "支持"],
    "王雨晴": ["监控", "支持"],
    "曹浩宇": ["支持"],
    "孙晓静": ["主班","B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "刘虹悦": ["主班","B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "陈大猛": ["主班","B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "胡俊杰": ["主班","B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "康帅": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "王悦": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "周凡博": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "林挺利": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "赵丽雅": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持", "情报"],
    "李新飞": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持", "情报"],
    "任政姣": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持", "情报"],
    "马启烨": ["支持"],
    "裴沛": ["主班","B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "曾振华": ["主班","B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "郭超群": ["主班","B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持", "情报"],
    "刘海英": ["主班","B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "郑方麒": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "万庆维": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "黄星飞": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "王航臣": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "于一民": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持", "情报"],
    "周无双": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持", "情报"],
    "徐晴": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "胡嘉娟": ["监控", "支持"],
    "赵伟": ["主班","B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "杨剑": ["主班","B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "田哲": ["主班","B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "王明旭": ["主班","B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "张文婷": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持", "情报"],
    "宁馨茹": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "陈士彬": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "王蒙": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "李军杰": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持", "情报"],
    "赵笑竹": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持", "情报"],
    "蒲涵潇": ["B11", "B12", "B13", "B16", "B18", "大夜一", "大夜二", "监控", "支持"],
    "田东驰": ["监控", "支持"]
};

// 人员席位限制（按白班/夜班分别配置，未配置则不限制）
const PERSON_POSITION_LIMITS = {
    "林子靖": { day: ["B12", "监控", "情报"], night: ["B12", "监控"] },
    "赵丽雅": { day: ["B11", "B12", "B13", "B16", "B18",  "监控", "支持", "情报"], night: ["B11", "B12", "B13", "B16", "B18",  "监控", "支持"] },
    "刘虹悦": { day: ["主班","B11", "B12", "B13", "B16", "B18", "监控"], night: ["主班", "B12", "监控"] },
};

function isPositionAllowedForPerson(name, pos, shiftType) {
    const limits = PERSON_POSITION_LIMITS[name];
    if (!limits) return true;
    const list = (shiftType === 'night') ? limits.night : limits.day;
    if (!Array.isArray(list) || list.length === 0) return true;
    return list.includes(pos);
}

// 人员列表
const personnelList = Object.keys(personnelData);

// 当前选中的日期和人员
let currentDate = new Date();
let selectedPerson = null;
let isEditMode = false;
let currentEditingCell = null;
let isArchiveMode = false;
let currentArchiveMonth = null;
let originalQualificationHtml = '';
// 全局班组选择元素（将在初始化时赋值）
let teamSelect = null;
// 手动固定排班缓存（person -> day -> shift）
const fixedDaysByPersonCache = {};

// 定义各个班组的人员列表
const teamMembers = {
    "神鹰": ["李楹", "赵思茗", "左晓晨", "胡建", "刘资涵", "商晓萌", "王晶华", "彭鲁昕", "孟庆茂", "林子靖", "康凯", "王雨晴", "曹浩宇"],
    "CAVOK": ["孙晓静", "刘虹悦", "陈大猛", "胡俊杰", "康帅", "王悦", "周凡博", "林挺利", "赵丽雅", "李新飞", "任政姣", "马启烨"],
    "天行者": ["赵伟", "杨剑", "田哲", "王明旭", "张文婷", "宁馨茹", "陈士彬", "王蒙", "李军杰", "赵笑竹", "蒲涵潇", "田东驰"],
    "签动未来": ["裴沛", "曾振华", "郭超群", "刘海英", "郑方麒", "万庆维", "黄星飞", "王航臣", "于一民", "周无双", "徐晴", "胡嘉娟"]
};

// 特殊班次（用于写入固定日）
const SPECIAL_EVENT_TYPES = ['年假','复训','婚假','育儿','D模','航实','情报','行政','出差','培训','休息','空班'];

const TRIPLE_PAY_HOLIDAYS_BY_YEAR = {
    2026: [
        { label: '元旦', month: 1, day: 1 },
        { label: '除夕', month: 2, day: 16 },
        { label: '初一', month: 2, day: 17 },
        { label: '初二', month: 2, day: 18 },
        { label: '初三', month: 2, day: 19 },
        { label: '清明节', month: 4, day: 5 },
        { label: '劳动节', month: 5, day: 1 },
        { label: '劳动节', month: 5, day: 2 },
        { label: '端午节', month: 6, day: 19 },
        { label: '中秋节', month: 9, day: 25 },
        { label: '国庆节', month: 10, day: 1 },
        { label: '国庆节', month: 10, day: 2 },
        { label: '国庆节', month: 10, day: 3 }
    ]
};

function getTriplePayHolidays(year) {
    return TRIPLE_PAY_HOLIDAYS_BY_YEAR[year] || [];
}

async function fetchTriplePayHolidays(year) {
    try {
        const res = await fetch(`/api/holidays?year=${year}`);
        if (!res.ok) throw new Error('节假日数据不存在');
        const payload = await res.json();
        const list = Array.isArray(payload.holidays) ? payload.holidays : [];
        if (list.length === 0) return getTriplePayHolidays(year);
        return list
            .map(h => ({
                label: String(h.label || '').trim(),
                month: Number(h.month),
                day: Number(h.day)
            }))
            .filter(h => h.label && h.month && h.day)
            .sort((a, b) => (a.month - b.month) || (a.day - b.day) || a.label.localeCompare(b.label));
    } catch (err) {
        console.warn('fetchTriplePayHolidays fallback', err);
        return getTriplePayHolidays(year);
    }
}

// 四个班组的减班规则（可按需单独调整）
const TEAM_DEDUCTION_RULES = {
    '神鹰': {
    oneOff: {
        '年假': { white: 1, night: 2 },
        '复训': { white: 1, night: 2 },
        '航实': { white: 1, night: 1 },
        'D模': { night: 1 },
        '婚假': { white: 2, night: 4 },
        '育儿': { white: 1, night: 2 }
    },
    adminLike: ['行政','出差','培训','情报']
},
    'CAVOK': {
    oneOff: {
        '年假': { white: 1, night: 2 },
        '复训': { white: 1, night: 2 },
        '航实': { white: 1, night: 1 },
        'D模': { night: 1 },
        '婚假': { white: 2, night: 4 },
        '育儿': { white: 1, night: 2 }
    },
    adminLike: ['行政','出差','培训','情报']
},
    '天行者': {
    oneOff: {
        '年假': { white: 1, night: 2 },
        '复训': { white: 1, night: 2 },
        '航实': { white: 1, night: 1 },
        'D模': { night: 1 },
        '婚假': { white: 2, night: 4 },
        '育儿': { white: 1, night: 2 }
    },
    adminLike: ['行政','出差','培训','情报']
},
    '签动未来': {
    oneOff: {
        '年假': { white: 1, night: 2 },
        '复训': { white: 1, night: 2 },
        '航实': { white: 1, night: 1 },
        'D模': { night: 1 },
        '婚假': { white: 2, night: 4 },
        '育儿': { white: 1, night: 2 }
    },
    adminLike: ['行政','出差','培训','情报']
}
};

function getDeductionRules(team) {
    if (!team || !TEAM_DEDUCTION_RULES[team]) return DEFAULT_DEDUCTION_RULES;
    return TEAM_DEDUCTION_RULES[team];
}

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    initializeYearSelect();
    initializePersonnelList(); // 调用新的初始化人员列表函数
    generateSchedule();
    setupEventListeners();
    initializeArchiveGrid();
});

function initializeArchiveGrid() {
    const grid = document.getElementById('archiveGrid');
    if (!grid) return;
    if (grid.childElementCount > 0) return;
    for (let m = 1; m <= 12; m++) {
        const tile = document.createElement('div');
        tile.className = 'archive-tile';
        tile.dataset.month = String(m);
        const thumb = document.createElement('div');
        thumb.className = 'archive-thumb';
        const label = document.createElement('span');
        label.className = 'archive-tile-label';
        label.textContent = `${m}月`;
        tile.appendChild(thumb);
        tile.appendChild(label);
        tile.addEventListener('click', () => openArchiveMonth(m));
        grid.appendChild(tile);
    }
}

function enterArchiveMode() {
    isArchiveMode = true;
    currentArchiveMonth = null;
    const editIndicator = document.getElementById('editModeIndicator');
    if (editIndicator) editIndicator.textContent = '归档模式';
    const archiveBtn = document.getElementById('archiveBtn');
    if (archiveBtn) archiveBtn.textContent = '排班界面';
    const generateBtn = document.getElementById('generateBtn');
    const exportBtn = document.getElementById('exportBtn');
    const editBtn = document.getElementById('editBtn');
    const showStatsBtn = document.getElementById('showStatsBtn');
    if (generateBtn) generateBtn.style.display = 'none';
    if (exportBtn) exportBtn.style.display = 'none';
    if (editBtn) editBtn.style.display = 'none';
    if (showStatsBtn) showStatsBtn.style.display = 'none';
    const qualificationPanel = document.querySelector('.qualification-panel');
    if (qualificationPanel) {
        if (!originalQualificationHtml) originalQualificationHtml = qualificationPanel.innerHTML;
        qualificationPanel.innerHTML = '';
    }
    const controls = document.querySelector('.controls');
    if (controls) controls.style.display = 'none';
    showArchiveGrid();
    renderRecentArchives();
}

function showArchiveGrid() {
    const grid = document.getElementById('archiveGrid');
    const actions = document.getElementById('archiveActions');
    const homeActions = document.getElementById('archiveHomeActions');
    const recent = document.getElementById('archiveRecent');
    const header = document.getElementById('scheduleHeader');
    const body = document.getElementById('scheduleBody');
    if (header) header.style.display = 'none';
    if (body) body.style.display = 'none';
    if (actions) actions.style.display = 'none';
    if (homeActions) homeActions.style.display = 'flex';
    if (grid) grid.style.display = 'grid';
    if (recent) recent.style.display = 'none';
    renderRecentArchives();
}

function openArchiveMonth(month) {
    if (!isArchiveMode) return;
    currentArchiveMonth = month;
    const grid = document.getElementById('archiveGrid');
    const actions = document.getElementById('archiveActions');
    const homeActions = document.getElementById('archiveHomeActions');
    const recent = document.getElementById('archiveRecent');
    const header = document.getElementById('scheduleHeader');
    const body = document.getElementById('scheduleBody');
    if (grid) grid.style.display = 'none';
    if (header) header.style.display = '';
    if (body) body.style.display = '';
    if (actions) actions.style.display = 'flex';
    if (homeActions) homeActions.style.display = 'none';
    if (recent) recent.style.display = 'block';
    renderRecentArchives();

    const year = parseInt(document.getElementById('yearSelect').value);
    const monthSelect = document.getElementById('monthSelect');
    if (monthSelect) monthSelect.value = String(month);
    const daySelect = document.getElementById('daySelect');
    if (daySelect) daySelect.value = '1';

    const daysInMonth = new Date(year, month, 0).getDate();
    generateScheduleHeader(daysInMonth);

    const team = teamSelect ? teamSelect.value : Object.keys(teamMembers)[0];
    loadArchiveSchedule(team, year, month).then(storedSchedule => {
        if (storedSchedule) {
            const sched = buildArchiveScheduler(team, year, month, storedSchedule);
            window.schedulerInstance = sched;
            updateScheduleDisplay(team, storedSchedule, sched.config);
        } else {
            const emptySchedule = Array.from({ length: daysInMonth }, () => ({ dayShift: {}, nightShift: {} }));
            const sched = buildArchiveScheduler(team, year, month, emptySchedule);
            window.schedulerInstance = sched;
            updateScheduleDisplay(team, emptySchedule, sched.config);
        }
    });
}

function exitArchiveMode() {
    isArchiveMode = false;
    currentArchiveMonth = null;
    const editIndicator = document.getElementById('editModeIndicator');
    if (editIndicator) editIndicator.textContent = isEditMode ? '编辑模式' : '查看模式';
    const archiveBtn = document.getElementById('archiveBtn');
    if (archiveBtn) archiveBtn.textContent = '签档一录';
    const generateBtn = document.getElementById('generateBtn');
    const exportBtn = document.getElementById('exportBtn');
    const editBtn = document.getElementById('editBtn');
    const showStatsBtn = document.getElementById('showStatsBtn');
    if (generateBtn) generateBtn.style.display = '';
    if (exportBtn) exportBtn.style.display = '';
    if (editBtn) editBtn.style.display = '';
    if (showStatsBtn) showStatsBtn.style.display = '';
    const homeActions = document.getElementById('archiveHomeActions');
    const recent = document.getElementById('archiveRecent');
    if (homeActions) homeActions.style.display = 'none';
    if (recent) recent.style.display = 'none';
    const actions = document.getElementById('archiveActions');
    if (actions) actions.style.display = 'none';
    const grid = document.getElementById('archiveGrid');
    if (grid) grid.style.display = 'none';
    const header = document.getElementById('scheduleHeader');
    const body = document.getElementById('scheduleBody');
    if (header) header.style.display = '';
    if (body) body.style.display = '';
    const qualificationPanel = document.querySelector('.qualification-panel');
    if (qualificationPanel && originalQualificationHtml) {
        qualificationPanel.innerHTML = originalQualificationHtml;
        originalQualificationHtml = '';
    }
    const controls = document.querySelector('.controls');
    if (controls) controls.style.display = 'flex';
    generateSchedule();
}

function clearCurrentArchive() {
    if (!isArchiveMode || !currentArchiveMonth) {
        alert('请先选择归档月份');
        return;
    }
    const team = teamSelect ? teamSelect.value : Object.keys(teamMembers)[0];
    const year = parseInt(document.getElementById('yearSelect').value);
    deleteArchiveEntries(team, year, currentArchiveMonth).then(() => {
        const daysInMonth = new Date(year, currentArchiveMonth, 0).getDate();
        const emptySchedule = Array.from({ length: daysInMonth }, () => ({ dayShift: {}, nightShift: {} }));
        const sched = buildArchiveScheduler(team, year, currentArchiveMonth, emptySchedule);
        window.schedulerInstance = sched;
        updateScheduleDisplay(team, emptySchedule, sched.config);
        alert('已清空当前月份归档');
        renderRecentArchives();
    });
}

function renderRecentArchives() {
    const list = document.getElementById('archiveRecentList');
    if (!list) return;
    list.innerHTML = '';
    const team = teamSelect ? teamSelect.value : Object.keys(teamMembers)[0];
    const year = parseInt(document.getElementById('yearSelect').value);
    loadArchiveSummary(team, year).then(items => {
        if (!items || items.length === 0) {
            const empty = document.createElement('div');
            empty.textContent = '暂无归档记录';
            list.appendChild(empty);
            updateArchiveGridThumbnails();
            return;
        }
        items.slice(0, 5).forEach(item => {
            const row = document.createElement('div');
            row.className = 'archive-recent-item';
            row.textContent = `${item}月归档`;
            row.addEventListener('click', () => openArchiveMonth(item));
            list.appendChild(row);
        });
        updateArchiveGridThumbnails();
    });
}

function updateArchiveGridThumbnails() {
    const grid = document.getElementById('archiveGrid');
    if (!grid) return;
    const team = teamSelect ? teamSelect.value : Object.keys(teamMembers)[0];
    const year = parseInt(document.getElementById('yearSelect').value);
    Array.from(grid.children).forEach(tile => {
        const month = parseInt(tile.dataset.month);
        const thumb = tile.querySelector('.archive-thumb');
        if (!thumb || !month) return;
        loadArchiveSchedule(team, year, month).then(storedSchedule => {
            if (storedSchedule) {
                const dataUrl = buildArchiveThumbnail(storedSchedule);
                thumb.style.backgroundImage = dataUrl ? `url(${dataUrl})` : '';
                tile.classList.add('has-archive');
            } else {
                thumb.style.backgroundImage = '';
                tile.classList.remove('has-archive');
            }
        });
    });
}

function buildArchiveThumbnail(schedule) {
    if (!Array.isArray(schedule) || schedule.length === 0) return '';
    const canvas = document.createElement('canvas');
    const size = 180;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return '';
    const days = schedule.length;
    const cellWidth = size / days;
    const rowHeight = size / 2;
    for (let i = 0; i < days; i++) {
        const dayShift = schedule[i]?.dayShift || {};
        const nightShift = schedule[i]?.nightShift || {};
        const dayPositions = Object.keys(dayShift).sort();
        const nightPositions = Object.keys(nightShift).sort();
        const dayCount = Math.max(1, dayPositions.length);
        const nightCount = Math.max(1, nightPositions.length);
        if (dayPositions.length === 0) {
            ctx.fillStyle = '#e5e7eb';
            ctx.fillRect(i * cellWidth, 0, cellWidth, rowHeight);
        } else {
            dayPositions.forEach((pos, index) => {
                ctx.fillStyle = getPositionColor(pos);
                ctx.fillRect(
                    i * cellWidth + (cellWidth / dayCount) * index,
                    0,
                    cellWidth / dayCount,
                    rowHeight
                );
            });
        }
        if (nightPositions.length === 0) {
            ctx.fillStyle = '#e5e7eb';
            ctx.fillRect(i * cellWidth, rowHeight, cellWidth, rowHeight);
        } else {
            nightPositions.forEach((pos, index) => {
                ctx.fillStyle = getPositionColor(pos);
                ctx.fillRect(
                    i * cellWidth + (cellWidth / nightCount) * index,
                    rowHeight,
                    cellWidth / nightCount,
                    rowHeight
                );
            });
        }
    }
    return canvas.toDataURL('image/png');
}

function getPrimaryShiftColor(shiftObj) {
    const keys = Object.keys(shiftObj || {});
    if (keys.length === 0) return '#e5e7eb';
    return getPositionColor(keys[0]);
}

function getPositionColor(position) {
    const map = {
        'B11': '#FF0000',
        'B12': '#FF6600',
        'B13': '#7CF93F',
        'B16': '#CC99FF',
        'B18': '#0070C0',
        '主班': '#FA26ED',
        '监控': '#00CCFF',
        '支持': '#008000',
        '大夜一': '#FFFF00',
        '大夜二': '#24BE7B',
        '年假': '#FF7B7B',
        '复训': '#FF99CC',
    '婚假': '#F472B6',
    '育儿': '#60A5FA',
        'D模': '#FF99CC',
        '航实': '#7E62A1',
        '情报': '#FFC000',
        '培训': '#7030A0',
        '行政': '#7030A0',
        '出差': '#7030A0',
        '休息': '#8d6e63'
    };
    return map[position] || '#e5e7eb';
}

async function saveArchiveSchedule(team, year, month, sched) {
    if (!sched || !sched.schedule) return false;
    const entries = buildArchiveEntriesFromSchedule(team, year, month, sched.schedule);
    try {
        const res = await fetch('/api/archives', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ team, year, month, entries })
        });
        if (!res.ok) throw new Error('保存归档失败');
        return true;
    } catch (err) {
        console.error('saveArchiveSchedule failed', err);
        alert('归档保存失败，请检查后端服务');
        return false;
    }
}

async function loadArchiveSchedule(team, year, month) {
    try {
        const res = await fetch(`/api/archives?team=${encodeURIComponent(team)}&year=${year}&month=${month}`);
        if (!res.ok) return null;
        const payload = await res.json();
        if (!payload || !Array.isArray(payload.entries)) return null;
        return buildScheduleFromArchiveEntries(year, month, payload.entries);
    } catch (err) {
        console.error('loadArchiveSchedule failed', err);
        return null;
    }
}

async function loadArchiveSummary(team, year) {
    try {
        const res = await fetch(`/api/archives/summary?team=${encodeURIComponent(team)}&year=${year}`);
        if (!res.ok) return [];
        const payload = await res.json();
        return payload.months || [];
    } catch (err) {
        console.error('loadArchiveSummary failed', err);
        return [];
    }
}

async function deleteArchiveEntries(team, year, month) {
    try {
        const res = await fetch(`/api/archives?team=${encodeURIComponent(team)}&year=${year}&month=${month}`, {
            method: 'DELETE'
        });
        if (!res.ok) throw new Error('清空失败');
        return true;
    } catch (err) {
        console.error('deleteArchiveEntries failed', err);
        alert('清空归档失败，请检查后端服务');
        return false;
    }
}

function buildArchiveEntriesFromSchedule(team, year, month, schedule) {
    const entries = [];
    const sched = window.schedulerInstance;
    const whitePositions = (sched && sched.whitePositions) ? sched.whitePositions : ['B11', 'B12', 'B13', 'B16', 'B18', '主班', '监控', '支持'];
    const nightPositions = (sched && sched.nightPositions) ? sched.nightPositions : [...whitePositions, '大夜一', '大夜二'];
    schedule.forEach((dayData, index) => {
        const day = index + 1;
        const dayShift = (dayData && dayData.dayShift) ? dayData.dayShift : {};
        const nightShift = (dayData && dayData.nightShift) ? dayData.nightShift : {};
        Object.entries(dayShift).forEach(([key, value]) => {
            if (!value) return;
            if (key.startsWith('__')) return;
            const morningFlag = dayShift[`__morning__${key}`];
            const style = getShiftStyle(dayShift, key);
            if (whitePositions.includes(key) && value) {
                entries.push({
                    team,
                    year,
                    month,
                    day,
                    person: value,
                    shift_type: 'day',
                    seat_category: 'position',
                    seat_name: key,
                    shift_value: morningFlag ? '早' : '白',
                    bgcolor: style.bgcolor,
                    fgcolor: style.fgcolor
                });
                return;
            }
            if (value) {
                entries.push({
                    team,
                    year,
                    month,
                    day,
                    person: key,
                    shift_type: 'day',
                    seat_category: 'event',
                    seat_name: null,
                    shift_value: value,
                    bgcolor: style.bgcolor,
                    fgcolor: style.fgcolor
                });
            }
        });
        Object.entries(nightShift).forEach(([key, value]) => {
            if (!value) return;
            if (key.startsWith('__')) return;
            const style = getShiftStyle(nightShift, key);
            if (nightPositions.includes(key) && value) {
                entries.push({
                    team,
                    year,
                    month,
                    day,
                    person: value,
                    shift_type: 'night',
                    seat_category: 'position',
                    seat_name: key,
                    shift_value: '夜',
                    bgcolor: style.bgcolor,
                    fgcolor: style.fgcolor
                });
                return;
            }
            if (value) {
                entries.push({
                    team,
                    year,
                    month,
                    day,
                    person: key,
                    shift_type: 'night',
                    seat_category: 'event',
                    seat_name: null,
                    shift_value: value,
                    bgcolor: style.bgcolor,
                    fgcolor: style.fgcolor
                });
            }
        });
    });
    return entries;
}

function buildScheduleFromArchiveEntries(year, month, entries) {
    const daysInMonth = new Date(year, month, 0).getDate();
    const schedule = Array.from({ length: daysInMonth }, () => ({ dayShift: {}, nightShift: {} }));
    entries.forEach(entry => {
        const dayIndex = (entry.day || 1) - 1;
        if (!schedule[dayIndex]) return;
        const shiftMap = entry.shift_type === 'night' ? schedule[dayIndex].nightShift : schedule[dayIndex].dayShift;
        const seatName = entry.seat_name || null;
        const key = seatName || entry.person;
        if (entry.seat_category === 'position' && seatName) {
            shiftMap[seatName] = entry.person;
            if (entry.shift_type === 'day' && entry.shift_value === '早') {
                shiftMap[`__morning__${seatName}`] = true;
            }
        } else {
            shiftMap[entry.person] = entry.shift_value;
        }
        if (entry.bgcolor) shiftMap[`__bgcolor__${key}`] = entry.bgcolor;
        if (entry.fgcolor) shiftMap[`__fgcolor__${key}`] = entry.fgcolor;
    });
    return schedule;
}

function getShiftStyle(shiftMap, key) {
    return {
        bgcolor: shiftMap[`__bgcolor__${key}`] || null,
        fgcolor: shiftMap[`__fgcolor__${key}`] || null
    };
}

function extractArchiveSchedule(stored) {
    if (!stored) return null;
    if (Array.isArray(stored)) return stored;
    if (Array.isArray(stored.schedule)) return stored.schedule;
    return null;
}

function buildArchiveScheduler(team, year, month, schedule) {
    const teamPeople = teamMembers[team] || [];
    const config = {
        year,
        month,
        startDay: 1,
        team,
        people: teamPeople.map(name => ({
            name,
            qualifications: personnelData[name],
            fixedDays: {}
        }))
    };
    const sched = new Scheduler();
    sched.initialize(config);
    sched.schedule = schedule;
    return sched;
}

function getScheduleKey(team, year, month) {
    return `schedule:${team}:${year}:${month}`;
}

async function saveCurrentSchedule() {
    const team = teamSelect ? teamSelect.value : Object.keys(teamMembers)[0];
    const year = parseInt(document.getElementById('yearSelect').value);
    const month = parseInt(document.getElementById('monthSelect').value);
    const sched = window.schedulerInstance;
    if (!sched || !sched.schedule) {
        alert('暂无可保存的排班数据');
        return false;
    }
    const payload = { team, year, month, schedule: sched.schedule };
    try {
        const res = await fetch('/api/schedules', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error('保存失败');
        return true;
    } catch (err) {
        console.error('saveCurrentSchedule failed', err);
        alert('保存失败，请检查后端服务');
        return false;
    }
}

async function loadSavedSchedule(team, year, month) {
    try {
        const res = await fetch(`/api/schedules?team=${encodeURIComponent(team)}&year=${year}&month=${month}`);
        if (!res.ok) return null;
        return await res.json();
    } catch (err) {
        console.error('loadSavedSchedule failed', err);
        return null;
    }
}

async function clearSavedSchedule(team, year, month) {
    try {
        const res = await fetch(`/api/schedules?team=${encodeURIComponent(team)}&year=${year}&month=${month}` , {
            method: 'DELETE'
        });
        if (!res.ok) throw new Error('删除失败');
        return true;
    } catch (err) {
        console.error('clearSavedSchedule failed', err);
        alert('清空失败，请检查后端服务');
        return false;
    }
}

function buildMonthScheduler(team, year, month, schedule) {
    const teamPeople = teamMembers[team] || [];
    const startDay = parseInt(document.getElementById('daySelect').value) || 1;
    const fixedDaysByPerson = {};
    Object.keys(fixedDaysByPersonCache).forEach(person => {
        fixedDaysByPerson[person] = { ...(fixedDaysByPersonCache[person] || {}) };
    });
    const config = {
        year,
        month,
        startDay,
        team,
        people: teamPeople.map(name => ({
            name,
            qualifications: personnelData[name],
            fixedDays: fixedDaysByPerson[name] || {}
        }))
    };
    const sched = new Scheduler();
    sched.initialize(config);
    sched.schedule = schedule;
    return sched;
}

// 增加用于显示统计的模态容器（动态创建）
function ensureStatsModal() {
    if (document.getElementById('statsModal')) return;
    const modal = document.createElement('div');
    modal.id = 'statsModal';
    modal.className = 'modal';
    modal.innerHTML = `<div class="modal-content" style="width:90%;max-width:1200px"><h3>排班统计</h3><div id="statsContent" style="max-height:70vh;overflow:auto;margin-top:10px"></div><div style="text-align:right;margin-top:10px"><button id="statsClose">关闭</button></div></div>`;
    document.body.appendChild(modal);
    modal.querySelector('#statsClose').addEventListener('click', () => { modal.style.display = 'none'; });
}

function ensureAnnualStatsModal() {
    if (document.getElementById('annualStatsModal')) return;
    const modal = document.createElement('div');
    modal.id = 'annualStatsModal';
    modal.className = 'modal';
    modal.innerHTML = `<div class="modal-content" style="width:90%;max-width:1200px"><h3>年度排班统计</h3><div id="annualStatsContent" style="max-height:70vh;overflow:auto;margin-top:10px"></div><div style="text-align:right;margin-top:10px"><button id="annualStatsClose">关闭</button></div></div>`;
    document.body.appendChild(modal);
    modal.querySelector('#annualStatsClose').addEventListener('click', () => { modal.style.display = 'none'; });
}

function ensureAnnualVacationModal() {
    if (document.getElementById('annualVacationModal')) return;
    const modal = document.createElement('div');
    modal.id = 'annualVacationModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="width:90%;max-width:1200px">
            <h3>年度休假记录</h3>
            <div id="annualVacationContent" style="max-height:70vh;overflow:auto;margin-top:10px"></div>
            <div style="text-align:right;margin-top:10px">
                <button id="annualVacationSave">保存</button>
                <button id="annualVacationClose">关闭</button>
            </div>
        </div>`;
    document.body.appendChild(modal);
    modal.querySelector('#annualVacationClose').addEventListener('click', () => { modal.style.display = 'none'; });
}

function ensureTriplePayModal() {
    if (document.getElementById('triplePayModal')) return;
    const modal = document.createElement('div');
    modal.id = 'triplePayModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="width:90%;max-width:1400px">
            <h3>三倍工资记录</h3>
            <div id="triplePayContent" style="max-height:70vh;overflow:auto;margin-top:10px"></div>
            <div style="text-align:right;margin-top:10px">
                <button id="triplePayClose">关闭</button>
            </div>
        </div>`;
    document.body.appendChild(modal);
    modal.querySelector('#triplePayClose').addEventListener('click', () => { modal.style.display = 'none'; });
}

function ensureHolidayConfigModal() {
    if (document.getElementById('holidayConfigModal')) return;
    const modal = document.createElement('div');
    modal.id = 'holidayConfigModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="width:90%;max-width:900px">
            <h3>节假日配置</h3>
            <div id="holidayConfigContent" style="max-height:70vh;overflow:auto;margin-top:10px"></div>
            <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:10px">
                <button id="holidayConfigCopyPrev">复制上一年度</button>
                <button id="holidayConfigAdd">新增行</button>
                <button id="holidayConfigSave">保存</button>
                <button id="holidayConfigClose">关闭</button>
            </div>
        </div>`;
    document.body.appendChild(modal);
    modal.querySelector('#holidayConfigClose').addEventListener('click', () => { modal.style.display = 'none'; });
}

function ensureDeductionRulesModal() {
    if (document.getElementById('deductionRulesModal')) return;
    const modal = document.createElement('div');
    modal.id = 'deductionRulesModal';
    modal.className = 'modal';
    modal.innerHTML = `<div class="modal-content" style="width:90%;max-width:900px"><h3>减班计算规则</h3><div id="deductionRulesContent" style="max-height:70vh;overflow:auto;margin-top:10px"></div><div style="text-align:right;margin-top:10px"><button id="deductionRulesClose">关闭</button></div></div>`;
    document.body.appendChild(modal);
    modal.querySelector('#deductionRulesClose').addEventListener('click', () => { modal.style.display = 'none'; });
}

function meetsDailyThresholds(scheduler) {
    if (!scheduler || !scheduler.schedule) return false;
    const startDay = (scheduler.config && scheduler.config.startDay) ? scheduler.config.startDay : 1;
    const whitePositions = scheduler.whitePositions || [];
    const nightPositions = scheduler.nightPositions || [];

    const countFilled = (shiftMap, positions) => {
        let cnt = 0;
        positions.forEach(pos => {
            if (shiftMap && shiftMap[pos]) cnt++;
        });
        return cnt;
    };

    for (let d = startDay - 1; d < scheduler.schedule.length; d++) {
        const sd = scheduler.schedule[d] || { dayShift: {}, nightShift: {} };
        let whiteCnt = 0;
        let nightCnt = 0;

        whiteCnt = countFilled(sd.dayShift, whitePositions);
        nightCnt = countFilled(sd.nightShift, nightPositions);

        if (whiteCnt < 8 || nightCnt < 10) return false;
    }
    return true;
}

function meetsSeatFill(scheduler) {
    if (!scheduler || !scheduler.schedule) return false;
    const startDay = (scheduler.config && scheduler.config.startDay) ? scheduler.config.startDay : 1;
    const whitePositions = scheduler.whitePositions || [];
    const nightPositions = scheduler.nightPositions || [];

    const countFilled = (shiftMap, positions) => {
        let cnt = 0;
        positions.forEach(pos => {
            if (shiftMap && shiftMap[pos]) cnt++;
        });
        return cnt;
    };

    for (let d = startDay - 1; d < scheduler.schedule.length; d++) {
        const sd = scheduler.schedule[d] || { dayShift: {}, nightShift: {} };
        const whiteCnt = countFilled(sd.dayShift, whitePositions);
        const nightCnt = countFilled(sd.nightShift, nightPositions);
        if (whiteCnt < 8) return false;
        if (nightCnt < 10) return false;
    }
    return true;
}

// 返回未达标的日期明细（用于内部重试诊断，不弹窗）
function getDailyThresholdFailures(scheduler) {
    if (!scheduler || !scheduler.schedule) return [];
    const startDay = (scheduler.config && scheduler.config.startDay) ? scheduler.config.startDay : 1;
    const whitePositions = scheduler.whitePositions || [];
    const nightPositions = scheduler.nightPositions || [];
    const failures = [];
    for (let d = startDay - 1; d < scheduler.schedule.length; d++) {
        const sd = scheduler.schedule[d] || { dayShift: {}, nightShift: {} };
    let whiteCnt = 0;
    let nightCnt = 0;
    whitePositions.forEach(pos => { if (sd.dayShift && sd.dayShift[pos]) whiteCnt++; });
    nightPositions.forEach(pos => { if (sd.nightShift && sd.nightShift[pos]) nightCnt++; });
        if (whiteCnt < 8 || nightCnt < 10) {
            failures.push({ dayIndex: d, day: d + 1, whiteCnt, nightCnt });
        }
    }
    return failures;
}

// 检查“夜班次日出现白班”冲突：若某人当天有夜班，次日不得出现白班（非早班映射）
function getNightWhiteConflicts(scheduler) {
    if (!scheduler || !scheduler.schedule) return [];
    const startDay = (scheduler.config && scheduler.config.startDay) ? scheduler.config.startDay : 1;
    const whitePositions = scheduler.whitePositions || [];
    const nightPositions = scheduler.nightPositions || [];
    const conflicts = [];

    for (let d = startDay - 1; d < scheduler.schedule.length - 1; d++) {
        const sd = scheduler.schedule[d] || { nightShift: {} };
        const next = scheduler.schedule[d + 1] || { dayShift: {} };
        nightPositions.forEach(npos => {
            const person = sd.nightShift && sd.nightShift[npos];
            if (!person) return;
            for (let i = 0; i < whitePositions.length; i++) {
                const wpos = whitePositions[i];
                if (!next.dayShift || !next.dayShift[wpos]) continue;
                if (next.dayShift[wpos] !== person) continue;
                const isMorning = !!next.dayShift[`__morning__${wpos}`];
                if (!isMorning) {
                    conflicts.push({
                        dayIndex: d,
                        day: d + 1,
                        person,
                        nightPos: npos,
                        nextDay: d + 2,
                        nextPos: wpos
                    });
                }
            }
        });
    }
    return conflicts;
}

// 诊断夜班缺口原因
function getNightGapDiagnostics(scheduler) {
    if (!scheduler || !scheduler.schedule)  return [];
    const startDay = (scheduler.config && scheduler.config.startDay) ? scheduler.config.startDay : 1;
    const days = scheduler.schedule.length;
    const nightPositions = scheduler.nightPositions || [];
    const gaps = [];

    for (let d = startDay - 1; d < days; d++) {
        const sd = scheduler.schedule[d] || { nightShift: {} };
        nightPositions.forEach(pos => {
            if (sd.nightShift && sd.nightShift[pos]) return;
            let reason = '未知原因';
            const nextIdx = d + 1;
            if (hasSpecialSeatConflictOnDay(scheduler, d, pos)) {
                reason = '当日席位被特殊班次锁定';
            } else if (nextIdx < days && hasSpecialSeatConflictOnDay(scheduler, nextIdx, pos)) {
                reason = '次日席位被特殊班次锁定';
            } else if (nextIdx < days && isFixedSeatOnDay(pos, nextIdx + 1)) {
                reason = '次日该席位固定';
            } else {
                const candidateCount = (scheduler.people || []).filter(p => {
                    if (!(p.qualifications || []).includes(pos)) return false;
                    if (scheduler._isPersonFixedOnDay && scheduler._isPersonFixedOnDay(p.name, d + 1)) return false;
                    if (isPersonSpecialOnDay(scheduler, d, p.name)) return false;
                    if (nextIdx < days && scheduler._isPersonFixedOnDay && scheduler._isPersonFixedOnDay(p.name, nextIdx + 1)) return false;
                    if (nextIdx < days && isPersonSpecialOnDay(scheduler, nextIdx, p.name)) return false;
                    return true;
                }).length;
                if (candidateCount === 0) {
                    reason = '无人具备该席位资质或人员被固定/特殊占用';
                } else {
                    reason = `可用候选不足（候选数=${candidateCount}）`;
                }
            }

            gaps.push({ dayIndex: d, day: d + 1, pos, reason });
        });
    }
    return gaps;
}

// 校验排班总量规则：白班=值班日*8，夜早班=值班日*10，人员基准=(总班数+总减班)/人数
function getWorkloadRuleDiagnostics(scheduler) {
    if (!scheduler || !scheduler.schedule) return { ok: false, reason: '缺少排班数据' };
    const startDay = (scheduler.config && scheduler.config.startDay) ? scheduler.config.startDay : 1;
    const scheduleDays = Math.max(0, scheduler.schedule.length - (startDay - 1));
    const whiteRequired = scheduleDays * 8;
    const nightRequired = scheduleDays * 10;
    const whitePositions = scheduler.whitePositions || [];
    const nightPositions = scheduler.nightPositions || [];
    let whiteActual = 0;
    let nightActual = 0;

    for (let d = startDay - 1; d < scheduler.schedule.length; d++) {
        const sd = scheduler.schedule[d] || { dayShift: {}, nightShift: {} };
        whitePositions.forEach(pos => {
            if (!sd.dayShift || !sd.dayShift[pos]) return;
            const morningFlag = sd.dayShift[`__morning__${pos}`];
            if (morningFlag) return;
            whiteActual++;
        });
        nightPositions.forEach(pos => {
            if (sd.nightShift && sd.nightShift[pos]) nightActual++;
        });
    }

    const people = scheduler.people || [];
    const totalDeduction = people.reduce((sum, p) => {
        const d = p.deductionsBase || p.deductions || { white: 0, night: 0 };
        return sum + (d.white || 0) + (d.night || 0);
    }, 0);
    const totalSlots = whiteRequired + nightRequired;
    const base = people.length > 0 ? (totalSlots + totalDeduction) / people.length : 0;

    const perPerson = {};
    people.forEach(p => {
        const d = p.deductionsBase || p.deductions || { white: 0, night: 0 };
        const expected = base - ((d.white || 0) + (d.night || 0));
        perPerson[p.name] = { expected };
    });

    return {
        ok: whiteActual === whiteRequired && nightActual === nightRequired,
        whiteRequired,
        nightRequired,
        whiteActual,
        nightActual,
        base,
        perPerson
    };
}

// 检查“预期夜班”是否被排成白班或缺失夜班
function getNightExpectationConflicts(scheduler) {
    if (!scheduler || !scheduler.schedule || !scheduler.expectedShiftByDay) return [];
    const startDay = (scheduler.config && scheduler.config.startDay) ? scheduler.config.startDay : 1;
    const conflicts = [];
    const people = (scheduler.people || []).map(p => p.name);
    for (let d = startDay - 1; d < scheduler.schedule.length; d++) {
        const expectedMap = scheduler.expectedShiftByDay[d] || {};
        const sd = scheduler.schedule[d] || { dayShift: {}, nightShift: {} };
        const dayValues = Object.values(sd.dayShift || {});
        const nightValues = Object.values(sd.nightShift || {});
        people.forEach(name => {
            const expected = expectedMap[name];
            if (expected !== 'night') return;
            if (scheduler._isPersonFixedOnDay && scheduler._isPersonFixedOnDay(name, d + 1)) return;
            const hasNight = nightValues.includes(name);
            const hasDay = dayValues.includes(name);
            if (!hasNight || hasDay) {
                conflicts.push({ dayIndex: d, day: d + 1, person: name, hasNight, hasDay });
            }
        });
    }
    return conflicts;
}

// 判断某人是否在前一日上夜班
function hadNightPreviousDay(scheduler, dayIndex, personName) {
    if (!scheduler || !scheduler.schedule) return false;
    const prevIdx = dayIndex - 1;
    if (prevIdx < 0 || prevIdx >= scheduler.schedule.length) return false;
    const prev = scheduler.schedule[prevIdx] || { nightShift: {} };
    return Object.values(prev.nightShift || {}).some(v => v === personName);
}

// 判断前一日“预期夜班但未排上”（用于避免次日误排白班）
function missedExpectedNightPrevDay(scheduler, dayIndex, personName) {
    if (!scheduler || !scheduler.schedule || !scheduler.expectedShiftByDay) return false;
    const prevIdx = dayIndex - 1;
    if (prevIdx < 0 || prevIdx >= scheduler.schedule.length) return false;
    const expectedPrev = (scheduler.expectedShiftByDay[prevIdx] || {})[personName];
    if (expectedPrev !== 'night') return false;
    const prev = scheduler.schedule[prevIdx] || { nightShift: {} };
    const hasNight = Object.values(prev.nightShift || {}).some(v => v === personName);
    return !hasNight;
}

// 在 header 的 date-selector 区域添加一个“显示统计”按钮（方便调试）
function ensureStatsButton() {
    const container = document.querySelector('.date-selector');
    if (!container) return;
    if (document.getElementById('showStatsBtn')) return;
    const btn = document.createElement('button');
    btn.id = 'showStatsBtn';
    btn.textContent = '排班统计';
    btn.style.backgroundColor = '#27ae60';
    btn.style.marginLeft = '6px';
    const archiveBtn = document.getElementById('archiveBtn');
    if (archiveBtn) {
        container.insertBefore(btn, archiveBtn);
    } else {
        container.appendChild(btn);
    }
    btn.addEventListener('click', () => {
        ensureStatsModal();
        showStatsModal();
    });
}

// 显示统计模态：读取 window.schedulerInstance（若存在）并统计每人白/夜
function showStatsModal() {
    ensureStatsModal();
    const modal = document.getElementById('statsModal');
    const content = document.getElementById('statsContent');
    if (!content) return;
    const sched = window.schedulerInstance;
    if (!sched || !sched.schedule) {
        content.innerHTML = '<p>尚未生成排班或 schedulerInstance 不存在。</p>';
        modal.style.display = 'flex';
        return;
    }

    const statsPayload = computeScheduleStats(sched);
    const currentMonth = sched.config?.month || parseInt(document.getElementById('monthSelect').value);
    content.innerHTML = buildAnnualStatsTable(statsPayload, sched.config?.team || '当前班组', sched.config?.year || '', currentMonth);
    modal.style.display = 'flex';
}

function computeScheduleStats(sched) {
    const people = (sched.people || []).map(p => p.name);
    const positionsDay = ['主班', 'B11', 'B12', 'B13', 'B16', 'B18', '监控', '支持', '情报'];
    const positionsNight = ['主班', 'B11', 'B12', 'B13', 'B16', 'B18', '监控', '支持', '大夜一', '大夜二'];
    const colorPositionMap = buildPositionColorMap([...positionsDay, ...positionsNight]);
    const stats = {};
    people.forEach(name => {
        stats[name] = {
            whiteTotal: 0,
            nightTotal: 0,
            dayPositions: Object.fromEntries(positionsDay.map(p => [p, 0])),
            nightPositions: Object.fromEntries(positionsNight.map(p => [p, 0]))
        };
    });
    (sched.schedule || []).forEach(sd => {
        const dayShift = sd?.dayShift || {};
        const nightShift = sd?.nightShift || {};
        Object.entries(dayShift).forEach(([k, v]) => {
            if (!v) return;
            if (k.startsWith('__morning__')) return;
            const morningFlag = dayShift[`__morning__${k}`];
            if (morningFlag) return;
            const assigned = resolveAssignedPerson(k, v, people, ['白', '情报']);
            if (!assigned) return;
            stats[assigned].whiteTotal++;
            const position = resolvePositionFromColor(dayShift, k, positionsDay, colorPositionMap);
            if (position && stats[assigned].dayPositions[position] !== undefined) {
                stats[assigned].dayPositions[position]++;
            }
            if (!position && v === '情报' && stats[assigned].dayPositions['情报'] !== undefined) {
                stats[assigned].dayPositions['情报']++;
            }
        });
        Object.entries(nightShift).forEach(([k, v]) => {
            if (!v) return;
            const assigned = resolveAssignedPerson(k, v, people, ['夜', '情报']);
            if (!assigned) return;
            stats[assigned].nightTotal++;
            const position = resolvePositionFromColor(nightShift, k, positionsNight, colorPositionMap);
            if (position && stats[assigned].nightPositions[position] !== undefined) {
                stats[assigned].nightPositions[position]++;
            }
        });
    });
    return { stats, positionsDay, positionsNight, people };
}

async function showAnnualStatsModal() {
    ensureAnnualStatsModal();
    const modal = document.getElementById('annualStatsModal');
    const content = document.getElementById('annualStatsContent');
    if (!content) return;
    const team = teamSelect ? teamSelect.value : Object.keys(teamMembers)[0];
    const year = parseInt(document.getElementById('yearSelect').value);
    const stats = await computeAnnualStats(team, year);
    content.innerHTML = buildAnnualStatsTable(stats, team, year);
    modal.style.display = 'flex';
}

async function showAnnualVacationModal() {
    ensureAnnualVacationModal();
    const modal = document.getElementById('annualVacationModal');
    const content = document.getElementById('annualVacationContent');
    if (!content) return;
    const team = teamSelect ? teamSelect.value : Object.keys(teamMembers)[0];
    const year = parseInt(document.getElementById('yearSelect').value);
    const summary = await buildAnnualVacationSummary(team, year);
    content.innerHTML = `<div style="margin-bottom:10px;font-size:14px;"><strong>班组：</strong>${team} | <strong>年度：</strong>${year}年</div>` + buildAnnualVacationTable(summary);
    const saveBtn = modal.querySelector('#annualVacationSave');
    if (saveBtn) {
        saveBtn.onclick = async () => {
            const records = collectAnnualVacationInputs();
            const ok = await saveLeaveRecords(team, year, records);
            if (ok) {
                const refreshed = await buildAnnualVacationSummary(team, year);
                content.innerHTML = buildAnnualVacationTable(refreshed);
                alert('休假数据已保存');
            }
        };
    }
    modal.style.display = 'flex';
}

async function showTriplePayModal() {
    ensureTriplePayModal();
    const modal = document.getElementById('triplePayModal');
    const content = document.getElementById('triplePayContent');
    if (!content) return;
    const team = teamSelect ? teamSelect.value : Object.keys(teamMembers)[0];
    const year = parseInt(document.getElementById('yearSelect').value);
    const summary = await buildTriplePaySummary(team, year);
    content.innerHTML = `<div style="margin-bottom:10px;font-size:14px;"><strong>班组：</strong>${team} | <strong>年度：</strong>${year}年</div>` + buildTriplePayTable(summary);
    modal.style.display = 'flex';
}

async function showHolidayConfigModal() {
    ensureHolidayConfigModal();
    const modal = document.getElementById('holidayConfigModal');
    const content = document.getElementById('holidayConfigContent');
    if (!content) return;
    const year = parseInt(document.getElementById('yearSelect').value);
    const holidays = await fetchTriplePayHolidays(year);
    content.innerHTML = buildHolidayConfigTable(year, holidays);
    const copyBtn = modal.querySelector('#holidayConfigCopyPrev');
    if (copyBtn) {
        copyBtn.onclick = async () => {
            const prevYear = year - 1;
            const prevHolidays = await fetchTriplePayHolidays(prevYear);
            if (!prevHolidays || prevHolidays.length === 0) {
                alert('未找到上一年度节假日配置');
                return;
            }
            content.innerHTML = buildHolidayConfigTable(year, prevHolidays);
        };
    }
    const addBtn = modal.querySelector('#holidayConfigAdd');
    if (addBtn) {
        addBtn.onclick = () => {
            const tbody = modal.querySelector('#holidayConfigTableBody');
            if (tbody) tbody.insertAdjacentHTML('beforeend', buildHolidayConfigRow({ label: '', month: '', day: '' }));
        };
    }
    const saveBtn = modal.querySelector('#holidayConfigSave');
    if (saveBtn) {
        saveBtn.onclick = async () => {
            const list = collectHolidayConfigInputs();
            const ok = await saveHolidayConfig(year, list);
            if (ok) {
                TRIPLE_PAY_HOLIDAYS_BY_YEAR[year] = list;
                content.innerHTML = buildHolidayConfigTable(year, list);
                alert('节假日配置已保存');
            }
        };
    }
    modal.style.display = 'flex';
}

function buildHolidayConfigRow(item) {
    return `
        <tr>
            <td style="padding:6px 8px;border:1px solid #d1d5db;">
                <input class="holiday-label" type="text" value="${item.label || ''}" placeholder="节日名称" style="width:100%;" />
            </td>
            <td style="padding:6px 8px;border:1px solid #d1d5db;">
                <input class="holiday-month" type="number" min="1" max="12" value="${item.month || ''}" style="width:80px;text-align:center;" />
            </td>
            <td style="padding:6px 8px;border:1px solid #d1d5db;">
                <input class="holiday-day" type="number" min="1" max="31" value="${item.day || ''}" style="width:80px;text-align:center;" />
            </td>
        </tr>
    `;
}

function buildHolidayConfigTable(year, holidays) {
    const rows = (holidays || []).map(item => buildHolidayConfigRow(item)).join('') || buildHolidayConfigRow({});
    return `
        <div style="margin-bottom:10px;font-size:14px;"><strong>年度：</strong>${year}年</div>
        <table style="width:100%;border-collapse:collapse;font-size:13px;">
            <thead>
                <tr>
                    <th style="padding:6px 8px;border:1px solid #d1d5db;background:#7d1a7a;color:#fff;">节日名称</th>
                    <th style="padding:6px 8px;border:1px solid #d1d5db;background:#d1d5db;">月份</th>
                    <th style="padding:6px 8px;border:1px solid #d1d5db;background:#d1d5db;">日期</th>
                </tr>
            </thead>
            <tbody id="holidayConfigTableBody">
                ${rows}
            </tbody>
        </table>
    `;
}

function collectHolidayConfigInputs() {
    const rows = Array.from(document.querySelectorAll('#holidayConfigTableBody tr'));
    return rows.map(row => {
        const label = row.querySelector('.holiday-label')?.value.trim();
        const month = Number(row.querySelector('.holiday-month')?.value);
        const day = Number(row.querySelector('.holiday-day')?.value);
        return { label, month, day };
    }).filter(item => item.label && item.month && item.day);
}

async function saveHolidayConfig(year, holidays) {
    try {
        const res = await fetch('/api/holidays', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ year, holidays, replace: true })
        });
        if (!res.ok) throw new Error('保存失败');
        return true;
    } catch (err) {
        console.error('saveHolidayConfig failed', err);
        alert('保存失败，请检查后端服务');
        return false;
    }
}

async function buildTriplePaySummary(team, year) {
    const people = teamMembers[team] || [];
    const holidays = await fetchTriplePayHolidays(year);
    const summary = people.map((name, index) => {
        const holidayEntries = holidays.map(h => ({ ...h, value: 0 }));
        return {
            index: index + 1,
            name,
            holidayEntries,
            total: 0
        };
    });
    const summaryMap = new Map(summary.map(item => [item.name, item]));

    for (const holiday of holidays) {
        const schedule = await loadArchiveSchedule(team, year, holiday.month);
        if (!schedule || !schedule[holiday.day - 1]) continue;
        const sd = schedule[holiday.day - 1] || { dayShift: {}, nightShift: {} };
        people.forEach(person => {
            const row = summaryMap.get(person);
            if (!row) return;
            const values = [sd.dayShift?.[person], sd.nightShift?.[person]].filter(Boolean);
            if (values.some(v => ['白', '夜', '早', '情报', '主班', 'B11', 'B12', 'B13', 'B16', 'B18', '监控', '支持', '大夜一', '大夜二'].includes(v))) {
                const entry = row.holidayEntries.find(item => item.label === holiday.label && item.month === holiday.month && item.day === holiday.day);
                if (entry) entry.value = 1;
            }
        });
    }

    summary.forEach(item => {
        item.total = item.holidayEntries.reduce((sum, h) => sum + (h.value || 0), 0);
    });

    return { holidays, rows: summary };
}

function buildTriplePayTable(summary) {
    const { holidays, rows } = summary;
    const headerCells = holidays.map(h => `<th style="padding:6px 8px;border:1px solid #d1d5db;background:#6b7280;color:#fff;">${h.label}<br>${h.month}月${h.day}日</th>`).join('');
    const bodyRows = rows.map(row => {
        const cells = row.holidayEntries.map(h => `<td style="padding:6px 8px;border:1px solid #d1d5db;text-align:center;">${h.value || ''}</td>`).join('');
        return `
            <tr>
                <td style="padding:6px 8px;border:1px solid #d1d5db;text-align:center;">${row.index}</td>
                <td style="padding:6px 8px;border:1px solid #d1d5db;text-align:center;font-weight:bold;background:#9acd5b;">${row.name}</td>
                ${cells}
                <td style="padding:6px 8px;border:1px solid #d1d5db;text-align:center;font-weight:bold;">${row.total}</td>
            </tr>
        `;
    }).join('');

    return `
        <table style="width:100%;border-collapse:collapse;font-size:13px;">
            <thead>
                <tr>
                    <th style="padding:6px 8px;border:1px solid #d1d5db;background:#7d1a7a;color:#fff;">序号</th>
                    <th style="padding:6px 8px;border:1px solid #d1d5db;background:#7d1a7a;color:#fff;">人员</th>
                    ${headerCells}
                    <th style="padding:6px 8px;border:1px solid #d1d5db;background:#6b7280;color:#fff;">总计</th>
                </tr>
            </thead>
            <tbody>
                ${bodyRows}
            </tbody>
        </table>
    `;
}

async function fetchLeaveRecords(team, year) {
    try {
        const res = await fetch(`/api/leave-records?team=${encodeURIComponent(team)}&year=${year}`);
        if (!res.ok) return [];
        const payload = await res.json();
        return Array.isArray(payload.records) ? payload.records : [];
    } catch (err) {
        console.error('fetchLeaveRecords failed', err);
        return [];
    }
}

async function saveLeaveRecords(team, year, records) {
    try {
        const res = await fetch('/api/leave-records', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ team, year, records })
        });
        if (!res.ok) throw new Error('保存失败');
        return true;
    } catch (err) {
        console.error('saveLeaveRecords failed', err);
        alert('保存失败，请检查后端服务');
        return false;
    }
}

async function buildAnnualVacationSummary(team, year) {
    const people = teamMembers[team] || [];
    const records = await fetchLeaveRecords(team, year);
    const recordMap = new Map(records.map(item => [item.person, item]));
    const summary = people.map((name, index) => {
        const rec = recordMap.get(name) || {};
        return {
            index: index + 1,
            name,
            annualQuota: Number(rec.annual_quota) || 0,
            childcareQuota: Number(rec.childcare_quota) || 0,
            actualUsed: 0,
            remaining: 0,
            dmoMonths: new Set(),
            internshipFirst: new Set(),
            internshipSecond: new Set()
        };
    });
    const summaryMap = new Map(summary.map(item => [item.name, item]));

    for (let m = 1; m <= 12; m++) {
        const schedule = await loadArchiveSchedule(team, year, m);
        if (!schedule) continue;
        schedule.forEach(sd => {
            const dayShift = sd?.dayShift || {};
            const nightShift = sd?.nightShift || {};
            people.forEach(person => {
                const record = summaryMap.get(person);
                if (!record) return;
                const values = [dayShift[person], nightShift[person]].filter(Boolean);
                values.forEach(v => {
                    if (v === '年假' || v === '育儿') record.actualUsed += 1;
                    if (v === 'D模') record.dmoMonths.add(m);
                    if (v === '航实') {
                        if (m <= 6) record.internshipFirst.add(m);
                        else record.internshipSecond.add(m);
                    }
                });
            });
        });
    }

    summary.forEach(item => {
        item.remaining = item.annualQuota + item.childcareQuota - item.actualUsed;
    });
    return summary;
}

function formatMonthList(monthSet) {
    if (!monthSet || monthSet.size === 0) return '';
    return Array.from(monthSet).sort((a, b) => a - b).map(m => `${m}月`).join('、');
}

function buildAnnualVacationTable(summary) {
    const rows = summary.map(item => `
        <tr>
            <td style="padding:6px 8px;border:1px solid #d1d5db;text-align:center;">${item.index}</td>
            <td style="padding:6px 8px;border:1px solid #d1d5db;text-align:center;font-weight:bold;background:#9acd5b;">${item.name}</td>
            <td style="padding:6px 8px;border:1px solid #d1d5db;text-align:center;">
                <input class="annual-quota-input" data-person="${item.name}" type="number" min="0" value="${item.annualQuota}" style="width:70px;text-align:center;" />
            </td>
            <td style="padding:6px 8px;border:1px solid #d1d5db;text-align:center;">
                <input class="childcare-quota-input" data-person="${item.name}" type="number" min="0" value="${item.childcareQuota}" style="width:70px;text-align:center;" />
            </td>
            <td style="padding:6px 8px;border:1px solid #d1d5db;text-align:center;">${item.actualUsed}</td>
            <td style="padding:6px 8px;border:1px solid #d1d5db;text-align:center;">${item.remaining}</td>
            <td style="padding:6px 8px;border:1px solid #d1d5db;text-align:center;">${formatMonthList(item.dmoMonths)}</td>
            <td style="padding:6px 8px;border:1px solid #d1d5db;text-align:center;">${formatMonthList(item.internshipFirst)}</td>
            <td style="padding:6px 8px;border:1px solid #d1d5db;text-align:center;">${formatMonthList(item.internshipSecond)}</td>
        </tr>
    `).join('');

    return `
        <table style="width:100%;border-collapse:collapse;font-size:13px;">
            <thead>
                <tr>
                    <th style="padding:6px 8px;border:1px solid #d1d5db;background:#7d1a7a;color:#fff;">序号</th>
                    <th style="padding:6px 8px;border:1px solid #d1d5db;background:#7d1a7a;color:#fff;">人员</th>
                    <th style="padding:6px 8px;border:1px solid #d1d5db;background:#d1d5db;">年假应休假天数</th>
                    <th style="padding:6px 8px;border:1px solid #d1d5db;background:#d1d5db;">育儿假</th>
                    <th style="padding:6px 8px;border:1px solid #d1d5db;background:#d1d5db;">实际已休假天数</th>
                    <th style="padding:6px 8px;border:1px solid #d1d5db;background:#d1d5db;">剩余天数</th>
                    <th style="padding:6px 8px;border:1px solid #d1d5db;background:#d1d5db;">D模（月）</th>
                    <th style="padding:6px 8px;border:1px solid #d1d5db;background:#d1d5db;">航线实习上半年（月）</th>
                    <th style="padding:6px 8px;border:1px solid #d1d5db;background:#d1d5db;">航线实习下半年（月）</th>
                </tr>
            </thead>
            <tbody>
                ${rows}
            </tbody>
        </table>
    `;
}

function collectAnnualVacationInputs() {
    const annualInputs = Array.from(document.querySelectorAll('.annual-quota-input'));
    const childcareInputs = Array.from(document.querySelectorAll('.childcare-quota-input'));
    const childcareMap = new Map(childcareInputs.map(input => [input.dataset.person, input]));
    return annualInputs.map(input => {
        const person = input.dataset.person;
        const childcareInput = childcareMap.get(person);
        return {
            person,
            annual_quota: Number(input.value) || 0,
            childcare_quota: Number(childcareInput ? childcareInput.value : 0) || 0
        };
    });
}

function showDeductionRulesModal() {
    ensureDeductionRulesModal();
    const modal = document.getElementById('deductionRulesModal');
    const content = document.getElementById('deductionRulesContent');
    if (!content) return;
    const team = teamSelect ? teamSelect.value : Object.keys(teamMembers)[0];
    content.innerHTML = buildDeductionRulesHtml(team);
    modal.style.display = 'flex';
}

function buildDeductionRulesHtml(team) {
    const rules = getDeductionRules(team) || {};
    const oneOff = rules.oneOff || {};
    const adminLike = rules.adminLike || [];
    const rows = Object.keys(oneOff);
    const tableRows = rows.length
        ? rows.map(key => {
            const rule = oneOff[key] || {};
            const white = Number.isFinite(rule.white) ? rule.white : (rule.white || 0);
            const night = Number.isFinite(rule.night) ? rule.night : (rule.night || 0);
            return `<tr><td style="padding:6px 8px;border:1px solid #e5e7eb;">${key}</td><td style="padding:6px 8px;border:1px solid #e5e7eb;text-align:center;">${white}</td><td style="padding:6px 8px;border:1px solid #e5e7eb;text-align:center;">${night}</td></tr>`;
        }).join('')
        : `<tr><td colspan="3" style="padding:8px;border:1px solid #e5e7eb;text-align:center;">暂无单次扣减规则</td></tr>`;
    return `
        <div style="font-size:14px;margin-bottom:8px;"><strong>班组：</strong>${team}</div>
        <div style="margin-bottom:16px;">
            <h4 style="margin:0 0 8px;color:#1f2a37;">单次扣减规则</h4>
            <table style="width:100%;border-collapse:collapse;font-size:13px;">
                <thead>
                    <tr>
                        <th style="padding:6px 8px;border:1px solid #e5e7eb;background:#f3f4f6;text-align:left;">类型</th>
                        <th style="padding:6px 8px;border:1px solid #e5e7eb;background:#f3f4f6;text-align:center;">白班减班</th>
                        <th style="padding:6px 8px;border:1px solid #e5e7eb;background:#f3f4f6;text-align:center;">夜班减班</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>
        </div>
        <div>
            <h4 style="margin:0 0 8px;color:#1f2a37;">行政类计入减班</h4>
            <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:8px;padding:10px;">
                ${adminLike.length ? adminLike.join('、') : '无'}
            </div>
        </div>
    `;
}

async function computeAnnualStats(team, year) {
    const people = teamMembers[team] || [];
    const positionsDay = ['主班', 'B11', 'B12', 'B13', 'B16', 'B18', '监控', '支持', '情报'];
    const positionsNight = ['主班', 'B11', 'B12', 'B13', 'B16', 'B18', '监控', '支持', '大夜一', '大夜二'];
    const colorPositionMap = buildPositionColorMap([...positionsDay, ...positionsNight]);
    const stats = {};
    people.forEach(name => {
        stats[name] = {
            whiteTotal: 0,
            nightTotal: 0,
            dayPositions: Object.fromEntries(positionsDay.map(p => [p, 0])),
            nightPositions: Object.fromEntries(positionsNight.map(p => [p, 0]))
        };
    });
    for (let m = 1; m <= 12; m++) {
        const schedule = await loadArchiveSchedule(team, year, m);
        if (!schedule) continue;
        schedule.forEach(sd => {
            const dayShift = sd?.dayShift || {};
            const nightShift = sd?.nightShift || {};
            Object.entries(dayShift).forEach(([k, v]) => {
                if (!v) return;
                if (k.startsWith('__morning__')) return;
                const morningFlag = dayShift[`__morning__${k}`];
                if (morningFlag) return;
                const assigned = resolveAssignedPerson(k, v, people, ['白', '情报']);
                if (!assigned) return;
                stats[assigned].whiteTotal++;
                const position = resolvePositionFromColor(dayShift, k, positionsDay, colorPositionMap);
                if (position && stats[assigned].dayPositions[position] !== undefined) {
                    stats[assigned].dayPositions[position]++;
                }
                if (!position && v === '情报' && stats[assigned].dayPositions['情报'] !== undefined) {
                    stats[assigned].dayPositions['情报']++;
                }
            });
            Object.entries(nightShift).forEach(([k, v]) => {
                if (!v) return;
                const assigned = resolveAssignedPerson(k, v, people, ['夜', '情报']);
                if (!assigned) return;
                stats[assigned].nightTotal++;
                const position = resolvePositionFromColor(nightShift, k, positionsNight, colorPositionMap);
                if (position && stats[assigned].nightPositions[position] !== undefined) {
                    stats[assigned].nightPositions[position]++;
                }
            });
        });
    }
    return { stats, positionsDay, positionsNight, people };
}

function resolveAssignedPerson(key, value, people, selfTokens) {
    if (people.includes(key) && selfTokens.includes(value)) return key;
    if (people.includes(value)) return value;
    return null;
}

function buildPositionColorMap(positions) {
    const map = {};
    positions.forEach(pos => {
        const color = normalizeColor(getPositionColor(pos));
        if (color) map[color] = pos;
    });
    return map;
}

function resolvePositionFromColor(shiftMap, key, positions, colorMap) {
    const bg = shiftMap[`__bgcolor__${key}`];
    if (bg) {
        const normalized = normalizeColor(bg);
        if (normalized && colorMap[normalized]) return colorMap[normalized];
    }
    if (positions.includes(key)) return key;
    return null;
}

function buildAnnualStatsTable(payload, team, year, month) {
    const { stats, positionsDay, positionsNight, people } = payload;
    if (!people || people.length === 0) {
        return '<p>当前班组无人员数据。</p>';
    }
    const indexWidth = 56;
    const nameWidth = 86;
    const stickyBaseStyle = 'position:sticky;z-index:1;background:#f5f5f5;border:1px solid #ddd;padding:6px;text-align:center;';
    const totalHeaderStyle = 'background:#555;border:1px solid #444;padding:6px;color:#fff;font-weight:bold;text-align:center;';
    const totalCellStyle = 'background:#555;border:1px solid #eee;padding:4px;color:#fff;font-weight:bold;text-align:center;';
    const monthLabel = month ? `｜月份：${month}月` : '';
    let html = `<div style="margin-bottom:8px;color:#555">班组：${team}｜年度：${year}年${monthLabel}</div>`;
    html += '<table style="width:100%;border-collapse:collapse;font-size:12px;background:#fff">';
    html += '<tr>';
    html += `<th style="${stickyBaseStyle}left:0;min-width:${indexWidth}px;width:${indexWidth}px">序号</th>`;
    html += `<th style="${stickyBaseStyle}left:${indexWidth}px;min-width:${nameWidth}px;width:${nameWidth}px">人员</th>`;
    html += `<th style="${totalHeaderStyle}">白班实排</th>`;
    positionsDay.forEach(pos => {
        html += `<th style="background:#f5f5f5;border:1px solid #ddd;padding:6px">${pos}白</th>`;
    });
    html += `<th style="${totalHeaderStyle}">夜班实排</th>`;
    positionsNight.forEach(pos => {
        const label = pos === '大夜一' ? '大夜1' : (pos === '大夜二' ? '大夜2' : pos);
        html += `<th style="background:#f5f5f5;border:1px solid #ddd;padding:6px">${label}夜</th>`;
    });
    html += '</tr>';
    people.forEach((name, index) => {
        const row = stats[name] || { whiteTotal: 0, nightTotal: 0, dayPositions: {}, nightPositions: {} };
        const rowBg = index % 2 === 0 ? '#ffffff' : '#fafafa';
        html += '<tr>';
        html += `<td style="position:sticky;left:0;z-index:1;border:1px solid #eee;padding:4px;text-align:center;background:${rowBg};min-width:${indexWidth}px;width:${indexWidth}px">${index + 1}</td>`;
        html += `<td style="position:sticky;left:${indexWidth}px;z-index:1;border:1px solid #eee;padding:4px;font-weight:bold;text-align:center;background:${rowBg};min-width:${nameWidth}px;width:${nameWidth}px">${name}</td>`;
        html += `<td style="${totalCellStyle}">${row.whiteTotal}</td>`;
        positionsDay.forEach(pos => {
            html += `<td style="border:1px solid #eee;padding:4px;text-align:center;background:${rowBg}">${row.dayPositions[pos] || 0}</td>`;
        });
        html += `<td style="${totalCellStyle}">${row.nightTotal}</td>`;
        positionsNight.forEach(pos => {
            html += `<td style="border:1px solid #eee;padding:4px;text-align:center;background:${rowBg}">${row.nightPositions[pos] || 0}</td>`;
        });
        html += '</tr>';
    });
    html += '</table>';
    return html;
}

// 初始化年份选择器
function initializeYearSelect() {
    const yearSelect = document.getElementById('yearSelect');
    const currentYear = currentDate.getFullYear();

    for (let i = currentYear - 5; i <= currentYear + 5; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i + '年';
        if (i === currentYear) {
            option.selected = true;
        }
        yearSelect.appendChild(option);
    }
}

// 初始化人员列表
function initializePersonnelList() {
    const personnelListContainer = document.getElementById('personnelList');
    // 保存为全局变量，其他函数会使用
    teamSelect = document.getElementById('teamSelect');

    // 当班组选择发生变化时，更新人员列表
    teamSelect.addEventListener('change', function() {
        updatePersonnelList(this.value);
        if (isArchiveMode) {
            if (currentArchiveMonth) {
                openArchiveMonth(currentArchiveMonth);
            } else {
                showArchiveGrid();
            }
        }
    });

    // 默认选择第一个班组
    updatePersonnelList(teamSelect.value);
}

// 更新人员列表
function updatePersonnelList(team) {
    const personnelListContainer = document.getElementById('personnelList');
    personnelListContainer.innerHTML = '';

    const members = teamMembers[team] || [];
    members.forEach(person => {
        const personElement = document.createElement('div');
        personElement.className = 'personnel-item';
        personElement.textContent = person;
        personElement.dataset.person = person;

        personElement.addEventListener('click', function() {
            // 移除所有active类
            document.querySelectorAll('.personnel-item').forEach(item => {
                item.classList.remove('active');
            });

            // 添加active类到当前选中项
            this.classList.add('active');

            // 更新选中的员工
            selectedPerson = this.dataset.person;

            // 更新资质显示
            updateQualificationDisplay();
        });

        personnelListContainer.appendChild(personElement);
    });

    // 默认选择第一个人员
    if (members.length > 0) {
        personnelListContainer.firstChild.click();
    }

    // 更新排班表显示
    updateScheduleDisplay(team);
}

// 更新资质显示
function updateQualificationDisplay() {
    const qualificationDisplay = document.getElementById('qualificationDisplay');

    if (!selectedPerson) {
        qualificationDisplay.innerHTML = '<p>选择人员查看资质</p>';
        return;
    }

    const qualifications = personnelData[selectedPerson];
    let html = `<h4>${selectedPerson}的资质</h4><div class="qualification-list">`;

    qualifications.forEach(qual => {
        html += `<span class="qualification-tag ${qual}">${qual}</span>`;
    });

    html += '</div>';
    qualificationDisplay.innerHTML = html;
}

// 生成排班表
async function generateSchedule() {
    const year = parseInt(document.getElementById('yearSelect').value);
    const month = parseInt(document.getElementById('monthSelect').value);
    const day = parseInt(document.getElementById('daySelect').value);

    // 获取该月的天数
    const daysInMonth = new Date(year, month, 0).getDate();

    // 生成表头
    generateScheduleHeader(daysInMonth);

    // 生成排班表内容（使用当前班组选择）
    const team = teamSelect ? teamSelect.value : Object.keys(teamMembers)[0];
    const saved = await loadSavedSchedule(team, year, month);
    const savedSchedule = extractArchiveSchedule(saved);
    if (savedSchedule) {
        const sched = buildMonthScheduler(team, year, month, savedSchedule);
        window.schedulerInstance = sched;
        updateScheduleDisplay(team, savedSchedule, sched.config);
    } else {
        const emptySchedule = Array.from({ length: daysInMonth }, () => ({ dayShift: {}, nightShift: {} }));
        const sched = buildMonthScheduler(team, year, month, emptySchedule);
        window.schedulerInstance = sched;
        generateScheduleBody(daysInMonth, year, month, team);
    }
}

// 生成表头
function generateScheduleHeader(daysInMonth) {
    const scheduleHeader = document.getElementById('scheduleHeader');
    scheduleHeader.innerHTML = '';
    // 设置列模板（首列为人员列，其余为实际天数）
    scheduleHeader.style.gridTemplateColumns = `65px repeat(${daysInMonth}, 1fr)`;

    // 添加人员名称列
    const nameHeader = document.createElement('div');
    nameHeader.textContent = '人员/日期';
    scheduleHeader.appendChild(nameHeader);

    // 添加实际日期列
    for (let day = 1; day <= daysInMonth; day++) {
        const dayHeader = document.createElement('div');
        dayHeader.dataset.day = day;
        dayHeader.textContent = day;
        scheduleHeader.appendChild(dayHeader);
    }
}

// 生成排班表内容
function generateScheduleBody(daysInMonth, year, month, team) {
    const scheduleBody = document.getElementById('scheduleBody');
    scheduleBody.innerHTML = '';
    // 使表体列与表头一致（首列人员名 + 实际天数）
    scheduleBody.style.gridTemplateColumns = `65px repeat(${daysInMonth}, 1fr)`;

    const members = teamMembers[team] || [];

        members.forEach(person => { 
        // 添加人员名称单元格
    const nameCell = document.createElement('div');
    nameCell.className = 'schedule-cell person-name';
    nameCell.dataset.person = person;
    nameCell.textContent = person;
    nameCell.style.alignSelf = 'flex-start'; // 确保人员名称单元格顶部对齐
        scheduleBody.appendChild(nameCell);

    // 添加每天的排班单元格（使用实际天数）
    for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
            const dayCell = document.createElement('div');
            dayCell.className = 'schedule-cell';
            dayCell.dataset.person = person;
            dayCell.dataset.date = dateStr;

            if (day > daysInMonth) {
                dayCell.style.visibility = 'hidden'; // 隐藏多余的日子
            }

            // 检查是否为周末
            // const dateObj = new Date(year, month - 1, day);
            //if (dateObj.getDay() === 0 || dateObj.getDay() === 6) {
            //   dayCell.style.backgroundColor = '#f0f0f0';
            // }

            // 添加点击事件
            dayCell.setAttribute('tabindex', 0);
            dayCell.addEventListener('click', function() {
                selectCell(this);
                if (isEditMode) {
                    openEditModal(this);
                }
            });
            dayCell.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    selectCell(this);
                    if (isEditMode) openEditModal(this);
                }
            });

            // 添加拖放支持（仅在编辑模式启用）
            dayCell.setAttribute('draggable', 'true');
            dayCell.addEventListener('dragstart', function(e) {
                if (!isEditMode) { e.preventDefault(); return; }
                // 从单元格拖动，优先作为 move，按住 Ctrl 复制
                let shift = this.textContent || '';
                const sched = window.schedulerInstance;
                if (sched && sched.schedule) {
                    const info = getCellShiftInfo(this, sched);
                    if (info) shift = info.isSeat ? info.key : info.value;
                }
                const payload = {
                    fromPerson: this.dataset.person,
                    fromDate: this.dataset.date,
                    shift: shift,
                    op: e.ctrlKey ? 'copy' : 'move'
                };
                try { e.dataTransfer.setData('application/json', JSON.stringify(payload)); } catch (err) {}
                e.dataTransfer.setData('text/plain', shift);
                window.dragSourceCell = this;
            });

            dayCell.addEventListener('dragover', function(e) {
                if (!isEditMode) return;
                e.preventDefault();
                this.classList.add('drag-over');
                addDragHighlight(this);
            });
            dayCell.addEventListener('dragleave', function() {
                this.classList.remove('drag-over');
                removeDragHighlight();
            });
            dayCell.addEventListener('drop', function(e) {
                e.preventDefault();
                this.classList.remove('drag-over');
                removeDragHighlight();
                if (!isEditMode) return;

                // 尝试读取 JSON payload（来自单元格拖动）
                let payload = null;
                try {
                    const raw = e.dataTransfer.getData('application/json');
                    if (raw) payload = JSON.parse(raw);
                } catch (err) { payload = null; }

                const plain = e.dataTransfer.getData('text/plain');
                const shift = (payload && payload.shift) ? payload.shift : plain;
                const op = payload && payload.op ? payload.op : null;
                const sourceCell = window.dragSourceCell;

                // 跨天拖拽交换：直接拒绝
                if (op === 'move' && sourceCell && payload && payload.fromDate && payload.fromDate !== this.dataset.date) {
                    alert('跨天交换不允许。');
                    window.dragSourceCell = null;
                    return;
                }

                // 同一天内移动到空单元格
                if (op === 'move' && sourceCell && payload && payload.fromDate === this.dataset.date) {
                    const targetEmpty = !(this.textContent || '').trim();
                    if (targetEmpty) {
                        moveCellToEmpty(sourceCell, this);
                        window.dragSourceCell = null;
                        return;
                    }
                }

                // 同一天内与其他成员交换（仅 move 且双方都有班次）
                if (op === 'move' && sourceCell && sourceCell !== this && payload && payload.fromDate === this.dataset.date) {
                    const sourceShift = (payload.shift || '').trim();
                    const targetShift = (this.textContent || '').trim();
                    if (sourceShift && targetShift) {
                        const ok = confirm(`确认与该成员在同一天进行班次交换吗？\n${sourceShift} ↔ ${targetShift}`);
                        if (ok) {
                            swapCells(sourceCell, this);
                        }
                        window.dragSourceCell = null;
                        return;
                    }
                }

                // 应用到目标
                applyDropToCell(this, shift);

                // 如果是 move 操作并且有源单元格，则清除源
                if (op === 'move' && sourceCell) {
                    if (sourceCell !== this) {
                        clearCell(sourceCell);
                    }
                }
                window.dragSourceCell = null;
            });

            // （已移除：鼠标按住连续填充功能，保留单元格拖动/复制行为）

            scheduleBody.appendChild(dayCell);
        }
    });

    // 添加总计行
    appendTotalRow(scheduleBody, daysInMonth, year, month, null);
}

// 打开编辑模态框
function openEditModal(cell) {
    currentEditingCell = cell;
    const person = cell.dataset.person;
    const date = cell.dataset.date;

    document.getElementById('modalPerson').textContent = person;
    document.getElementById('modalDate').textContent = date;
    document.getElementById('editModal').style.display = 'flex';
}

// 设置事件监听器
function setupEventListeners() {
    // 年月选择器变化事件
    document.getElementById('yearSelect').addEventListener('change', generateSchedule);
    document.getElementById('monthSelect').addEventListener('change', generateSchedule);
    document.getElementById('daySelect').addEventListener('change', generateSchedule);

    // 编辑模式切换
    document.getElementById('editBtn').addEventListener('click', function() {
        isEditMode = !isEditMode;
        document.getElementById('editModeIndicator').textContent = isEditMode ? '编辑模式' : '查看模式';
        this.textContent = isEditMode ? '查看模式' : '编辑模式';
    });

    const archiveBtn = document.getElementById('archiveBtn');
    if (archiveBtn) {
        archiveBtn.addEventListener('click', function() {
            if (isArchiveMode) {
                exitArchiveMode();
            } else {
                enterArchiveMode();
            }
        });
    }

    // 模态框事件
    document.getElementById('modalCancel').addEventListener('click', function() {
        document.getElementById('editModal').style.display = 'none';
    });

    document.getElementById('modalConfirm').addEventListener('click', function() {
        if (currentEditingCell) {
            const selectedShift = document.querySelector('.shift-option.selected');
            if (selectedShift) {
                const shiftType = selectedShift.dataset.shift;
                // 使用统一的方法保证数据回写和 DOM 统一
                applyDropToCell(currentEditingCell, shiftType);
            }

            // 如果是周末，保留背景色（可根据需要启用）
            // const dateObj = new Date(currentEditingCell.dataset.date);
            // if (dateObj.getDay() === 0 || dateObj.getDay() === 6) {
            //     currentEditingCell.style.backgroundColor = '#f0f0f0';
            // }

            document.getElementById('editModal').style.display = 'none';
        }
    });

    // 班次选择事件
    document.querySelectorAll('.shift-option').forEach(option => {
        // 支持点击选择（用于模态框）
        option.addEventListener('click', function() {
            // 移除所有选中状态
            document.querySelectorAll('.shift-option').forEach(opt => {
                opt.classList.remove('selected');
            });

            // 添加选中状态到当前选项
            this.classList.add('selected');
        });

        // 启用拖拽
        option.setAttribute('draggable', 'true');
        option.addEventListener('dragstart', function(e) {
            const shift = this.dataset.shift || '';
            e.dataTransfer.setData('text/plain', shift);
            e.dataTransfer.effectAllowed = 'copy';
            // 可视化：标记当前拖动项
            this.classList.add('dragging');
        });
        option.addEventListener('dragend', function() {
            this.classList.remove('dragging');
        });
    });



    // 一键排班按钮
    document.getElementById('generateBtn').addEventListener('click', async function() {
        const year = document.getElementById('yearSelect').value;
        const month = document.getElementById('monthSelect').value;
        const startDay = document.getElementById('daySelect').value; // 从x号开始
        const specialDates = {}; // 从界面获取特殊日期设置

        // 创建 Scheduler 实例并初始化
        const scheduler = new Scheduler();
        // 先从固定缓存读取用户手动固定的排班（避免重复生成时清空固定需求）
        const fixedDaysByPerson = {};
        Object.keys(fixedDaysByPersonCache).forEach(person => {
            fixedDaysByPerson[person] = { ...(fixedDaysByPersonCache[person] || {}) };
        });

        const team = teamSelect ? teamSelect.value : Object.keys(teamMembers)[0];
        const teamPeople = teamMembers[team] || [];
        const config = {
            year: parseInt(year),
            month: parseInt(month),
            startDay: parseInt(startDay),
            team,
            // 只包含当前班组的人员
            people: teamPeople.map(name => ({
                name,
                qualifications: personnelData[name],
                fixedDays: fixedDaysByPerson[name] || {}
            }))
        };

        // 初始化并生成排班（直到满足排班日白>=8 且 夜>=10；任意一天不满足就重算）
        // 说明：若固定班/资质限制导致客观不可达，循环可能会很久；这里给一个超大上限，
        // 触顶时不弹窗打断，只在控制台给出最小诊断，且仍展示最后一次结果。
    let schedule = null;
    let lastScheduler = null;
    const maxAttempts = 1000; // 近似“直到准确”，同时避免浏览器卡死到无响应
    let lastFailures = [];
    let lastSeatFillOk = false;
    let lastNightWhiteConflicts = [];
    let lastNightExpectationConflicts = [];
    let lastNightGapDiagnostics = [];
    let lastWorkloadDiag = null;
        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            const attemptScheduler = new Scheduler();
            attemptScheduler.initialize(config);
            const attemptSchedule = attemptScheduler.generateBtn();
            syncMorningMappings(attemptScheduler);

            // 只要排班日内有一天不达标，就继续重算
            lastFailures = getDailyThresholdFailures(attemptScheduler);
            lastSeatFillOk = meetsSeatFill(attemptScheduler);
            lastNightWhiteConflicts = getNightWhiteConflicts(attemptScheduler);
            lastNightExpectationConflicts = getNightExpectationConflicts(attemptScheduler);
            lastWorkloadDiag = getWorkloadRuleDiagnostics(attemptScheduler);
            const ok = (lastFailures.length === 0) && lastSeatFillOk &&
                (lastNightWhiteConflicts.length === 0) && (lastNightExpectationConflicts.length === 0) &&
                (lastWorkloadDiag && lastWorkloadDiag.ok);
            if (ok) {
                schedule = attemptSchedule;
                lastScheduler = attemptScheduler;
                break;
            }

            schedule = attemptSchedule;
            lastScheduler = attemptScheduler;

            // 每隔一段次数让出主线程，避免页面“假死”
            if (attempt % 200 === 0) {
                await new Promise(r => setTimeout(r, 0));
            }
        }

        if (lastScheduler && (!lastSeatFillOk || (lastFailures && lastFailures.length > 0) ||
            (lastNightWhiteConflicts && lastNightWhiteConflicts.length > 0) ||
            (lastNightExpectationConflicts && lastNightExpectationConflicts.length > 0) ||
            (lastWorkloadDiag && !lastWorkloadDiag.ok))) {
            const first = lastFailures[0];
            const firstConflict = lastNightWhiteConflicts[0];
            const firstExpected = lastNightExpectationConflicts[0];
            lastNightGapDiagnostics = getNightGapDiagnostics(lastScheduler);
            const firstGap = lastNightGapDiagnostics[0];
            const msg = `排班重试已达到上限（${maxAttempts}次），仍发现排班日内存在不达标：\n` +
                        (first ? `- 例如：${first.day}号 白班=${first.whiteCnt}（需≥8），夜班=${first.nightCnt}（需≥10）\n` : `- 存在席位未满（白班需≥8、夜班需≥10）\n`) +
                        (firstConflict ? `- 例如：${firstConflict.day}号夜班(${firstConflict.nightPos})次日${firstConflict.nextDay}号出现白班(${firstConflict.nextPos})，人员：${firstConflict.person}\n` : '') +
                        (firstExpected ? `- 例如：${firstExpected.day}号预期夜班未满足（人员：${firstExpected.person}，已排夜=${firstExpected.hasNight ? '是' : '否'}，出现白班=${firstExpected.hasDay ? '是' : '否'}）\n` : '') +
                        (firstGap ? `- 例如：${firstGap.day}号夜班席位${firstGap.pos}未排，原因：${firstGap.reason}\n` : '') +
                        (lastWorkloadDiag && !lastWorkloadDiag.ok ? `- 总量校验不通过：白班${lastWorkloadDiag.whiteActual}/${lastWorkloadDiag.whiteRequired}，夜班${lastWorkloadDiag.nightActual}/${lastWorkloadDiag.nightRequired}\n` : '') +
                        `\n可能原因：固定班/资质限制导致客观不可达。\n` +
                        `建议：减少固定班/放宽限制后再生成。`;
            console.warn(msg, { lastFailures, lastSeatFillOk });
        }

        // 保留实例供界面其它函数使用
        window.schedulerInstance = lastScheduler || scheduler;

        // 更新界面显示排班结果（使用之前已计算的 team）
    syncMorningMappings(window.schedulerInstance);
    updateScheduleDisplay(team, schedule, config);
        // 若存在“本月多一个白”的人员，提示一次
        try {
            const extra = window.schedulerInstance && window.schedulerInstance.extraWhitePeople;
            if (extra && extra.length > 0) {
                alert(`本月${extra.join('、')}多一个白`);
            }
        } catch (e) {}
        // 运行自检并弹窗报告
        try { reportAndAlert(window.schedulerInstance); } catch (e) { console.error('reportAndAlert failed', e); }
    });

    // 导出为 Excel (使用 HTML 表格并保存为 .xls，保留单元格背景色)
        document.getElementById('exportBtn').addEventListener('click', async function() {
            const year = parseInt(document.getElementById('yearSelect').value);
            const month = parseInt(document.getElementById('monthSelect').value);
            const daysInMonth = new Date(year, month, 0).getDate();
            const team = teamSelect ? teamSelect.value : Object.keys(teamMembers)[0];
            const members = teamMembers[team] || [];

            // 构建 HTML 表格，行列与界面一致，读取每个单元格的显示文本与样式
            let html = `<table border="1" style="border-collapse:collapse">`;
            // header
            html += '<tr><th style="background:#34495e;color:#fff;">人员/日期</th>';
            for (let d = 1; d <= daysInMonth; d++) {
                html += `<th style="background:#34495e;color:#fff">${d}</th>`;
            }
            html += '</tr>';

            members.forEach(person => {
                html += `<tr><td style="background:#e3f2fd;font-weight:bold">${person}</td>`;
                for (let d = 1; d <= daysInMonth; d++) {
                    const dateStr = `${year}-${month.toString().padStart(2,'0')}-${String(d).padStart(2,'0')}`;
                    const cell = document.querySelector(`#scheduleBody .schedule-cell[data-person='${person}'][data-date='${dateStr}']`);
                    let text = '';
                    let style = '';
                    if (cell) {
                        text = (cell.textContent || '').trim();
                        // 获取计算后的背景色与前景色
                        const cs = window.getComputedStyle(cell);
                        const bg = cs.backgroundColor || '';
                        const fg = cs.color || '';
                        style = `background:${bg};color:${fg};`;
                    }
                    html += `<td style="${style};text-align:center">${text || ''}</td>`;
                }
                html += '</tr>';
            });

            html += '</table>';

            // 将 HTML 导出为 .xls
            const blob = new Blob([`\ufeff${html}`], { type: 'application/vnd.ms-excel;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `排班_${year}_${month}.xls`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });

    // 保存排班按钮
    document.getElementById('saveBtn').addEventListener('click', async function() {
        const ok = await saveCurrentSchedule();
        if (ok) alert('排班数据已保存');
    });

    // 导入Excel按钮
    const importBtn = document.getElementById('importBtn');
    const importFile = document.getElementById('importFile');
    if (importBtn && importFile) {
        importBtn.addEventListener('click', function() {
            importFile.click();
        });
        importFile.addEventListener('change', async function(e) {
            const file = e.target.files && e.target.files[0];
            if (!file) return;
            if (!window.XLSX) {
                alert('未加载EXCEL解析库，请刷新页面重试。');
                return;
            }
            try {
                const buffer = await file.arrayBuffer();
                const text = await file.text();
                const htmlParsed = parseHtmlTable(text);
                let rows = [];
                let colorMap = {};
                let sheet = null;

                if (htmlParsed) {
                    rows = htmlParsed.rows;
                    colorMap = htmlParsed.colorMap;
                } else {
                    const workbook = window.XLSX.read(buffer, { type: 'array', cellStyles: true });
                    const sheetName = workbook.SheetNames[0];
                    sheet = workbook.Sheets[sheetName];
                    rows = window.XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
                }

                applyImportedSchedule(rows, sheet, colorMap);
                importFile.value = '';
            } catch (err) {
                console.error('导入失败', err);
                alert('导入失败，请检查Excel格式。');
            }
        });
    }

    const archiveImportBtn = document.getElementById('archiveImportBtn');
    if (archiveImportBtn && importFile) {
        archiveImportBtn.addEventListener('click', function() {
            importFile.click();
        });
    }

    const archiveSaveBtn = document.getElementById('archiveSaveBtn');
    if (archiveSaveBtn) {
        archiveSaveBtn.addEventListener('click', function() {
            if (!isArchiveMode || !currentArchiveMonth) {
                alert('请先选择归档月份');
                return;
            }
            const team = teamSelect ? teamSelect.value : Object.keys(teamMembers)[0];
            const year = parseInt(document.getElementById('yearSelect').value);
            const sched = window.schedulerInstance;
            saveArchiveSchedule(team, year, currentArchiveMonth, sched).then(ok => {
                if (!ok) return;
                alert('归档完成');
                renderRecentArchives();
            });
        });
    }

    const archiveHomeBtn = document.getElementById('archiveHomeBtn');
    if (archiveHomeBtn) {
        archiveHomeBtn.addEventListener('click', function() {
            if (!isArchiveMode) return;
            currentArchiveMonth = null;
            showArchiveGrid();
        });
    }

    const archiveBackBtn = document.getElementById('archiveBackBtn');
    if (archiveBackBtn) {
        archiveBackBtn.addEventListener('click', exitArchiveMode);
    }

    const annualStatsBtn = document.getElementById('annualStatsBtn');
    if (annualStatsBtn) {
        annualStatsBtn.addEventListener('click', showAnnualStatsModal);
    }

    const annualVacationBtn = document.getElementById('annualVacationBtn');
    if (annualVacationBtn) {
        annualVacationBtn.addEventListener('click', showAnnualVacationModal);
    }

    const annualTriplePayBtn = document.getElementById('annualTriplePayBtn');
    if (annualTriplePayBtn) {
        annualTriplePayBtn.addEventListener('click', showTriplePayModal);
    }

    const holidayConfigBtn = document.getElementById('holidayConfigBtn');
    if (holidayConfigBtn) {
        holidayConfigBtn.addEventListener('click', showHolidayConfigModal);
    }

    const deductionRulesBtn = document.getElementById('deductionRulesBtn');
    if (deductionRulesBtn) {
        deductionRulesBtn.addEventListener('click', showDeductionRulesModal);
    }

    const archiveClearBtn = document.getElementById('archiveClearBtn');
    if (archiveClearBtn) {
        archiveClearBtn.addEventListener('click', clearCurrentArchive);
    }

    // 重置排班按钮
    document.getElementById('resetBtn').addEventListener('click', async function() {
        if (confirm('确定要重置所有排班数据吗？')) {
            const team = teamSelect ? teamSelect.value : Object.keys(teamMembers)[0];
            const year = parseInt(document.getElementById('yearSelect').value);
            const month = parseInt(document.getElementById('monthSelect').value);
            await clearSavedSchedule(team, year, month);
            generateSchedule();
            alert('排班数据已重置');
        }
    });

    // 确保统计按钮存在以便调试
    ensureStatsButton();
}

function applyImportedSchedule(rows, sheet, colorMap) {
    if (!rows || rows.length < 2) return;
    const year = parseInt(document.getElementById('yearSelect').value);
    const month = parseInt(document.getElementById('monthSelect').value);
    const startDay = parseInt(document.getElementById('daySelect').value);
    if (!year || !month) return;

    const team = teamSelect ? teamSelect.value : Object.keys(teamMembers)[0];
    const teamPeople = teamMembers[team] || [];
    const config = {
        year,
        month,
        startDay: isNaN(startDay) ? 1 : startDay,
        team,
        people: teamPeople.map(name => ({
            name,
            qualifications: personnelData[name],
            fixedDays: {}
        }))
    };

    let sched = window.schedulerInstance;
    if (!sched || !sched.schedule || !sched.people) {
        sched = new Scheduler();
        sched.initialize(config);
    } else {
        sched.initialize(config);
    }
    // 清空排班并写入导入数据
    const daysInMonth = new Date(year, month, 0).getDate();
    sched.schedule = Array.from({ length: daysInMonth }, () => ({ dayShift: {}, nightShift: {} }));
    window.schedulerInstance = sched;

    const header = rows[0] || [];
    const dayColumns = [];
    for (let c = 1; c < header.length; c++) {
        const dayNum = parseInt(String(header[c]).trim(), 10);
        if (!isNaN(dayNum)) dayColumns.push({ col: c, day: dayNum });
    }

    for (let r = 1; r < rows.length; r++) {
        const row = rows[r] || [];
        const person = String(row[0] || '').trim();
        if (!person) continue;
        dayColumns.forEach(({ col, day }) => {
            const raw = row[col];
            const value = String(raw || '').trim();
            const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const cell = document.querySelector(`#scheduleBody .schedule-cell[data-person='${person}'][data-date='${dateStr}']`);
            if (!cell) return;
            const bgColor = (colorMap && colorMap[`${r}:${col}`]) || getSheetCellBgColor(sheet, r, col);
            const fgColor = bgColor ? getReadableTextColor(bgColor) : null;
            applyImportedValueToCell(cell, value, bgColor);
            const styleInfo = writeImportedValueToSchedule(sched, day - 1, person, value);
            if (styleInfo && bgColor) {
                setShiftCellStyle(sched, day - 1, styleInfo.shiftMap, styleInfo.key, bgColor, fgColor);
            }
        });
    }

    refreshTotalRow();
    ensureStatsModal();
    showStatsModal();
}

function parseHtmlTable(text) {
    if (!text || typeof text !== 'string') return null;
    if (text.indexOf('<table') === -1) return null;
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    const table = doc.querySelector('table');
    if (!table) return null;
    const rows = [];
    const colorMap = {};
    const rowEls = Array.from(table.querySelectorAll('tr'));
    rowEls.forEach((tr, r) => {
        const cells = Array.from(tr.querySelectorAll('th,td'));
        const row = [];
        cells.forEach((td, c) => {
            const text = (td.textContent || '').trim();
            row[c] = text;
            const bg = td.style.backgroundColor || td.getAttribute('bgcolor') || '';
            if (bg) {
                colorMap[`${r}:${c}`] = normalizeColor(bg);
            }
        });
        rows.push(row);
    });
    return { rows, colorMap };
}

function normalizeColor(color) {
    if (!color) return null;
    const ctx = document.createElement('canvas').getContext('2d');
    ctx.fillStyle = color;
    const rgb = ctx.fillStyle;
    if (rgb.startsWith('#')) return rgb;
    const m = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
    if (!m) return null;
    const r = parseInt(m[1], 10).toString(16).padStart(2, '0');
    const g = parseInt(m[2], 10).toString(16).padStart(2, '0');
    const b = parseInt(m[3], 10).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
}

function getSheetCellBgColor(sheet, rowIndex, colIndex) {
    if (!sheet || !window.XLSX) return null;
    const addr = window.XLSX.utils.encode_cell({ r: rowIndex, c: colIndex });
    const cell = sheet[addr];
    const fill = cell && cell.s && cell.s.fill;
    const rgb = (fill && fill.fgColor && (fill.fgColor.rgb || fill.fgColor.argb)) ||
        (fill && fill.bgColor && (fill.bgColor.rgb || fill.bgColor.argb));
    if (!rgb) return null;
    const hex = rgb.length === 8 ? rgb.slice(2) : rgb;
    return hex.length === 6 ? `#${hex}` : null;
}

function applyImportedValueToCell(cell, value, bgColor) {
    cell.className = 'schedule-cell';
    cell.style.backgroundColor = '';
    cell.style.color = '';
    const cleaned = String(value || '').trim();
    if (!cleaned || cleaned === '休息') {
        cell.textContent = '';
        removeFixedCacheValue(cell);
        return;
    }
    const specialEvents = ['年假','复训','婚假','育儿','D模','航实','情报','培训','行政','出差','空班'];
    const sched = window.schedulerInstance;
    const whitePositions = (sched && sched.whitePositions) ? sched.whitePositions : ['B11', 'B12', 'B13', 'B16', 'B18', '主班', '监控', '支持'];
    const nightPositions = (sched && sched.nightPositions) ? sched.nightPositions : [...whitePositions, '大夜一', '大夜二'];

    if (specialEvents.includes(cleaned)) {
        cell.classList.add(cleaned);
        cell.textContent = cleaned;
    } else if (['白','夜','早'].includes(cleaned)) {
        cell.textContent = cleaned;
    } else if (whitePositions.includes(cleaned) || nightPositions.includes(cleaned)) {
        cell.classList.add(cleaned);
        if (['大夜一','大夜二'].includes(cleaned)) {
            cell.textContent = '夜';
        } else {
            cell.textContent = '白';
        }
    } else {
        // 兜底：直接显示文本
        cell.textContent = cleaned;
    }

    if (bgColor) {
        cell.style.setProperty('background-color', bgColor, 'important');
        cell.style.setProperty('color', getReadableTextColor(bgColor), 'important');
    }

    // 写入固定缓存，确保交换/编辑逻辑一致
    const cacheValue = cleaned || '';
    if (cacheValue) {
        setFixedCacheValue(cell, cacheValue);
    } else {
        removeFixedCacheValue(cell);
    }
}

function writeImportedValueToSchedule(sched, dayIndex, person, value) {
    if (!sched || !sched.schedule || dayIndex < 0 || dayIndex >= sched.schedule.length) return;
    const cleaned = String(value || '').trim();
    if (!cleaned || cleaned === '休息') return;
    const specialEvents = ['年假','复训','婚假','育儿','D模','航实','情报','培训','行政','出差','空班'];
    const whitePositions = sched.whitePositions || ['B11', 'B12', 'B13', 'B16', 'B18', '主班', '监控', '支持'];
    const nightPositions = sched.nightPositions || [...whitePositions, '大夜一', '大夜二'];
    const dayData = sched.schedule[dayIndex] || { dayShift: {}, nightShift: {} };

    if (specialEvents.includes(cleaned)) {
        dayData.dayShift[person] = cleaned;
        return { shiftMap: 'dayShift', key: person };
    }
    if (cleaned === '早' || cleaned === '白') {
        dayData.dayShift[person] = cleaned;
        return { shiftMap: 'dayShift', key: person };
    }
    if (cleaned === '夜') {
        dayData.nightShift[person] = cleaned;
        return { shiftMap: 'nightShift', key: person };
    }
    if (cleaned === '大夜一' || cleaned === '大夜二') {
        dayData.nightShift[cleaned] = person;
        return { shiftMap: 'nightShift', key: cleaned };
    }
    if (whitePositions.includes(cleaned)) {
        dayData.dayShift[cleaned] = person;
        return { shiftMap: 'dayShift', key: cleaned };
    }
    if (nightPositions.includes(cleaned)) {
        dayData.nightShift[cleaned] = person;
        return { shiftMap: 'nightShift', key: cleaned };
    }

    dayData.dayShift[person] = cleaned;
    return { shiftMap: 'dayShift', key: person };
}

function getReadableTextColor(bgColor) {
    const rgb = bgColor.replace('#', '');
    const r = parseInt(rgb.slice(0, 2), 16);
    const g = parseInt(rgb.slice(2, 4), 16);
    const b = parseInt(rgb.slice(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b);
    return luminance < 140 ? '#ffffff' : '#000000';
}

function setShiftCellStyle(sched, dayIndex, shiftMapName, key, bgColor, fgColor) {
    if (!sched || !sched.schedule || !shiftMapName || !key) return;
    const dayData = sched.schedule[dayIndex] || { dayShift: {}, nightShift: {} };
    if (!dayData[shiftMapName]) dayData[shiftMapName] = {};
    dayData[shiftMapName][`__bgcolor__${key}`] = bgColor;
    dayData[shiftMapName][`__fgcolor__${key}`] = fgColor;
}

function applyShiftCellStyle(dayData, shiftMapName, key, cell) {
    if (!dayData || !dayData[shiftMapName] || !cell || !key) return;
    const bg = dayData[shiftMapName][`__bgcolor__${key}`];
    const fg = dayData[shiftMapName][`__fgcolor__${key}`];
    if (bg) cell.style.setProperty('background-color', bg, 'important');
    if (fg) cell.style.setProperty('color', fg, 'important');
}

// 更新排班表显示
function updateScheduleDisplay(team, schedule, config) {
    const year = parseInt(document.getElementById('yearSelect').value);
    const month = parseInt(document.getElementById('monthSelect').value);
    const scheduleBody = document.getElementById('scheduleBody');
    scheduleBody.innerHTML = '';
    const daysInMonth = new Date(year, month, 0).getDate();
    scheduleBody.style.gridTemplateColumns = `65px repeat(${daysInMonth}, 1fr)`;
    // 同步设置表头列数，保证对齐
    const scheduleHeader = document.getElementById('scheduleHeader');
    if (scheduleHeader) scheduleHeader.style.gridTemplateColumns = `65px repeat(${daysInMonth}, 1fr)`;

    const members = teamMembers[team] || [];

    members.forEach(person => {
        // 添加人员名称单元格
    const nameCell = document.createElement('div');
    nameCell.className = 'schedule-cell person-name';
    nameCell.dataset.person = person;
    nameCell.textContent = person;
    nameCell.style.alignSelf = 'flex-start'; // 确保人员名称单元格顶部对齐
        scheduleBody.appendChild(nameCell);

        // 添加每天的排班单元格
        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
            const dayCell = document.createElement('div');
            dayCell.className = 'schedule-cell';
            dayCell.dataset.person = person;
            dayCell.dataset.date = dateStr;

            // 标记固定需求（手动设置）
            const fixedValue = getFixedCacheValue(person, day);
            if (fixedValue) {
                dayCell.classList.add('fixed-cell');
            }

            // 填充排班信息，如果 schedule 可用则查找
            const scheduleData = schedule || (window.schedulerInstance && window.schedulerInstance.schedule) || [];
            let rendered = false;
            if (scheduleData.length >= day) {
                const dayData = scheduleData[day - 1] || { dayShift: {}, nightShift: {} };

                // 1) 如果该人员作为某席位的值出现在 dayShift 或 nightShift 中，显示席位名（优先显示席位）
                for (const [key, val] of Object.entries(dayData.dayShift || {})) {
                    if (val === person) {
                        // 检查是否为由前一夜映射来的早班
                        const morningFlag = dayData.dayShift[`__morning__${key}`];
                        dayCell.classList.add(key);
                        dayCell.textContent = (morningFlag ? '早' : '白');
                        applyShiftCellStyle(dayData, 'dayShift', key, dayCell);
                        rendered = true;
                        break;
                    }
                }
                if (!rendered) {
                    for (const [key, val] of Object.entries(dayData.nightShift || {})) {
                        if (val === person) {
                            dayCell.classList.add(key);
                            dayCell.textContent = '夜';
                            applyShiftCellStyle(dayData, 'nightShift', key, dayCell);
                            rendered = true;
                            break;
                        }
                    }
                }

                // 2) 如果没有作为席位被分配，检查 person-key（特殊事件或占位）
                if (!rendered) {
                    if (dayData.dayShift && Object.prototype.hasOwnProperty.call(dayData.dayShift, person)) {
                        const v = dayData.dayShift[person];
                        if (v === '待分配') {
                            dayCell.textContent = '';
                        } else if (v === '休息') {
                            // 休息不在单元格内显示或着色（保持空白）
                            dayCell.textContent = '';
                        } else {
                            dayCell.textContent = v;
                            dayCell.classList.add(v);
                            applyShiftCellStyle(dayData, 'dayShift', person, dayCell);
                        }
                        rendered = true;
                    } else if (dayData.nightShift && Object.prototype.hasOwnProperty.call(dayData.nightShift, person)) {
                        const v = dayData.nightShift[person];
                        if (v === '待分配') {
                            dayCell.textContent = '';
                        } else if (v === '休息') {
                            // 休息不在单元格内显示或着色（保持空白）
                            dayCell.textContent = '';
                        } else {
                            dayCell.textContent = v;
                            dayCell.classList.add(v);
                            applyShiftCellStyle(dayData, 'nightShift', person, dayCell);
                        }
                        rendered = true;
                    }
                }
            }

            // 3) 若尚未渲染且 DOM 中已有手工填写的内容（fallback），渲染文本并保留类
            if (!rendered) {
                const existing = (window.schedulerInstance && window.schedulerInstance.schedule) ? null : null; // no-op, keep explicit DOM reading below
                const dateStr = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
                const domCell = document.querySelector(`#scheduleBody .schedule-cell[data-person='${person}'][data-date='${dateStr}']`);
                if (domCell) {
                    const t = (domCell.textContent || '').trim();
                    if (t) {
                        dayCell.textContent = t;
                        // copy classes for color
                        domCell.classList.forEach(c => { if (c !== 'schedule-cell') dayCell.classList.add(c); });
                    }
                }
            }

            // 点击选择单元格（用于高亮顶端日期和左侧人员）
            dayCell.addEventListener('click', function() {
                selectCell(this);
                if (isEditMode) openEditModal(this);
            });

            // 拖放与移动/复制支持
            dayCell.setAttribute('draggable', 'true');
            dayCell.addEventListener('dragstart', function(e) {
                if (!isEditMode) { e.preventDefault(); return; }
                let shift = this.textContent || '';
                const sched = window.schedulerInstance;
                if (sched && sched.schedule) {
                    const info = getCellShiftInfo(this, sched);
                    if (info) shift = info.isSeat ? info.key : info.value;
                }
                const payload = {
                    fromPerson: this.dataset.person,
                    fromDate: this.dataset.date,
                    shift: shift,
                    op: e.ctrlKey ? 'copy' : 'move'
                };
                try { e.dataTransfer.setData('application/json', JSON.stringify(payload)); } catch (err) {}
                e.dataTransfer.setData('text/plain', shift);
                window.dragSourceCell = this;
            });
            dayCell.addEventListener('dragover', function(e) {
                if (!isEditMode) return;
                e.preventDefault();
                this.classList.add('drag-over');
                addDragHighlight(this);
            });
            dayCell.addEventListener('dragleave', function() {
                this.classList.remove('drag-over');
                removeDragHighlight();
            });
            dayCell.addEventListener('drop', function(e) {
                e.preventDefault();
                this.classList.remove('drag-over');
                removeDragHighlight();
                if (!isEditMode) return;
                let payload = null;
                try {
                    const raw = e.dataTransfer.getData('application/json');
                    if (raw) payload = JSON.parse(raw);
                } catch (err) { payload = null; }
                const plain = e.dataTransfer.getData('text/plain');
                const shift = (payload && payload.shift) ? payload.shift : plain;
                const op = payload && payload.op ? payload.op : null;
                const sourceCell = window.dragSourceCell;

                // 跨天拖拽交换：直接拒绝
                if (op === 'move' && sourceCell && payload && payload.fromDate && payload.fromDate !== this.dataset.date) {
                    alert('跨天交换不允许。');
                    window.dragSourceCell = null;
                    return;
                }

                // 同一天内移动到空单元格
                if (op === 'move' && sourceCell && payload && payload.fromDate === this.dataset.date) {
                    const targetEmpty = !(this.textContent || '').trim();
                    if (targetEmpty) {
                        moveCellToEmpty(sourceCell, this);
                        window.dragSourceCell = null;
                        return;
                    }
                }

                // 同一天内与其他成员交换（仅 move 且双方都有班次）
                if (op === 'move' && sourceCell && sourceCell !== this && payload && payload.fromDate === this.dataset.date) {
                    const sourceShift = (payload.shift || '').trim();
                    const targetShift = (this.textContent || '').trim();
                    if (sourceShift && targetShift) {
                        const ok = confirm(`确认与该成员在同一天进行班次交换吗？\n${sourceShift} ↔ ${targetShift}`);
                        if (ok) {
                            swapCells(sourceCell, this);
                        }
                        window.dragSourceCell = null;
                        return;
                    }
                }

                applyDropToCell(this, shift);
                if (op === 'move' && sourceCell) {
                    if (sourceCell !== this) clearCell(sourceCell);
                }
                window.dragSourceCell = null;
            });

            // （已移除：鼠标按住连续填充功能，保留单元格拖动/复制行为）

            scheduleBody.appendChild(dayCell);
        }
    });

    // 添加总计行
    appendTotalRow(scheduleBody, daysInMonth, year, month, schedule || (window.schedulerInstance && window.schedulerInstance.schedule));
}

function appendTotalRow(scheduleBody, daysInMonth, year, month, scheduleData) {
    const totals = computeDailyTotals(daysInMonth, scheduleData);

    const nameCell = document.createElement('div');
    nameCell.className = 'schedule-cell person-name total-cell';
    nameCell.textContent = '总计';
    scheduleBody.appendChild(nameCell);

    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        const totalCell = document.createElement('div');
        totalCell.className = 'schedule-cell total-cell';
        totalCell.dataset.date = dateStr;
        const v = totals[day - 1];
        totalCell.textContent = (v && v > 0) ? String(v) : '';
        totalCell.style.fontWeight = 'bold';
        scheduleBody.appendChild(totalCell);
    }
}

function computeDailyTotals(daysInMonth, scheduleData) {
    const sched = window.schedulerInstance;
    const data = scheduleData || (sched && sched.schedule) || [];
    if (!data || data.length === 0) {
        return Array.from({ length: daysInMonth }, () => null);
    }
    const whitePositions = (sched && sched.whitePositions) ? sched.whitePositions : ['B11', 'B12', 'B13', 'B16', 'B18', '主班', '监控', '支持'];
    const nightPositions = (sched && sched.nightPositions) ? sched.nightPositions : [...whitePositions, '大夜一', '大夜二'];
    const totals = Array.from({ length: daysInMonth }, () => 0);

    for (let d = 0; d < daysInMonth; d++) {
        const dayData = data[d] || { dayShift: {}, nightShift: {} };
        let count = 0;
        whitePositions.forEach(pos => {
            if (!dayData.dayShift || !dayData.dayShift[pos]) return;
            if (dayData.dayShift[`__morning__${pos}`]) return; // 早班不计入数量
            count++;
        });
        // 计入导入的“白”文本
        Object.entries(dayData.dayShift || {}).forEach(([k, v]) => {
            if (!v) return;
            if (k.startsWith('__')) return;
            if (v === '白') count++;
        });
        nightPositions.forEach(pos => {
            if (dayData.nightShift && dayData.nightShift[pos]) count++;
        });
        // 计入导入的“夜”文本
        Object.entries(dayData.nightShift || {}).forEach(([k, v]) => {
            if (!v) return;
            if (k.startsWith('__')) return;
            if (v === '夜') count++;
        });

        const hasIntel = Object.values(dayData.dayShift || {}).includes('情报') ||
            Object.values(dayData.nightShift || {}).includes('情报');
        if (hasIntel) count += 1; // 固定情报显示 +1

        totals[d] = count;
    }

    return totals;
}

function syncMorningMappings(scheduler) {
    const sched = scheduler || window.schedulerInstance;
    if (!sched || !sched.schedule) return;
    const days = sched.schedule.length;
    const nightPositions = sched.nightPositions || [];
    for (let d = 0; d < days - 1; d++) {
        const dayData = sched.schedule[d] || { nightShift: {} };
        const nextData = sched.schedule[d + 1] || { dayShift: {} };
        if (!nextData.dayShift) nextData.dayShift = {};

        nightPositions.forEach(pos => {
            const flagKey = `__morning__${pos}`;
            const reserveKey = `__night_reserved__${pos}`;
            const person = dayData.nightShift && dayData.nightShift[pos];
            const mappingBlocked =
                hasSpecialSeatConflictOnDay(sched, d, pos) ||
                hasSpecialSeatConflictOnDay(sched, d + 1, pos) ||
                isFixedSeatOnDay(pos, d + 1) ||
                (person && sched._isPersonFixedOnDay && sched._isPersonFixedOnDay(person, d + 2)) ||
                (person && isPersonSpecialOnDay(sched, d + 1, person));

            // 仅当上一日有夜班才允许生成早班
            if (!person) {
                if (nextData.dayShift[flagKey]) {
                    if (nextData.dayShift[pos] && !isFixedSeatOnDay(pos, d + 2)) delete nextData.dayShift[pos];
                    delete nextData.dayShift[flagKey];
                }
                // 夜班缺失时，保留次日席位，阻止白班误排
                if (!nextData.dayShift[pos]) nextData.dayShift[reserveKey] = true;
                return;
            }

            if (mappingBlocked) {
                if (nextData.dayShift[flagKey]) {
                    if (nextData.dayShift[pos] === person) delete nextData.dayShift[pos];
                    delete nextData.dayShift[flagKey];
                }
                if (!nextData.dayShift[pos]) nextData.dayShift[reserveKey] = true;
                return;
            }

            // 夜班存在且无冲突：强制与次日早班一致
            nextData.dayShift[pos] = person;
            nextData.dayShift[flagKey] = true;
            if (nextData.dayShift[reserveKey]) delete nextData.dayShift[reserveKey];
        });
    }
}

function isSpecialEventValue(v) {
    return ['年假','复训','婚假','育儿','D模','航实','行政','出差','培训','情报','休息','空班'].includes(v);
}

// 判断某天某人是否设置了“特殊班次”（按 person-key 形式存储），一旦有则该人当天不参与自动排班
function isPersonSpecialOnDay(sched, dayIndex, personName) {
    if (!sched || !sched.schedule || dayIndex < 0 || dayIndex >= sched.schedule.length) return false;
    const sd = sched.schedule[dayIndex] || { dayShift: {}, nightShift: {} };
    const vDay = sd.dayShift ? sd.dayShift[personName] : null;
    const vNight = sd.nightShift ? sd.nightShift[personName] : null;
    return isSpecialEventValue(vDay) || isSpecialEventValue(vNight);
}

// 判断次日 pos 席位是否与“特殊班次”冲突：如果次日存在 person-key 特殊班次，其值恰好等于 pos
// 解释：用户在某人单元格设置了特殊班次（如“B11”/“支持”等），意味着该人那天锁定该席位，不参与自动排班；
// 若此席位为夜->早映射目标，则前一日不排该夜班。
function hasSpecialSeatConflictOnDay(sched, dayIndex, pos) {
    if (!sched || !sched.schedule || dayIndex < 0 || dayIndex >= sched.schedule.length) return false;
    const sd = sched.schedule[dayIndex] || { dayShift: {}, nightShift: {} };
    const people = (sched.people || []).map(p => p.name);
    for (const name of people) {
        const vDay = sd.dayShift ? sd.dayShift[name] : null;
        const vNight = sd.nightShift ? sd.nightShift[name] : null;
        if (vDay === pos || vNight === pos) return true;
    }
    return false;
}

// 记录上一次选中的 cell，用于清理高亮
let lastSelectedCell = null;

function selectCell(cell) {
    // 清理上一个高亮
    if (lastSelectedCell) {
        lastSelectedCell.classList.remove('selected-cell');
        const lastPerson = lastSelectedCell.dataset.person;
        const lastDate = lastSelectedCell.dataset.date;
        if (lastDate) {
            const d = parseInt(lastDate.split('-')[2], 10);
            const header = document.querySelector(`#scheduleHeader div[data-day='${d}']`);
            if (header) header.classList.remove('highlight-top');
        }
        if (lastPerson) {
            const left = Array.from(document.querySelectorAll('.schedule-body .person-name')).find(n => n.dataset.person === lastPerson);
            if (left) left.classList.remove('highlight-left');
        }
    }

    // 设置当前高亮
    cell.classList.add('selected-cell');
    const person = cell.dataset.person;
    const date = cell.dataset.date;
    if (date) {
        const d = parseInt(date.split('-')[2], 10);
        const header = document.querySelector(`#scheduleHeader div[data-day='${d}']`);
        if (header) header.classList.add('highlight-top');
    }
    if (person) {
        const left = Array.from(document.querySelectorAll('.schedule-body .person-name')).find(n => n.dataset.person === person);
        if (left) left.classList.add('highlight-left');
    }

    lastSelectedCell = cell;
}

// 将拖放或模态编辑的结果应用到单元格，并写回 scheduler 数据结构（若存在）
function applyDropToCell(cell, shift) {
    // 清除原有的班次类（除基础类）
    cell.className = 'schedule-cell';
    // 默认不在单元格上显示 '休息'，保持空白视觉
    if (shift && shift !== '休息') {
        cell.classList.add(shift);
        const specialEvents = ['年假','复训','婚假','育儿','D模','航实','行政','出差','培训','情报','空班'];
        if (specialEvents.includes(shift)) {
            cell.textContent = shift;
        } else {
            const nightPositions = (window.schedulerInstance && window.schedulerInstance.nightPositions) || ['大夜一','大夜二'];
            cell.textContent = nightPositions.includes(shift) ? '夜' : '白';
        }
    } else {
        cell.textContent = '';
    }

    // 无论是否已生成排班，都先更新固定缓存，保证首次排班不丢失固定需求
    if (!shift) {
        removeFixedCacheValue(cell);
    } else {
        setFixedCacheValue(cell, shift);
    }

    // 如果存在 schedulerInstance，则尝试写回数据结构
    const sched = window.schedulerInstance;
    if (!sched || !sched.schedule) return;

    const date = cell.dataset.date; // 格式 YYYY-MM-DD
    if (!date) return;
    const parts = date.split('-');
    const day = parseInt(parts[2], 10);
    const dayIndex = day - 1;

    // 根据班次类型决定写入 dayShift 还是 nightShift 或作为特殊事件写到 person 键
    const isNight = ['大夜一','大夜二'].includes(shift);
    const shiftType = isNight ? 'nightShift' : 'dayShift';

    const person = cell.dataset.person;
    if (!person) return;

    // 清除任何之前对该 person 在这天的标记
    if (sched.schedule[dayIndex]) {
        delete sched.schedule[dayIndex].dayShift[person];
        delete sched.schedule[dayIndex].nightShift[person];
    }

    // 如果是特殊事件（非席位），写为 person: event
    const specialEvents = ['年假','复训','婚假','育儿','D模','航实','行政','出差','培训','情报','休息','空班'];
    if (!shift) {
        // 清除
        return;
    }
    if (specialEvents.includes(shift)) {
        // 对于休息，我们仍在数据结构中记录（用于减班逻辑），但在 DOM 中不显示
        sched.schedule[dayIndex][shiftType][person] = shift;
        return;
    }

    // 否则将该 person 放入对应席位映射（position -> person）
    sched.schedule[dayIndex][shiftType][shift] = person;
    // 如果之前在 positionCounters 中存在记录，更新计数
    sched.positionCounters[person] = sched.positionCounters[person] || {};
    sched.positionCounters[person][shift] = (sched.positionCounters[person][shift] || 0) + 1;

    refreshTotalRow();
}

// 交换两个单元格内容（同一天内班次互换）
function swapCells(cellA, cellB) {
    if (!cellA || !cellB) return;
    const sched = window.schedulerInstance;
    if (!sched || !sched.schedule) return;

    const infoA = getCellShiftInfo(cellA, sched);
    const infoB = getCellShiftInfo(cellB, sched);
    if (!infoA || !infoB) return;

    const hasQualification = (person, pos, shiftMap) => {
        const p = sched.people.find(pp => pp.name === person);
        if (!p || !(p.qualifications || []).includes(pos)) return false;
        const shiftType = (shiftMap === 'nightShift') ? 'night' : 'day';
        return isPositionAllowedForPerson(person, pos, shiftType);
    };

    const dayIndex = infoA.dayIndex;
    if (infoB.dayIndex !== dayIndex) return; // 仅支持同一天交换

    const dayData = sched.schedule[dayIndex] || { dayShift: {}, nightShift: {} };

    // 交换逻辑
    // 1) seat <-> seat：交换两个席位的人员
    if (infoA.isSeat && infoB.isSeat) {
        // 资质校验
        if (!hasQualification(infoA.person, infoB.key, infoB.shiftMap)) {
            alert(`${infoA.person}无${infoB.key}班资质，无法交换。`);
            return;
        }
        if (!hasQualification(infoB.person, infoA.key, infoA.shiftMap)) {
            alert(`${infoB.person}无${infoA.key}班资质，无法交换。`);
            return;
        }
        const mapA = dayData[infoA.shiftMap];
        const mapB = dayData[infoB.shiftMap];
        const tmp = mapA[infoA.key];
        mapA[infoA.key] = mapB[infoB.key];
        mapB[infoB.key] = tmp;
        // 更新计数器
        updatePositionCountersForSwap(sched, infoA.key, infoB.key, infoA.person, infoB.person);
        // 夜班交换后同步次日早班映射
        if (infoA.shiftMap === 'nightShift') {
            const prevMorning = updateMorningMappingAfterSwapUI(sched, dayIndex, infoA.key, infoA.person, infoB.person);
            refreshMorningCellsForSwap(dayIndex, infoA.key, infoA.person, infoB.person, prevMorning);
        }
        if (infoB.shiftMap === 'nightShift') {
            const prevMorning = updateMorningMappingAfterSwapUI(sched, dayIndex, infoB.key, infoB.person, infoA.person);
            refreshMorningCellsForSwap(dayIndex, infoB.key, infoB.person, infoA.person, prevMorning);
        }
    } else if (!infoA.isSeat && !infoB.isSeat) {
        // 2) event <-> event：交换 person-key 的事件值
        const mapA = dayData[infoA.shiftMap];
        const mapB = dayData[infoB.shiftMap];
        const tmp = mapA[infoA.key];
        mapA[infoA.key] = mapB[infoB.key];
        mapB[infoB.key] = tmp;
        if (infoA.shiftMap === infoB.shiftMap) {
            swapShiftCellStyle(dayData, infoA.shiftMap, infoA.key, infoB.key);
        }
    } else {
        // 3) event <-> seat：将事件转移给对方，将席位让给对方
        const eventInfo = infoA.isSeat ? infoB : infoA;
        const seatInfo = infoA.isSeat ? infoA : infoB;
        // 资质校验：事件人员要能胜任席位
        if (!hasQualification(eventInfo.person, seatInfo.key, seatInfo.shiftMap)) {
            alert(`${eventInfo.person}无${seatInfo.key}班资质，无法交换。`);
            return;
        }
        const eventMap = dayData[eventInfo.shiftMap];
        const seatMap = dayData[seatInfo.shiftMap];
        // seat -> eventPerson
        const seatPrevPerson = seatMap[seatInfo.key];
        seatMap[seatInfo.key] = eventInfo.person;
        // event -> seatPerson
        eventMap[seatInfo.person] = eventInfo.value;
        delete eventMap[eventInfo.person];
        // 清除 seatPerson 的 event 旧值（如果存在）
        delete eventMap[seatPrevPerson];
        if (eventInfo.shiftMap === 'dayShift' || eventInfo.shiftMap === 'nightShift') {
            swapShiftCellStyle(dayData, eventInfo.shiftMap, eventInfo.person, seatInfo.person);
        }
        // 更新计数器：席位从 seatPrevPerson 转给 eventInfo.person
        updatePositionCountersForSeatMove(sched, seatInfo.key, seatPrevPerson, eventInfo.person);
        // 夜班 seat 交换后同步次日早班映射
        if (seatInfo.shiftMap === 'nightShift') {
            const prevMorning = updateMorningMappingAfterSwapUI(sched, dayIndex, seatInfo.key, seatPrevPerson, eventInfo.person);
            refreshMorningCellsForSwap(dayIndex, seatInfo.key, seatPrevPerson, eventInfo.person, prevMorning);
        }
    }

    // 同步早班映射（若席位存在映射标记则保持位置，不随人移动）
    // render 两个单元格
    renderCellFromSchedule(cellA, sched);
    renderCellFromSchedule(cellB, sched);
    syncFixedCacheFromSchedule(cellA, sched);
    syncFixedCacheFromSchedule(cellB, sched);
    refreshTotalRow();

    // 如果统计面板开启，刷新
    const statsModal = document.getElementById('statsModal');
    if (statsModal && statsModal.style.display === 'flex') {
        showStatsModal();
    }
}

function moveCellToEmpty(sourceCell, targetCell) {
    if (!sourceCell || !targetCell) return;
    const sched = window.schedulerInstance;
    if (!sched || !sched.schedule) return;

    const info = getCellShiftInfo(sourceCell, sched);
    if (!info) return;
    const dayIndex = info.dayIndex;
    const targetPerson = targetCell.dataset.person;
    if (!targetPerson) return;
    if (sourceCell.dataset.date !== targetCell.dataset.date) return;

    // 资质校验（仅对席位）
    if (info.isSeat) {
        const p = sched.people.find(pp => pp.name === targetPerson);
        if (!p || !(p.qualifications || []).includes(info.key) || !isPositionAllowedForPerson(targetPerson, info.key, info.shiftMap === 'nightShift' ? 'night' : 'day')) {
            alert(`${targetPerson}无${info.key}班资质，无法移动。`);
            return;
        }
    }

    const dayData = sched.schedule[dayIndex] || { dayShift: {}, nightShift: {} };

    if (info.isSeat) {
        // 移动席位归属
        dayData[info.shiftMap][info.key] = targetPerson;
        updatePositionCountersForSeatMove(sched, info.key, info.person, targetPerson);
        // 夜班移动后同步次日早班映射
        if (info.shiftMap === 'nightShift') {
            const prevMorning = updateMorningMappingAfterSwapUI(sched, dayIndex, info.key, info.person, targetPerson);
            refreshMorningCellsForSwap(dayIndex, info.key, info.person, targetPerson, prevMorning);
        }
    } else {
        // 移动特殊事件
        const map = dayData[info.shiftMap];
        map[targetPerson] = info.value;
        delete map[info.key];
    }

    renderCellFromSchedule(sourceCell, sched);
    renderCellFromSchedule(targetCell, sched);
    syncFixedCacheFromSchedule(sourceCell, sched);
    syncFixedCacheFromSchedule(targetCell, sched);
    refreshTotalRow();
    const statsModal = document.getElementById('statsModal');
    if (statsModal && statsModal.style.display === 'flex') {
        showStatsModal();
    }
}

function refreshTotalRow() {
    const scheduleBody = document.getElementById('scheduleBody');
    if (!scheduleBody) return;
    const year = parseInt(document.getElementById('yearSelect').value);
    const month = parseInt(document.getElementById('monthSelect').value);
    if (!year || !month) return;
    const daysInMonth = new Date(year, month, 0).getDate();
    const totals = computeDailyTotals(daysInMonth, null);
    const totalCells = scheduleBody.querySelectorAll('.total-cell');
    // totalCells[0] 是“总计”标题，其余为每日数值
    if (totalCells.length <= 1) return;
    for (let i = 1; i < totalCells.length && i <= totals.length; i++) {
        totalCells[i].textContent = String(totals[i - 1] || 0);
    }
}

function updatePositionCountersForSwap(sched, keyA, keyB, personA, personB) {
    if (!personA || !personB) return;
    if (!sched.positionCounters[personA]) sched.positionCounters[personA] = {};
    if (!sched.positionCounters[personB]) sched.positionCounters[personB] = {};
    // personA loses keyA, gains keyB
    sched.positionCounters[personA][keyA] = Math.max(0, (sched.positionCounters[personA][keyA] || 1) - 1);
    sched.positionCounters[personA][keyB] = (sched.positionCounters[personA][keyB] || 0) + 1;
    // personB loses keyB, gains keyA
    sched.positionCounters[personB][keyB] = Math.max(0, (sched.positionCounters[personB][keyB] || 1) - 1);
    sched.positionCounters[personB][keyA] = (sched.positionCounters[personB][keyA] || 0) + 1;
}

function updatePositionCountersForSeatMove(sched, key, fromPerson, toPerson) {
    if (!fromPerson || !toPerson) return;
    if (!sched.positionCounters[fromPerson]) sched.positionCounters[fromPerson] = {};
    if (!sched.positionCounters[toPerson]) sched.positionCounters[toPerson] = {};
    sched.positionCounters[fromPerson][key] = Math.max(0, (sched.positionCounters[fromPerson][key] || 1) - 1);
    sched.positionCounters[toPerson][key] = (sched.positionCounters[toPerson][key] || 0) + 1;
}

function swapShiftCellStyle(dayData, shiftMapName, keyA, keyB) {
    if (!dayData || !shiftMapName || !dayData[shiftMapName]) return;
    const map = dayData[shiftMapName];
    const bgA = map[`__bgcolor__${keyA}`];
    const fgA = map[`__fgcolor__${keyA}`];
    const bgB = map[`__bgcolor__${keyB}`];
    const fgB = map[`__fgcolor__${keyB}`];
    if (bgA !== undefined || bgB !== undefined) {
        map[`__bgcolor__${keyA}`] = bgB;
        map[`__bgcolor__${keyB}`] = bgA;
    }
    if (fgA !== undefined || fgB !== undefined) {
        map[`__fgcolor__${keyA}`] = fgB;
        map[`__fgcolor__${keyB}`] = fgA;
    }
}

function updateMorningMappingAfterSwapUI(sched, dayIndex, pos, oldPerson, newPerson) {
    const nextIdx = dayIndex + 1;
    if (!sched || !sched.schedule || nextIdx >= sched.schedule.length) return null;
    const nextDay = sched.schedule[nextIdx] || { dayShift: {} };
    if (!nextDay.dayShift) nextDay.dayShift = {};
    const flagKey = `__morning__${pos}`;
    const reserveKey = `__night_reserved__${pos}`;
    const prevMorningPerson = nextDay.dayShift[pos] || null;

    // 夜班交换时，次日早班强制跟随新夜班人选
    nextDay.dayShift[pos] = newPerson;
    nextDay.dayShift[flagKey] = true;
    if (nextDay.dayShift[reserveKey]) delete nextDay.dayShift[reserveKey];

    return prevMorningPerson;
}

function refreshMorningCellsForSwap(dayIndex, pos, oldPerson, newPerson, prevMorningPerson) {
    const sched = window.schedulerInstance;
    if (!sched || !sched.schedule) return;
    const nextIdx = dayIndex + 1;
    if (nextIdx >= sched.schedule.length) return;
    const dateStr = getDateStringFromDayIndex(nextIdx);
    if (!dateStr) return;
    const currentMorningPerson = sched.schedule[nextIdx]?.dayShift?.[pos];
    const peopleToRefresh = [oldPerson, newPerson, prevMorningPerson, currentMorningPerson]
        .filter(Boolean);
    Array.from(new Set(peopleToRefresh)).forEach(person => {
        if (!person) return;
        const cell = document.querySelector(`#scheduleBody .schedule-cell[data-person='${person}'][data-date='${dateStr}']`);
        if (cell) renderCellFromSchedule(cell, sched);
    });
}

function getDateStringFromDayIndex(dayIndex) {
    const year = parseInt(document.getElementById('yearSelect').value);
    const month = parseInt(document.getElementById('monthSelect').value);
    if (!year || !month) return null;
    const day = dayIndex + 1;
    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function getCellShiftInfo(cell, sched) {
    if (!cell || !sched || !sched.schedule) return null;
    const date = cell.dataset.date;
    const person = cell.dataset.person;
    if (!date || !person) return null;
    const day = parseInt(date.split('-')[2], 10);
    const dayIndex = day - 1;
    const dayData = sched.schedule[dayIndex] || { dayShift: {}, nightShift: {} };

    // seat in dayShift
    for (const [k, v] of Object.entries(dayData.dayShift || {})) {
        if (v === person) {
            return { dayIndex, shiftMap: 'dayShift', key: k, isSeat: true, person, value: k };
        }
    }
    // seat in nightShift
    for (const [k, v] of Object.entries(dayData.nightShift || {})) {
        if (v === person) {
            return { dayIndex, shiftMap: 'nightShift', key: k, isSeat: true, person, value: k };
        }
    }
    // person-key special event
    if (Object.prototype.hasOwnProperty.call(dayData.dayShift, person)) {
        return { dayIndex, shiftMap: 'dayShift', key: person, isSeat: false, person, value: dayData.dayShift[person] };
    }
    if (Object.prototype.hasOwnProperty.call(dayData.nightShift, person)) {
        return { dayIndex, shiftMap: 'nightShift', key: person, isSeat: false, person, value: dayData.nightShift[person] };
    }
    return null;
}

function renderCellFromSchedule(cell, sched) {
    if (!cell || !sched) return;
    const date = cell.dataset.date;
    const person = cell.dataset.person;
    if (!date || !person) return;
    const day = parseInt(date.split('-')[2], 10);
    const dayData = sched.schedule[day - 1] || { dayShift: {}, nightShift: {} };

    cell.className = 'schedule-cell';
    cell.textContent = '';

    // seat first
    for (const [k, v] of Object.entries(dayData.dayShift || {})) {
        if (v === person) {
            const morningFlag = dayData.dayShift[`__morning__${k}`];
            cell.classList.add(k);
            cell.textContent = (morningFlag ? '早' : '白');
            applyShiftCellStyle(dayData, 'dayShift', k, cell);
            return;
        }
    }
    for (const [k, v] of Object.entries(dayData.nightShift || {})) {
        if (v === person) {
            cell.classList.add(k);
            cell.textContent = '夜';
            applyShiftCellStyle(dayData, 'nightShift', k, cell);
            return;
        }
    }
    // person-key event
    if (Object.prototype.hasOwnProperty.call(dayData.dayShift, person)) {
        const v = dayData.dayShift[person];
        if (v && v !== '休息') {
            cell.textContent = v;
            cell.classList.add(v);
            applyShiftCellStyle(dayData, 'dayShift', person, cell);
        }
        return;
    }
    if (Object.prototype.hasOwnProperty.call(dayData.nightShift, person)) {
        const v = dayData.nightShift[person];
        if (v && v !== '休息') {
            cell.textContent = v;
            cell.classList.add(v);
            applyShiftCellStyle(dayData, 'nightShift', person, cell);
        }
    }
}

// Scheduler 类
class Scheduler {
    constructor() {
        this.people = [];
        this.schedule = [];
        this.config = null;
        // 固定席位定义
        this.whitePositions = ['B11', 'B12', 'B13', 'B16', 'B18', '主班', '监控', '支持'];
        this.nightPositions = [...this.whitePositions, '大夜一', '大夜二'];
        this.positionCounters = {}; // person -> position -> count
        this.colorMap = { // 保留颜色
            'B11': '#FF0000', 'B12': '#FF6600', 'B13': '#7CF93F', 'B16': '#CC99FF',
            'B18': '#0070C0', '主班': '#FA26ED', '监控': '#00CCFF', '支持': '#008000',
            '大夜一': '#FFFF00', '大夜二': '#24BE7B', '年假': '#FF7B7B',
            '复训': '#FF99CC', 'D模': '#FF99CC', '航实': '#7E62A1','情报': '#FFC000',
            '行政': '#7030A0', '出差': '#7030A0', '培训': '#7030A0', '休息': '#8d6e63'
        };
    }

    initialize(config) {
        this.config = config;
        const daysInMonth = new Date(config.year, config.month, 0).getDate();
        this.schedule = Array.from({ length: daysInMonth }, () => ({ dayShift: {}, nightShift: {} }));

        // deep copy of people with deductions computed
        this.people = config.people.map(p => ({ name: p.name, qualifications: p.qualifications || [], fixedDays: p.fixedDays || {} }));

        // compute deductions per person based on fixedDays
        const deductionRules = getDeductionRules(config.team);
        this.people.forEach(p => {
            p.deductions = { white: 0, night: 0 };

            // Track presence of one-off deduction types and count per-day admin-like types
            const typesSeen = new Set();
            let adminLikeCount = 0; // for 行政/出差/培训/情报 (per-day deduction)

            // First: write fixed days into schedule (per-date), and collect types
            Object.entries(p.fixedDays || {}).forEach(([day, type]) => {
                typesSeen.add(type);
                if ((deductionRules.adminLike || []).includes(type)) adminLikeCount += 1;

                // write fixed days into schedule so they won't be overwritten
                const dn = parseInt(day, 10) - 1;
                if (dn >= 0 && dn < this.schedule.length) {
                    // special event marks by person name key
                    const shiftType = this._getShiftTypeForDay(parseInt(day,10));
                    const st = (shiftType === 'white') ? 'dayShift' : 'nightShift';
                    if (SPECIAL_EVENT_TYPES.includes(type)) {
                        this.schedule[dn][st][p.name] = type;
                    } else {
                        // treat as fixed seat name
                        this.schedule[dn][st][type] = p.name;
                    }
                }
            });

            // Apply one-off deductions if the type exists at least once for this person
            Object.entries(deductionRules.oneOff || {}).forEach(([type, val]) => {
                if (!typesSeen.has(type)) return;
                p.deductions.white += (val.white || 0);
                p.deductions.night += (val.night || 0);
            });

            // Admin-like types reduce white count per day they appear (keep previous behavior)
            if (adminLikeCount > 0) {
                p.deductions.white += adminLikeCount;
            }

            // 记录原始减班数量（用于总量校验）
            p.deductionsBase = { white: p.deductions.white, night: p.deductions.night };
        });

        // initialize counters
        this._initPositionCounters();
    }

    // 生成排班，返回 schedule
    generateBtn() {
        const days = this.schedule.length;
        const startDay = (this.config && this.config.startDay) ? (this.config.startDay - 1) : 0;

        // 记录每人每天的预期班次（用于一致性校验）
        this.expectedShiftByDay = Array.from({ length: days }, () => ({}));

        const baseCycle = ['white','night','morning','rest'];
        // personCycleIndex 保证每人跟随白-夜-早-休 的循环
        const personCycleIndex = {};
        this.people.forEach(p => personCycleIndex[p.name] = 0);

        // 记录减班折算工作量（夜班=2白班）用于公平分配
        const deductionCredits = {};
        this.people.forEach(p => {
            const dw = (p.deductions && p.deductions.white) ? p.deductions.white : 0;
            const dn = (p.deductions && p.deductions.night) ? p.deductions.night : 0;
            deductionCredits[p.name] = dw + 2 * dn;
        });

        // 当前已分配统计（含固定/手动）：白班不含映射早班；夜班为所有夜班席位
        const assignedCounts = {};
        this.people.forEach(p => assignedCounts[p.name] = { white: 0, night: 0 });
        const peopleNamesSet = new Set(this.people.map(p => p.name));
        for (let d = 0; d < this.schedule.length; d++) {
            const sd = this.schedule[d] || { dayShift: {}, nightShift: {} };
            Object.entries(sd.dayShift || {}).forEach(([k, v]) => {
                if (!v) return;
                if (!peopleNamesSet.has(v)) return;
                if (k.startsWith('__morning__')) return;
                const morningFlag = sd.dayShift[`__morning__${k}`];
                if (morningFlag) return;
                assignedCounts[v].white++;
            });
            Object.entries(sd.nightShift || {}).forEach(([k, v]) => {
                if (!v) return;
                if (!peopleNamesSet.has(v)) return;
                assignedCounts[v].night++;
            });
        }

        const getWorkScore = (name) => {
            const c = assignedCounts[name] || { white: 0, night: 0 };
            return (c.white || 0) + 2 * (c.night || 0) + (deductionCredits[name] || 0);
        };

        const randomPositions = ['B11', 'B12', 'B13', 'B16', 'B18'];
        const limitedPositions = ['B11', 'B12', 'B13', 'B16', 'B18'];
        const supportPriorityNames = ['胡嘉娟', '田东驰'];
        const isSupportPriority = (name) => supportPriorityNames.includes(name);
        const compareSupportPriority = (a, b) => {
            const ap = isSupportPriority(a);
            const bp = isSupportPriority(b);
            if (ap !== bp) return ap ? -1 : 1;
            return 0;
        };
        const isLimitedPosition = (pos) => limitedPositions.includes(pos);
        const isRandomPosition = (pos) => randomPositions.includes(pos);

        // 便捷：计算每人总已分配数，优先选择分配较少的人
        const totalAssigned = {}; // name -> count
        this.people.forEach(p => totalAssigned[p.name] = 0);

        // === 主班均衡目标计算 ===
        const daysCount = days;
        // 找出拥有主班资质的人员
        const mainPeople = this.people.filter(p => (p.qualifications || []).includes('主班')).map(p => p.name);
        // 当前已有主班计数（含固定分配）
        const currentMainCounts = {};
        mainPeople.forEach(n => { currentMainCounts[n] = (this.positionCounters[n] && this.positionCounters[n]['主班']) || 0; });

        // 目标分配：尝试让每人主班数量均衡（误差<=1），且每人最多4个
        // 我们从 currentMainCounts 出发，逐个分配剩余主班席位给当前计数最少且未满4人的人员
        const totalAssignedMainFixed = Object.values(currentMainCounts).reduce((a,b) => a + b, 0);
        const freeMainSeats = Math.max(0, daysCount - totalAssignedMainFixed);

        // Prepare mutable desiredFinal starting from current counts
        const desiredFinal = {};
        mainPeople.forEach(n => desiredFinal[n] = currentMainCounts[n]);

        // Shuffle mainPeople for fair extra distribution
        const shuffledMain = mainPeople.slice().sort(() => Math.random() - 0.5);

        let remaining = freeMainSeats;
        while (remaining > 0) {
            // find person(s) with minimal desiredFinal and below cap 4
            let minVal = Infinity;
            shuffledMain.forEach(n => { if (desiredFinal[n] < 4) minVal = Math.min(minVal, desiredFinal[n]); });
            if (!isFinite(minVal)) break; // nobody can accept more
            // candidates with minimal
            const cand = shuffledMain.filter(n => desiredFinal[n] === minVal && desiredFinal[n] < 4);
            if (cand.length === 0) break;
            // pick random among them
            const pick = cand[Math.floor(Math.random() * cand.length)];
            desiredFinal[pick]++;
            remaining--;
        }

        // mainQuotaRemaining = how many additional 主班 can be assigned to each person
        const mainQuotaRemaining = {};
        mainPeople.forEach(n => mainQuotaRemaining[n] = Math.max(0, desiredFinal[n] - currentMainCounts[n]));

        // === 大夜（大夜一/大夜二）目标分配：每人不少于 2，不多于 4 ===
        const minBigNight = 2;
        const maxBigNight = 4;
        const peopleNames = this.people.map(p => p.name);
        // 当前大夜计数（含固定）
        const currentBigCounts = {};
        peopleNames.forEach(n => {
            const pc = this.positionCounters[n] || {};
            currentBigCounts[n] = (pc['大夜一'] || 0) + (pc['大夜二'] || 0);
        });
        const totalBigSlots = days * 2; // 每天两个大夜席位
        const assignedBigSoFar = Object.values(currentBigCounts).reduce((a,b) => a + b, 0);
        let remainingBigSlots = Math.max(0, totalBigSlots - assignedBigSoFar);

        // desiredNightFinal 起始于当前计数，先满足 minBigNight，然后再均匀分配不超过 maxBigNight
        const desiredNightFinal = {};
        peopleNames.forEach(n => desiredNightFinal[n] = currentBigCounts[n]);

        // 先确保每人至少 minBigNight（如果可行）
        const shuffledNames = peopleNames.slice().sort(() => Math.random() - 0.5);
        for (let i = 0; i < shuffledNames.length && remainingBigSlots > 0; i++) {
            const n = shuffledNames[i];
            if (desiredNightFinal[n] < minBigNight) {
                const need = Math.min(minBigNight - desiredNightFinal[n], remainingBigSlots);
                desiredNightFinal[n] += need;
                remainingBigSlots -= need;
            }
        }

        // 再把剩余槽位尽量均匀分配，但不超过 maxBigNight
        while (remainingBigSlots > 0) {
            const candidates = peopleNames.filter(n => desiredNightFinal[n] < maxBigNight);
            if (candidates.length === 0) break;
            // 选取当前期望最少的人集合进行分配
            let minVal = Math.min(...candidates.map(n => desiredNightFinal[n]));
            const cand = candidates.filter(n => desiredNightFinal[n] === minVal);
            const pick = cand[Math.floor(Math.random() * cand.length)];
            desiredNightFinal[pick]++;
            remainingBigSlots--;
        }

        // desiredNightRemaining 表示每人还可以分配的额外大夜（正值表示需要/可分配）
        const desiredNightRemaining = {};
        peopleNames.forEach(n => desiredNightRemaining[n] = Math.max(0, desiredNightFinal[n] - currentBigCounts[n]));

        // helper to sum positionCounters into totalAssigned (called when positionCounters updated)
        const refreshTotals = () => {
            this.people.forEach(p => {
                let sum = 0;
                const pc = this.positionCounters[p.name] || {};
                Object.keys(pc).forEach(k => sum += (pc[k] || 0));
                totalAssigned[p.name] = sum;
            });
        };

        // ========== 第一阶段：只分配夜班（并在可能时映射为次日早班），记录每天的 day-available 集合 ==========
        const availableForDayByIndex = Array(days).fill(null).map(() => new Set());
        const availableForNightByIndex = Array(days).fill(null).map(() => new Set());

        // 先计算当前已有的夜班计数（来自 fixed assignments）
        const currentNightCounts = {};
        this.people.forEach(p => { currentNightCounts[p.name] = 0; });
        for (let d = 0; d < days; d++) {
            const sd = this.schedule[d] || { dayShift: {}, nightShift: {} };
            Object.entries(sd.nightShift || {}).forEach(([k,v]) => {
                if (!v) return;
                if (this.people.find(p => p.name === v)) currentNightCounts[v] += 1;
            });
        }

        // 预扫描：统计未来将尝试分配的夜班槽（skip 如果次日早班已固定或有特殊冲突）
        let potentialNightSlots = 0;
        for (let d = startDay; d < days; d++) {
            const dayData = this.schedule[d];
            this.nightPositions.forEach(pos => {
                if (dayData.nightShift[pos]) return; // 已固定
                const nextIdx = d + 1;
                if (nextIdx < days) {
                    const nextDayData = this.schedule[nextIdx];
                    if (hasSpecialSeatConflictOnDay(this, nextIdx, pos)) return; // 次日特殊冲突 -> skip
                    if (nextDayData.dayShift && nextDayData.dayShift[pos]) return; // 次日该席位被固定 -> skip
                }
                potentialNightSlots++;
            });
        }

        // total night slots that will exist = already assigned + potential
        const alreadyAssignedNightTotal = Object.values(currentNightCounts).reduce((a,b) => a + b, 0);
        const totalNightSlotsFinal = alreadyAssignedNightTotal + potentialNightSlots;
        const numPeople = this.people.length;
        const baseNightPerPerson = Math.floor(totalNightSlotsFinal / Math.max(1, numPeople));
        let nightRemainder = totalNightSlotsFinal % Math.max(1, numPeople);

    // 初始化每人夜班目标剩余（保留结构，但不再作为硬限制）
    const nightQuotaRemaining = {};
        // Shuffle people for fair distribution
        const peopleOrder = this.people.map(p => p.name).sort(() => Math.random() - 0.5);

        // 计算具备大夜资质的人员列表（至少拥有大夜一或大夜二 资质且允许该席位）
        const qualifiedForBigNight = this.people.filter(p =>
            ((p.qualifications || []).includes('大夜一') && isPositionAllowedForPerson(p.name, '大夜一', 'night')) ||
            ((p.qualifications || []).includes('大夜二') && isPositionAllowedForPerson(p.name, '大夜二', 'night'))
        ).map(p => p.name);
        const numQualified = qualifiedForBigNight.length;

        // 强制要求：具备大夜资质的每个人当月至少 1 个大夜（如果总夜班槽位足够）
        if (totalNightSlotsFinal >= numQualified && numQualified > 0) {
            // 先给每个具备资质的人分配 1 个目标
            let leftover = totalNightSlotsFinal - numQualified;
            // 其余槽位尽量均分给全体人员
            const baseExtra = Math.floor(leftover / numPeople);
            let remExtra = leftover % numPeople;
            peopleOrder.forEach(name => {
                // 如果 name 在 qualifiedForBigNight 中，先保证至少 1
                const isQ = qualifiedForBigNight.includes(name);
                let target = (isQ ? 1 : 0) + baseExtra;
                if (remExtra > 0) { target++; remExtra--; }
                nightQuotaRemaining[name] = Math.max(0, target - (currentNightCounts[name] || 0));
            });
        } else {
            // 槽位不足以满足每个具备资质的人至少1个大夜，回退到均匀分配（尽量公平）
            peopleOrder.forEach(name => {
                let target = baseNightPerPerson;
                if (nightRemainder > 0) { target++; nightRemainder--; }
                nightQuotaRemaining[name] = Math.max(0, target - (currentNightCounts[name] || 0));
            });
        }

        // 先定义排班顺序：先固定，再主班/大夜优先，其它夜班随后
        const priorityNightPositions = ['主班', '大夜一', '大夜二'];
        const orderedNightPositions = priorityNightPositions
            .concat(this.nightPositions.filter(p => !priorityNightPositions.includes(p)));
        const orderedWhitePositions = ['主班']
            .concat(this.whitePositions.filter(p => p !== '主班'));

        // 夜班与次日早班映射必须成套：若次日席位冲突/特殊/固定则前一夜不排
        const canAssignNightSeat = (dayIndex, pos) => {
            if (hasSpecialSeatConflictOnDay(this, dayIndex, pos)) return false;
            const nextIdx = dayIndex + 1;
            if (nextIdx >= days) return true;
            if (hasSpecialSeatConflictOnDay(this, nextIdx, pos)) return false;
            if (isFixedSeatOnDay(pos, nextIdx + 1)) return false;
            return true;
        };

        const canMapToNextDayForPerson = (dayIndex, pos, personName) => {
            if (hasSpecialSeatConflictOnDay(this, dayIndex, pos)) return false;
            const nextIdx = dayIndex + 1;
            if (nextIdx >= days) return true;
            if (!canAssignNightSeat(dayIndex, pos)) return false;
            if (this._isPersonFixedOnDay(personName, nextIdx + 1)) return false;
            if (isPersonSpecialOnDay(this, nextIdx, personName)) return false;
            return true;
        };

        const isMorningBlockedByPrevNight = (dayIndex, pos) => {
            const prevIdx = dayIndex - 1;
            if (prevIdx < 0) return false;
            return hasSpecialSeatConflictOnDay(this, prevIdx, pos);
        };

        const applyNightAssignment = (dayIndex, positions, assignedToday) => {
            const dayData = this.schedule[dayIndex];
            const nextIdx = dayIndex + 1;
            positions.forEach(pos => {
                if (dayData.nightShift[pos]) return; // 已固定
                if (nextIdx < days && !canAssignNightSeat(dayIndex, pos)) return;

                let qualified = this.people.map(p => p.name).filter(name => {
                    if (assignedToday.has(name)) return false;
                    if (this._isPersonFixedOnDay(name, dayIndex + 1)) return false;
                    if (isPersonSpecialOnDay(this, dayIndex, name)) return false;
                    if (nextIdx < days && this._isPersonFixedOnDay(name, nextIdx + 1)) return false;
                    if (nextIdx < days && isPersonSpecialOnDay(this, nextIdx, name)) return false;
                    const person = this.people.find(p => p.name === name);
                    if (!person) return false;
                    return person.qualifications.includes(pos) && isPositionAllowedForPerson(name, pos, 'night');
                });

                if (qualified.length === 0) return;

                qualified.sort((a, b) => {
                    if (pos === '支持') {
                        const pr = compareSupportPriority(a, b);
                        if (pr !== 0) return pr;
                    }
                    const wa = getWorkScore(a), wb = getWorkScore(b);
                    if (wa !== wb) return wa - wb;
                    if (isRandomPosition(pos)) return Math.random() - 0.5;
                    const pa = (this.people.find(p => p.name === a)?.qualifications.indexOf(pos));
                    const pb = (this.people.find(p => p.name === b)?.qualifications.indexOf(pos));
                    const ia = (pa >= 0 ? pa : 1e6);
                    const ib = (pb >= 0 ? pb : 1e6);
                    return ia - ib;
                });

                const cand = qualified[0];
                dayData.nightShift[pos] = cand;
                this.positionCounters[cand][pos] = (this.positionCounters[cand][pos] || 0) + 1;
                assignedCounts[cand].night = (assignedCounts[cand].night || 0) + 1;
                refreshTotals();

                if (nextIdx < days) {
                    const nextDayData = this.schedule[nextIdx];
                    nextDayData.dayShift[pos] = cand;
                    nextDayData.dayShift[`__morning__${pos}`] = true;
                    this.positionCounters[cand][pos] = (this.positionCounters[cand][pos] || 0) + 1;
                    refreshTotals();
                }

                assignedToday.add(cand);
            });
        };

        const fillRemainingNightSlots = (dayIndex, availableForNight, assignedToday) => {
            const dayData = this.schedule[dayIndex];
            const nextIdx = dayIndex + 1;
            const remaining = this.nightPositions.filter(pos => !dayData.nightShift[pos]);
            if (remaining.length === 0) return;

            const tryFill = (ignoreCaps) => {
                for (let i = 0; i < remaining.length; i++) {
                    const pos = remaining[i];
                    if (dayData.nightShift[pos]) continue;
                    const qualified = Array.from(availableForNight).filter(name => {
                        if (assignedToday.has(name)) return false;
                        if (this._isPersonFixedOnDay(name, dayIndex + 1)) return false;
                        if (isPersonSpecialOnDay(this, dayIndex, name)) return false;
                        const person = this.people.find(p => p.name === name);
                        if (!person) return false;
                        if (!person.qualifications.includes(pos)) return false;
                        if (!isPositionAllowedForPerson(name, pos, 'night')) return false;
                        if (!ignoreCaps && ['大夜一','大夜二'].includes(pos)) {
                            const candNightCount = (this.positionCounters[name]['大夜一'] || 0) + (this.positionCounters[name]['大夜二'] || 0);
                            if (candNightCount >= maxBigNight) return false;
                            if ((this.positionCounters[name][pos] || 0) >= 2) return false;
                        }
                        if (!ignoreCaps && isLimitedPosition(pos) && (this.positionCounters[name][pos] || 0) >= 3) return false;
                        return true;
                    });
                    if (qualified.length === 0) continue;
                    qualified.sort((a, b) => {
                        const na = (assignedCounts[a] && assignedCounts[a].night) || 0;
                        const nb = (assignedCounts[b] && assignedCounts[b].night) || 0;
                        if (na !== nb) return na - nb;
                        const wa = getWorkScore(a), wb = getWorkScore(b);
                        if (wa !== wb) return wa - wb;
                        return Math.random() - 0.5;
                    });
                    const cand = qualified[0];
                    dayData.nightShift[pos] = cand;
                    this.positionCounters[cand][pos] = (this.positionCounters[cand][pos] || 0) + 1;
                    assignedCounts[cand].night = (assignedCounts[cand].night || 0) + 1;
                    refreshTotals();
                    if (nextIdx < days) {
                        const nextDayData = this.schedule[nextIdx];
                        const canMap = canMapToNextDayForPerson(dayIndex, pos, cand);
                        if (canMap) {
                            nextDayData.dayShift[pos] = cand;
                            nextDayData.dayShift[`__morning__${pos}`] = true;
                            this.positionCounters[cand][pos] = (this.positionCounters[cand][pos] || 0) + 1;
                            refreshTotals();
                        } else {
                            nextDayData.dayShift[`__night_reserved__${pos}`] = true;
                        }
                    }
                    assignedToday.add(cand);
                }
            };

            // 先尝试按限制补齐，再忽略限制补齐
            tryFill(false);
            const stillMissing = this.nightPositions.filter(pos => !dayData.nightShift[pos]);
            if (stillMissing.length > 0) {
                tryFill(true);
            }
        };

        // 若从4号或以后开始上班，则在1..startDay-2补一套夜早班
        const preStartDays = Math.max(0, startDay - 2);
        for (let d = 0; d < preStartDays; d++) {
            const assignedToday = new Set();
            applyNightAssignment(d, priorityNightPositions, assignedToday);
            applyNightAssignment(d, orderedNightPositions.filter(p => !priorityNightPositions.includes(p)), assignedToday);
        }

        // 按天遍历，仅做夜班分配并记录每天的可用白班人员集合
        for (let day = startDay; day < days; day++) {
            const dayNum = day + 1;
            const availableForNight = new Set();
            const availableForDay = new Set();

            this.people.forEach(p => {
                let idx = personCycleIndex[p.name] % baseCycle.length;
                let shift = baseCycle[idx];
                if ((shift === 'white' && p.deductions.white > 0)) { p.deductions.white--; shift = 'rest'; }
                if ((shift === 'night' && p.deductions.night > 0)) { p.deductions.night--; shift = 'rest'; }
                this.expectedShiftByDay[day][p.name] = shift;
                if (this._isPersonFixedOnDay(p.name, dayNum)) return;
                if (shift === 'night') availableForNight.add(p.name);
                if (shift === 'white') {
                    if (!hadNightPreviousDay(this, day, p.name) && !missedExpectedNightPrevDay(this, day, p.name)) {
                        availableForDay.add(p.name);
                    }
                }
            });

            // 存储当日可用白班人员集合（将在第二阶段使用）
            availableForDayByIndex[day] = new Set(Array.from(availableForDay));
            availableForNightByIndex[day] = new Set(Array.from(availableForNight));

            // 刷新总计
            refreshTotals();

            // 夜班分配（与之前逻辑相似），但必须尊重 nightQuotaRemaining
            const assignedToday = new Set();
            const dayData = this.schedule[day];

            const applyNightPositions = (positions) => {
                positions.forEach(pos => {
                if (dayData.nightShift[pos]) return; // 已固定

                const nextIdx = day + 1;
                if (nextIdx < days) {
                    // 规则：若次日该席位存在“特殊班次”冲突（早班冲突），则前一日不排该夜班
                    if (!canAssignNightSeat(day, pos)) return;
                }

                let qualified = Array.from(availableForNight).filter(name => {
                    if (assignedToday.has(name)) return false;
                    // 规则：设置了特殊班次的人员当天不参与自动排班
                    if (isPersonSpecialOnDay(this, day, name)) return false;
                    // 若次日该人有固定/特殊班次，则不安排其夜班（但不影响其他人夜班）
                    if (nextIdx < days && this._isPersonFixedOnDay(name, nextIdx + 1)) return false;
                    if (nextIdx < days && isPersonSpecialOnDay(this, nextIdx, name)) return false;
                    const person = this.people.find(p => p.name === name);
                    if (!person) return false;
                    return person.qualifications.includes(pos) && isPositionAllowedForPerson(name, pos, 'night');
                });

                if (qualified.length === 0) return;

                qualified.sort((a,b) => {
                    if (pos === '支持') {
                        const pr = compareSupportPriority(a, b);
                        if (pr !== 0) return pr;
                    }
                    // prefer those who still have nightQuotaRemaining when pos is night-ish
                    if (['大夜一','大夜二'].includes(pos) || true) {
                        const ar = nightQuotaRemaining[a] || 0;
                        const br = nightQuotaRemaining[b] || 0;
                        if ((ar > 0) !== (br > 0)) return (br > 0) ? 1 : -1;
                    }
                    const wa = getWorkScore(a), wb = getWorkScore(b);
                    if (wa !== wb) return wa - wb;
                    // 主班偏好
                    if (pos === '主班') {
                        const aCnt = (this.positionCounters[a] && this.positionCounters[a]['主班']) || 0;
                        const bCnt = (this.positionCounters[b] && this.positionCounters[b]['主班']) || 0;
                        if (aCnt !== bCnt) return aCnt - bCnt;
                        const aIdx0 = (this.people.find(p => p.name === a)?.qualifications[0] === '主班');
                        const bIdx0 = (this.people.find(p => p.name === b)?.qualifications[0] === '主班');
                        if (aIdx0 !== bIdx0) return aIdx0 ? -1 : 1;
                    }
                    if (isRandomPosition(pos)) {
                        return Math.random() - 0.5;
                    }
                    const pa = (this.people.find(p => p.name === a)?.qualifications.indexOf(pos));
                    const pb = (this.people.find(p => p.name === b)?.qualifications.indexOf(pos));
                    const ia = (pa >= 0 ? pa : 1e6);
                    const ib = (pb >= 0 ? pb : 1e6);
                    return ia - ib;
                });

                for (let qi = 0; qi < qualified.length; qi++) {
                    const cand = qualified[qi];
                    if (nextIdx < days && this._isPersonFixedOnDay(cand, nextIdx + 1)) continue;
                    if (nextIdx < days && isPersonSpecialOnDay(this, nextIdx, cand)) continue;
                    // 总大夜上限与单席位上限
                    const candNightCount = (this.positionCounters[cand]['大夜一'] || 0) + (this.positionCounters[cand]['大夜二'] || 0);
                    if (['大夜一','大夜二'].includes(pos) && candNightCount >= maxBigNight) continue;
                    if (['大夜一','大夜二'].includes(pos) && (this.positionCounters[cand][pos] || 0) >= 2) continue;

                    // 夜班配额不再作为硬限制（仅用于轻微偏好）

                    // 其他资质班次每人每月最多 3 次（不含主班/监控/支持/大夜）
                    if (isLimitedPosition(pos) && (this.positionCounters[cand][pos] || 0) >= 3) continue;

                    // 若为主班席位，检查主班配额
                    if (pos === '主班') {
                        if (!mainPeople.includes(cand)) continue;
                        if ((mainQuotaRemaining[cand] || 0) <= 0) continue;
                    }

                    // 分配
                    dayData.nightShift[pos] = cand;
                    this.positionCounters[cand][pos] = (this.positionCounters[cand][pos] || 0) + 1;
                    assignedCounts[cand].night = (assignedCounts[cand].night || 0) + 1;
                    // 消耗夜班配额
                    nightQuotaRemaining[cand] = Math.max(0, (nightQuotaRemaining[cand] || 0) - 1);
                    // 消耗主班配额（如果适用）
                    if (pos === '主班' && mainQuotaRemaining[cand]) mainQuotaRemaining[cand] = Math.max(0, mainQuotaRemaining[cand] - 1);
                    refreshTotals();

                    // 映射次日早班：若受阻则仅预留，避免次日误排白班
                    if (nextIdx < days) {
                        const nextDayData = this.schedule[nextIdx];
                        const mappingBlocked = !canAssignNightSeat(day, pos) ||
                            this._isPersonFixedOnDay(cand, nextIdx + 1) ||
                            isPersonSpecialOnDay(this, nextIdx, cand);
                        if (!mappingBlocked) {
                            nextDayData.dayShift[pos] = cand; // 覆盖非固定映射
                            nextDayData.dayShift[`__morning__${pos}`] = true;
                            // 映射不应消耗白班配额（早班不计入白班）
                            this.positionCounters[cand][pos] = (this.positionCounters[cand][pos] || 0) + 1;
                            refreshTotals();
                        } else {
                            nextDayData.dayShift[`__night_reserved__${pos}`] = true;
                        }
                    }

                    assignedToday.add(cand);
                    break;
                }
                });
            };

            // 先排主班/大夜一/大夜二
            applyNightPositions(priorityNightPositions);
            // 再排其它夜班
            applyNightPositions(orderedNightPositions.filter(p => !priorityNightPositions.includes(p)));
            // 强制补齐夜班席位（避免漏班）
            fillRemainingNightSlots(day, availableForNight, assignedToday);

            // 日终推进 cycleIndex
            this.people.forEach(p => {
                personCycleIndex[p.name] = (personCycleIndex[p.name] + 1) % baseCycle.length;
            });
        }

        // ===== 夜班分配后：使用回溯搜索确保“具备大夜资质者至少 1 个大夜”（可行则严格满足） =====
        const recomputeBigCounts = () => {
            const mm = {};
            this.people.forEach(p => mm[p.name] = 0);
            for (let d = 0; d < days; d++) {
                const sd = this.schedule[d] || { nightShift: {} };
                Object.entries(sd.nightShift || {}).forEach(([k, v]) => {
                    if (!v) return;
                    if (['大夜一','大夜二'].includes(k)) mm[v] = (mm[v] || 0) + 1;
                });
            }
            return mm;
        };

        const isQualifiedForBig = (name) => {
            const p = this.people.find(pp => pp.name === name);
            return p && (p.qualifications || []).some(q =>
                (q === '大夜一' && isPositionAllowedForPerson(name, '大夜一', 'night')) ||
                (q === '大夜二' && isPositionAllowedForPerson(name, '大夜二', 'night'))
            );
        };

        const canDonate = (donor, bigCounts) => {
            // 若捐赠者具备大夜资质，则至少保留 1 个大夜
            if (isQualifiedForBig(donor)) return (bigCounts[donor] || 0) >= 2;
            // 非资质人员若被分到大夜（理论上不应发生），可全部捐出
            return (bigCounts[donor] || 0) >= 1;
        };

        const isNeedyFreeOnDay = (name, dayIndex) => {
            if (this._isPersonFixedOnDay(name, dayIndex + 1)) return false;
            const dayData = this.schedule[dayIndex] || { dayShift: {}, nightShift: {} };
            if (Object.values(dayData.dayShift || {}).some(v => v === name)) return false;
            if (Object.values(dayData.nightShift || {}).some(v => v === name)) return false;
            return true;
        };

        const updateMorningMappingAfterSwap = (dayIndex, pos, oldPerson, newPerson) => {
            const nextIdx = dayIndex + 1;
            if (nextIdx >= days) return;
            const nextDay = this.schedule[nextIdx] || { dayShift: {} };
            if (!nextDay.dayShift) nextDay.dayShift = {};
            const flagKey = `__morning__${pos}`;
            const shouldMap = canMapToNextDayForPerson(dayIndex, pos, newPerson);
            if (shouldMap) {
                nextDay.dayShift[pos] = newPerson;
                nextDay.dayShift[flagKey] = true;
                delete nextDay.dayShift[`__night_reserved__${pos}`];
                return;
            }
            if (nextDay.dayShift[flagKey]) {
                if (nextDay.dayShift[pos] === oldPerson || nextDay.dayShift[pos] === newPerson) {
                    delete nextDay.dayShift[pos];
                }
                delete nextDay.dayShift[flagKey];
            }
            nextDay.dayShift[`__night_reserved__${pos}`] = true;
        };

        let bigCounts = recomputeBigCounts();
        const needList = qualifiedForBigNight.filter(n => (bigCounts[n] || 0) === 0);
        if (needList.length > 0 && totalNightSlotsFinal >= numQualified) {
            // 收集所有大夜槽位（dayIndex + pos），用于构建匹配
            const slots = [];
            for (let d = startDay; d < days; d++) {
                const sd = this.schedule[d] || { nightShift: {} };
                ['大夜一', '大夜二'].forEach(pos => {
                    if (!sd.nightShift || !sd.nightShift[pos]) return;
                    slots.push({ dayIndex: d, pos });
                });
            }

            const slotKey = (s) => `${s.dayIndex}:${s.pos}`;
            const slotMap = {};
            slots.forEach(s => { slotMap[slotKey(s)] = s; });

            // 为每个具备资质的人构建可选槽位（该日空闲、具备该席位资质）
            const personOptions = {};
            qualifiedForBigNight.forEach(name => {
                const quals = this.people.find(p => p.name === name)?.qualifications || [];
                const opts = [];
                slots.forEach(s => {
                    if (!quals.includes(s.pos)) return;
                    if (!isPositionAllowedForPerson(name, s.pos, 'night')) return;
                    if (!isNeedyFreeOnDay(name, s.dayIndex)) return;
                    if (!canMapToNextDayForPerson(s.dayIndex, s.pos, name)) return;
                    opts.push(slotKey(s));
                });
                personOptions[name] = opts;
            });

            // 二分匹配（Kuhn）: 为每个具备资质的人分配一个大夜槽位
            const matchSlotToPerson = {};
            const matchPersonToSlot = {};

            const dfsMatch = (person, visited) => {
                const opts = personOptions[person] || [];
                for (let i = 0; i < opts.length; i++) {
                    const sk = opts[i];
                    if (visited.has(sk)) continue;
                    visited.add(sk);
                    if (!matchSlotToPerson[sk] || dfsMatch(matchSlotToPerson[sk], visited)) {
                        matchSlotToPerson[sk] = person;
                        matchPersonToSlot[person] = sk;
                        return true;
                    }
                }
                return false;
            };

            let allMatched = true;
            for (let i = 0; i < qualifiedForBigNight.length; i++) {
                const person = qualifiedForBigNight[i];
                const visited = new Set();
                if (!dfsMatch(person, visited)) {
                    allMatched = false;
                    break;
                }
            }

            if (allMatched) {
                // 应用匹配：更新夜班大夜席位分配
                Object.entries(matchSlotToPerson).forEach(([sk, person]) => {
                    const s = slotMap[sk];
                    if (!s) return;
                    const prevOcc = this.schedule[s.dayIndex].nightShift[s.pos];
                    if (prevOcc === person) return;
                    if (!canMapToNextDayForPerson(s.dayIndex, s.pos, person)) return;
                    this.schedule[s.dayIndex].nightShift[s.pos] = person;
                    updateMorningMappingAfterSwap(s.dayIndex, s.pos, prevOcc, person);
                });

                // 重新计算大夜计数并同步 positionCounters
                this.people.forEach(p => {
                    if (!this.positionCounters[p.name]) this.positionCounters[p.name] = {};
                    this.positionCounters[p.name]['大夜一'] = 0;
                    this.positionCounters[p.name]['大夜二'] = 0;
                });
                for (let d = 0; d < days; d++) {
                    const sd = this.schedule[d] || { nightShift: {} };
                    ['大夜一', '大夜二'].forEach(pos => {
                        const occ = sd.nightShift && sd.nightShift[pos];
                        if (!occ) return;
                        if (!this.positionCounters[occ]) this.positionCounters[occ] = {};
                        this.positionCounters[occ][pos] = (this.positionCounters[occ][pos] || 0) + 1;
                    });
                }
            }
        }

        // ===== 工作量目标计算 + 夜班再平衡（夜=2白） =====
        // 重新计算夜班计数（可能在匹配阶段发生变动）
        this.people.forEach(p => { assignedCounts[p.name].night = 0; });
        for (let d = 0; d < days; d++) {
            const sd = this.schedule[d] || { nightShift: {} };
            Object.entries(sd.nightShift || {}).forEach(([k, v]) => {
                if (!v) return;
                if (!peopleNamesSet.has(v)) return;
                assignedCounts[v].night = (assignedCounts[v].night || 0) + 1;
            });
        }

        // 统计映射早班数量（仅排班日），用于计算白班总槽位
        let mappedCount = 0;
        for (let d = startDay; d < days; d++) {
            const sd = this.schedule[d] || { dayShift: {} };
            Object.keys(sd.dayShift || {}).forEach(k => {
                if (k.startsWith('__morning__') && sd.dayShift[k]) mappedCount++;
            });
        }

        const scheduleDaysCount = Math.max(0, days - startDay);
        const totalWhiteSlotsFinal = (this.whitePositions.length * scheduleDaysCount) - mappedCount;
        const assignedWhiteTotal = this.people.reduce((s, p) => s + (assignedCounts[p.name]?.white || 0), 0);
        const remainingWhiteSlotsPre = Math.max(0, totalWhiteSlotsFinal - assignedWhiteTotal);
        const totalNightSlotsForWork = totalNightSlotsFinal; // 排班日夜班槽总数
        const totalWorkUnitsFinal = totalWhiteSlotsFinal + 2 * totalNightSlotsForWork;
        const totalCredits = this.people.reduce((s, p) => s + (deductionCredits[p.name] || 0), 0);
        const workTargetBase = Math.floor((totalWorkUnitsFinal + totalCredits) / Math.max(1, numPeople));
        let workRemainder = (totalWorkUnitsFinal + totalCredits) - workTargetBase * Math.max(1, numPeople);

        const workTargetMap = {};
        const workQuotaRemaining = {};
        const peopleOrder2 = this.people.map(p => p.name).sort(() => Math.random() - 0.5);
        const extraWhitePeople = [];
        peopleOrder2.forEach(name => {
            let target = workTargetBase;
            if (workRemainder > 0) {
                target++;
                workRemainder--;
                extraWhitePeople.push(name);
            }
            workTargetMap[name] = target;
            const currentWork = getWorkScore(name);
            workQuotaRemaining[name] = Math.max(0, target - currentWork);
        });

        // 记录需要“多一个白”的人员，用于生成结束时弹窗提示
        this.extraWhitePeople = extraWhitePeople;

        // 夜班再平衡：把夜班从工作量过高者调整给工作量不足者（保持大夜≥1约束）
        const recomputeBigCountsLocal = () => {
            const mm = {};
            this.people.forEach(p => mm[p.name] = 0);
            for (let d = 0; d < days; d++) {
                const sd = this.schedule[d] || { nightShift: {} };
                ['大夜一', '大夜二'].forEach(pos => {
                    const occ = sd.nightShift && sd.nightShift[pos];
                    if (!occ) return;
                    mm[occ] = (mm[occ] || 0) + 1;
                });
            }
            return mm;
        };
        let bigCountsLocal = recomputeBigCountsLocal();

        let improved = true;
        let guard = 0;
        while (improved && guard < 300) {
            guard++;
            improved = false;
            // 找到当前工作量最大与最小的人
            let maxPerson = null, minPerson = null;
            let maxWork = -Infinity, minWork = Infinity;
            this.people.forEach(p => {
                const w = getWorkScore(p.name);
                if (w > maxWork) { maxWork = w; maxPerson = p.name; }
                if (w < minWork) { minWork = w; minPerson = p.name; }
            });
            if (!maxPerson || !minPerson) break;
            // 若差距已在 1 以内则停止
            if (maxWork - minWork <= 1) break;

            // 尝试把 maxPerson 的某个夜班移给 minPerson
            for (let d = startDay; d < days && !improved; d++) {
                const sd = this.schedule[d] || { nightShift: {} };
                for (const pos of this.nightPositions) {
                    const occ = sd.nightShift && sd.nightShift[pos];
                    if (occ !== maxPerson) continue;
                    const minQuals = this.people.find(p => p.name === minPerson)?.qualifications || [];
                    if (!minQuals.includes(pos)) continue;
                    if (!isPositionAllowedForPerson(minPerson, pos, 'night')) continue;
                    if (!isNeedyFreeOnDay(minPerson, d)) continue;
                    if (!canMapToNextDayForPerson(d, pos, minPerson)) continue;
                    // 大夜约束：若转移大夜会导致 maxPerson 的大夜为0且其具备资质，则跳过
                    if (['大夜一', '大夜二'].includes(pos) && isQualifiedForBig(maxPerson)) {
                        if ((bigCountsLocal[maxPerson] || 0) <= 1) continue;
                    }
                    // 工作量目标约束：尽量不让 minPerson 超出目标+1
                    const minWork = getWorkScore(minPerson);
                    if (minWork + 2 > (workTargetMap[minPerson] || 0) + 1) continue;

                    // 执行转移
                    sd.nightShift[pos] = minPerson;
                    updateMorningMappingAfterSwap(d, pos, maxPerson, minPerson);
                    assignedCounts[maxPerson].night = Math.max(0, (assignedCounts[maxPerson].night || 1) - 1);
                    assignedCounts[minPerson].night = (assignedCounts[minPerson].night || 0) + 1;
                    if (['大夜一','大夜二'].includes(pos)) {
                        bigCountsLocal[maxPerson] = Math.max(0, (bigCountsLocal[maxPerson] || 1) - 1);
                        bigCountsLocal[minPerson] = (bigCountsLocal[minPerson] || 0) + 1;
                    }
                    improved = true;
                    break;
                }
            }
        }

        // ========== 第二阶段：均衡分配白班（不包含由夜班映射的早班），按夜=2白的工作量原则 ==========
        // 计算每人当前的白班计数（不含映射的早班）
        const currentWhiteCounts = {};
        this.people.forEach(p => currentWhiteCounts[p.name] = 0);
        for (let d = 0; d < days; d++) {
            const sd = this.schedule[d] || { dayShift: {}, nightShift: {} };
            Object.entries(sd.dayShift || {}).forEach(([k, v]) => {
                if (!v) return;
                if (k.startsWith('__morning__')) return;
                // 如果是席位并且不是由早班映射的，则计入白班
                const morningFlag = sd.dayShift[`__morning__${k}`];
                if (!morningFlag && this.people.find(p => p.name === v)) {
                    currentWhiteCounts[v] = (currentWhiteCounts[v] || 0) + 1;
                }
            });
        }

        // 统计剩余需要分配的白班席位（不包含已固定和被映射占用的）
        let remainingWhiteSlots = 0;
        for (let d = 0; d < days; d++) {
            const sd = this.schedule[d] || { dayShift: {}, nightShift: {} };
            this.whitePositions.forEach(pos => {
                // 已有人或被早班映射占用则跳过
                if (sd.dayShift && sd.dayShift[pos]) return;
                // 如果存在映射标记也跳过（虽然通常映射会写入 dayShift[pos])
                if (sd.dayShift && sd.dayShift[`__morning__${pos}`]) return;
                remainingWhiteSlots++;
            });
        }

    // totalWhiteSlotsFinal 已在夜班再平衡阶段计算

        const hasPrevNightForPos = (dayIndex, pos) => {
            const prevIdx = dayIndex - 1;
            if (prevIdx < 0) return false;
            const prevData = this.schedule[prevIdx] || { nightShift: {} };
            return !!(prevData.nightShift && prevData.nightShift[pos]);
        };

        // 第二阶段按天分配白班（使用第一阶段记录的 availableForDayByIndex）
        for (let day = startDay; day < days; day++) {
            const dayNum = day + 1;
            const dayData = this.schedule[day];
            const availableForDay = availableForDayByIndex[day] || new Set();
            const assignedToday = new Set();

            // 为每个白班席位选择候选
            orderedWhitePositions.forEach(pos => {
                if (dayData.dayShift && dayData.dayShift[pos]) return; // 已经有人（含映射）
                if (dayData.dayShift && dayData.dayShift[`__morning__${pos}`]) return; // 早班映射占位
                if (dayData.dayShift && dayData.dayShift[`__night_reserved__${pos}`]) return; // 夜班预留占位
                if (hasSpecialSeatConflictOnDay(this, day, pos)) return; // 当天特殊席位冲突则不排白班
                if (isMorningBlockedByPrevNight(day, pos)) return; // 前一夜席位特殊 -> 次日早班不排
                if (hasPrevNightForPos(day, pos)) return; // 前一日夜班占用 -> 早班仅由夜班映射生成

                // 找出可用且有资质的人
                const qualified = Array.from(availableForDay).filter(name => {
                    if (assignedToday.has(name)) return false;
                    if (hadNightPreviousDay(this, day, name)) return false;
                    if (missedExpectedNightPrevDay(this, day, name)) return false;
                    // 规则：设置了特殊班次的人员当天不参与自动排班
                    if (isPersonSpecialOnDay(this, day, name)) return false;
                    const person = this.people.find(p => p.name === name);
                    if (!person) return false;
                    return person.qualifications.includes(pos) && isPositionAllowedForPerson(name, pos, 'day');
                });
                if (qualified.length === 0) return;

                qualified.sort((a,b) => {
                    if (pos === '支持') {
                        const pr = compareSupportPriority(a, b);
                        if (pr !== 0) return pr;
                    }
                    const wa = getWorkScore(a), wb = getWorkScore(b);
                    if (wa !== wb) return wa - wb;
                    if (pos === '主班') {
                        const aCnt = (this.positionCounters[a] && this.positionCounters[a]['主班']) || 0;
                        const bCnt = (this.positionCounters[b] && this.positionCounters[b]['主班']) || 0;
                        if (aCnt !== bCnt) return aCnt - bCnt;
                        const aIdx0 = (this.people.find(p => p.name === a)?.qualifications[0] === '主班');
                        const bIdx0 = (this.people.find(p => p.name === b)?.qualifications[0] === '主班');
                        if (aIdx0 !== bIdx0) return aIdx0 ? -1 : 1;
                    }
                    if (isRandomPosition(pos)) {
                        return Math.random() - 0.5;
                    }
                    const pa = (this.people.find(p => p.name === a)?.qualifications.indexOf(pos));
                    const pb = (this.people.find(p => p.name === b)?.qualifications.indexOf(pos));
                    const ia = (pa >= 0 ? pa : 1e6);
                    const ib = (pb >= 0 ? pb : 1e6);
                    return ia - ib;
                });

                // 选择满足工作量配额与主班配额（若主班）的候选人
                let chosen = null;
                for (let qi = 0; qi < qualified.length; qi++) {
                    const cand = qualified[qi];
                    if ((workQuotaRemaining[cand] || 0) < 1) continue; // 工作量配额不足则跳过
                    if (isLimitedPosition(pos) && (this.positionCounters[cand][pos] || 0) >= 3) continue;
                    if (pos === '主班') {
                        if (!mainPeople.includes(cand)) continue;
                        if ((mainQuotaRemaining[cand] || 0) <= 0) continue;
                    }
                    chosen = cand;
                    break;
                }
                // 若都不满足配额，允许最小超额（按工作量最低者）
                if (!chosen && qualified.length > 0) {
                    chosen = qualified[0];
                }
                if (!chosen) return;

                // 分配
                dayData.dayShift[pos] = chosen;
                assignedToday.add(chosen);
                this.positionCounters[chosen][pos] = (this.positionCounters[chosen][pos] || 0) + 1;
                assignedCounts[chosen].white = (assignedCounts[chosen].white || 0) + 1;
                // 消耗白班与主班配额
                workQuotaRemaining[chosen] = Math.max(0, (workQuotaRemaining[chosen] || 0) - 1);
                if (pos === '主班' && mainQuotaRemaining[chosen]) mainQuotaRemaining[chosen] = Math.max(0, mainQuotaRemaining[chosen] - 1);
                refreshTotals();
            });
        }

        return this.schedule;
    }

    // === 辅助：初始化计数器 ===
    _initPositionCounters() {
        this.positionCounters = {};
        this.people.forEach(p => {
            this.positionCounters[p.name] = {};
            this.whitePositions.concat(['大夜一','大夜二']).forEach(pos => {
                this.positionCounters[p.name][pos] = 0;
            });
        });
        // Count existing fixed assignments written into schedule (from fixedDays)
        for (let d = 0; d < this.schedule.length; d++) {
            const dayData = this.schedule[d] || { dayShift: {}, nightShift: {} };
            Object.entries(dayData.dayShift || {}).forEach(([k, v]) => {
                // if k is a position name and value is a person name, increment
                if (this.whitePositions.concat(['主班','监控','支持','B11','B12','B13','B16','B18']).includes(k) && typeof v === 'string') {
                    if (this.positionCounters[v]) this.positionCounters[v][k] = (this.positionCounters[v][k] || 0) + 1;
                }
            });
            Object.entries(dayData.nightShift || {}).forEach(([k, v]) => {
                if ((this.whitePositions.concat(['大夜一','大夜二']).includes(k) || ['大夜一','大夜二'].includes(k)) && typeof v === 'string') {
                    if (this.positionCounters[v]) this.positionCounters[v][k] = (this.positionCounters[v][k] || 0) + 1;
                }
            });
        }
    }

    // 判断某人该天是否已有固定标记（特殊事件或被手工分配）
    _isPersonFixedOnDay(personName, day) {
        const idx = day - 1;
        if (idx < 0 || idx >= this.schedule.length) return false;
        const s = this.schedule[idx];
        // person key exists (特殊事件)
        if (Object.prototype.hasOwnProperty.call(s.dayShift, personName) || Object.prototype.hasOwnProperty.call(s.nightShift, personName)) return true;
        // or person appears as a value in any position
        if (Object.values(s.dayShift).some(v => v === personName)) return true;
        if (Object.values(s.nightShift).some(v => v === personName)) return true;
        return false;
    }

    // 根据 day 判断该日应属于白/夜/早/休 循环中的哪种（用于写 fixedDays 时的默认判断）
    _getShiftTypeForDay(day) {
        const start = (this.config && this.config.startDay) ? this.config.startDay : 1;
        const offset = ((day - start) >= 0) ? (day - start) : 0;
        const idx = offset % 3; // white, night, rest (we map morning to white for fixed-day context)
        if (idx === 0) return 'white';
        if (idx === 1) return 'night';
        return 'white';
    }

    // 为某一天和班别分配具体席位（positions 数组），优先使用已有的 '待分配' 人员列表，并根据资格与最少计数原则选择
    _assignPositionsForDay(dayIndex, shiftKey, positions) {
        const dayData = this.schedule[dayIndex];
        const shiftMap = dayData[shiftKey];

        // collect candidates: those marked '待分配' under this shiftKey
        const candidates = Object.keys(shiftMap).filter(k => shiftMap[k] === '待分配');

        // For each position, if already assigned (fixed) skip
        positions.forEach(pos => {
            if (shiftMap[pos]) return; // fixed or already assigned

            // find qualified candidates who have qualification and are not assigned to another position today
            const qualified = candidates.filter(name => {
                const person = this.people.find(p => p.name === name);
                if (!person) return false;
                if (shiftKey === 'dayShift' && hadNightPreviousDay(this, dayIndex, name)) return false;
                if (shiftKey === 'dayShift' && missedExpectedNightPrevDay(this, dayIndex, name)) return false;
                if (!person.qualifications.includes(pos)) return false;
                if (!isPositionAllowedForPerson(name, pos, shiftKey === 'nightShift' ? 'night' : 'day')) return false;
                // ensure not already assigned to different position today
                if (Object.values(shiftMap).some(v => v === name)) return false;
                return true;
            });

            if (qualified.length === 0) return;

            // choose the person with minimal count for this position
            qualified.sort((a,b) => {
                if (pos === '支持') {
                    const pr = compareSupportPriority(a, b);
                    if (pr !== 0) return pr;
                }
                const ca = (this.positionCounters[a][pos] || 0), cb = (this.positionCounters[b][pos] || 0);
                if (ca !== cb) return ca - cb;

                if (pos === '主班') {
                    const aCnt = (this.positionCounters[a] && this.positionCounters[a]['主班']) || 0;
                    const bCnt = (this.positionCounters[b] && this.positionCounters[b]['主班']) || 0;
                    if (aCnt !== bCnt) return aCnt - bCnt;
                    const aIdx0 = (this.people.find(p => p.name === a)?.qualifications[0] === '主班');
                    const bIdx0 = (this.people.find(p => p.name === b)?.qualifications[0] === '主班');
                    if (aIdx0 !== bIdx0) return aIdx0 ? -1 : 1;
                }

                const pa = (this.people.find(p => p.name === a)?.qualifications.indexOf(pos));
                const pb = (this.people.find(p => p.name === b)?.qualifications.indexOf(pos));
                const ia = (pa >= 0 ? pa : 1e6);
                const ib = (pb >= 0 ? pb : 1e6);
                    // add small random tie-breaker to vary generations
                    const rnd = Math.random() - 0.5;
                    if (ia !== ib) return ia - ib;
                    return rnd < 0 ? -1 : 1;
            });
            const chosen = qualified[0];
            // assign
            shiftMap[pos] = chosen;
            // remove candidate
            const idx = candidates.indexOf(chosen); if (idx >= 0) candidates.splice(idx,1);
            // increment counter
            this.positionCounters[chosen][pos] = (this.positionCounters[chosen][pos] || 0) + 1;
            // remove placeholder entry keyed by person
            if (shiftMap[chosen]) delete shiftMap[chosen];
        });
    }
}


// 临时拖放高亮（不会覆盖持久选择）
let currentDragHighlight = { header: null, left: null };
function addDragHighlight(cell) {
    // 清除前一次临时高亮
    removeDragHighlight();
    const person = cell.dataset.person;
    const date = cell.dataset.date;
    if (date) {
        const d = parseInt(date.split('-')[2], 10);
        const header = document.querySelector(`#scheduleHeader div[data-day='${d}']`);
        if (header) {
            header.classList.add('highlight-top');
            currentDragHighlight.header = header;
        }
    }
    if (person) {
        const left = Array.from(document.querySelectorAll('.schedule-body .person-name')).find(n => n.dataset.person === person);
        if (left) {
            left.classList.add('highlight-left');
            currentDragHighlight.left = left;
        }
    }
}

function removeDragHighlight() {
    if (currentDragHighlight.header) {
        currentDragHighlight.header.classList.remove('highlight-top');
        currentDragHighlight.header = null;
    }
    if (currentDragHighlight.left) {
        currentDragHighlight.left.classList.remove('highlight-left');
        currentDragHighlight.left = null;
    }
}

// 清除单元格内容并在 scheduler 中移除相应标记
function clearCell(cell) {
    if (!cell) return;
    cell.className = 'schedule-cell';
    cell.textContent = '';
    const sched = window.schedulerInstance;
    if (!sched || !cell.dataset.date || !cell.dataset.person) return;
    const parts = cell.dataset.date.split('-');
    const day = parseInt(parts[2], 10);
    const idx = day - 1;
    if (sched.schedule[idx]) {
        // 删除 person 相关的 entries
        delete sched.schedule[idx].dayShift[cell.dataset.person];
        delete sched.schedule[idx].nightShift[cell.dataset.person];
        // 如果在 position->person 中找到该 person，也删除
        Object.keys(sched.schedule[idx].dayShift || {}).forEach(k => {
            if (sched.schedule[idx].dayShift[k] === cell.dataset.person) delete sched.schedule[idx].dayShift[k];
            // 同时删除与该席位相关的早班映射标记
            const morningKey = `__morning__${k}`;
            if (sched.schedule[idx].dayShift && sched.schedule[idx].dayShift[morningKey]) delete sched.schedule[idx].dayShift[morningKey];
        });
        Object.keys(sched.schedule[idx].nightShift || {}).forEach(k => {
            if (sched.schedule[idx].nightShift[k] === cell.dataset.person) delete sched.schedule[idx].nightShift[k];
        });
    }

    removeFixedCacheValue(cell);

    refreshTotalRow();
}

function getFixedCacheValue(person, day) {
    if (!fixedDaysByPersonCache[person]) return null;
    return fixedDaysByPersonCache[person][day] || null;
}

function setFixedCacheValue(cell, shift) {
    const person = cell.dataset.person;
    const date = cell.dataset.date;
    if (!person || !date) return;
    const day = parseInt(date.split('-')[2], 10);
    if (!fixedDaysByPersonCache[person]) fixedDaysByPersonCache[person] = {};
    fixedDaysByPersonCache[person][day] = shift;
    cell.classList.add('fixed-cell');
}

function removeFixedCacheValue(cell) {
    const person = cell.dataset.person;
    const date = cell.dataset.date;
    if (!person || !date) return;
    const day = parseInt(date.split('-')[2], 10);
    if (fixedDaysByPersonCache[person]) {
        delete fixedDaysByPersonCache[person][day];
    }
    cell.classList.remove('fixed-cell');
}

function syncFixedCacheFromSchedule(cell, sched) {
    if (!cell || !sched) return;
    const info = getCellShiftInfo(cell, sched);
    if (info) {
        const shift = info.isSeat ? info.key : info.value;
        setFixedCacheValue(cell, shift);
    } else {
        removeFixedCacheValue(cell);
    }
}

function isFixedSeatOnDay(pos, day) {
    for (const person of Object.keys(fixedDaysByPersonCache)) {
        const map = fixedDaysByPersonCache[person];
        if (map && map[day] === pos) return true;
    }
    return false;
}

// 连续填充功能已移除，保留拖动/复制（move/copy）功能