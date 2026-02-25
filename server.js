const express = require('express');
const path = require('path');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname)));

const pool = mysql.createPool({
	host: process.env.MYSQL_HOST || 'localhost',
	port: process.env.MYSQL_PORT ? Number(process.env.MYSQL_PORT) : 3306,
	user: process.env.MYSQL_USER || 'root',
	password: process.env.MYSQL_PASSWORD || '',
	database: process.env.MYSQL_DATABASE || 'dqs_schedule',
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0
});

async function ensureTables() {
	const scheduleSql = `
		CREATE TABLE IF NOT EXISTS schedules (
			id INT AUTO_INCREMENT PRIMARY KEY,
			team VARCHAR(64) NOT NULL,
			year INT NOT NULL,
			month INT NOT NULL,
			schedule_json LONGTEXT NOT NULL,
			created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
			UNIQUE KEY uniq_team_year_month (team, year, month)
		) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
	`;
	const archiveSql = `
		CREATE TABLE IF NOT EXISTS archives (
			id INT AUTO_INCREMENT PRIMARY KEY,
			team VARCHAR(64) NOT NULL,
			year INT NOT NULL,
			month INT NOT NULL,
			day INT NOT NULL,
			person VARCHAR(64) NOT NULL,
			shift_type ENUM('day', 'night') NOT NULL,
			seat_category ENUM('position', 'event') NOT NULL,
			seat_name VARCHAR(64) DEFAULT NULL,
			shift_value VARCHAR(64) NOT NULL,
			bgcolor VARCHAR(16) DEFAULT NULL,
			fgcolor VARCHAR(16) DEFAULT NULL,
			created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			INDEX idx_archive_team_year_month (team, year, month),
			INDEX idx_archive_person (person)
		) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
	`;
	const leaveSql = `
		CREATE TABLE IF NOT EXISTS leave_records (
			id INT AUTO_INCREMENT PRIMARY KEY,
			team VARCHAR(64) NOT NULL,
			year INT NOT NULL,
			person VARCHAR(64) NOT NULL,
			annual_quota INT NOT NULL DEFAULT 0,
			childcare_quota INT NOT NULL DEFAULT 0,
			created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
			UNIQUE KEY uniq_leave_team_year_person (team, year, person)
		) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
	`;
	const holidaySql = `
		CREATE TABLE IF NOT EXISTS holiday_calendar (
			id INT AUTO_INCREMENT PRIMARY KEY,
			year INT NOT NULL,
			label VARCHAR(64) NOT NULL,
			month INT NOT NULL,
			day INT NOT NULL,
			created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
			UNIQUE KEY uniq_holiday_year_label_day (year, label, month, day)
		) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
	`;
	await pool.query(scheduleSql);
	await pool.query(archiveSql);
	await pool.query(leaveSql);
	await pool.query(holidaySql);
}

app.get('/api/health', (req, res) => {
	res.json({ status: 'ok' });
});

app.get('/api/schedules', async (req, res) => {
	try {
		const team = String(req.query.team || '').trim();
		const year = Number(req.query.year);
		const month = Number(req.query.month);
		if (!team || !year || !month) {
			return res.status(400).json({ error: '缺少 team/year/month 参数' });
		}
		const [rows] = await pool.execute(
			'SELECT schedule_json FROM schedules WHERE team = ? AND year = ? AND month = ? LIMIT 1',
			[team, year, month]
		);
		if (!rows || rows.length === 0) {
			return res.status(404).json({ error: '未找到排班记录' });
		}
		const schedule = JSON.parse(rows[0].schedule_json);
		return res.json({ team, year, month, schedule });
	} catch (err) {
		console.error('GET /api/schedules error', err);
		return res.status(500).json({ error: '服务器错误' });
	}
});

app.post('/api/schedules', async (req, res) => {
	try {
		const { team, year, month, schedule } = req.body || {};
		if (!team || !year || !month || !schedule) {
			return res.status(400).json({ error: '缺少排班数据' });
		}
		const scheduleJson = JSON.stringify(schedule);
		await pool.execute(
			`INSERT INTO schedules (team, year, month, schedule_json)
			 VALUES (?, ?, ?, ?)
			 ON DUPLICATE KEY UPDATE schedule_json = VALUES(schedule_json)`,
			[team, year, month, scheduleJson]
		);
		return res.json({ ok: true });
	} catch (err) {
		console.error('POST /api/schedules error', err);
		return res.status(500).json({ error: '服务器错误' });
	}
});

app.delete('/api/schedules', async (req, res) => {
	try {
		const team = String(req.query.team || '').trim();
		const year = Number(req.query.year);
		const month = Number(req.query.month);
		if (!team || !year || !month) {
			return res.status(400).json({ error: '缺少 team/year/month 参数' });
		}
		await pool.execute(
			'DELETE FROM schedules WHERE team = ? AND year = ? AND month = ?',
			[team, year, month]
		);
		return res.json({ ok: true });
	} catch (err) {
		console.error('DELETE /api/schedules error', err);
		return res.status(500).json({ error: '服务器错误' });
	}
});

app.get('/api/archives', async (req, res) => {
	try {
		const team = String(req.query.team || '').trim();
		const year = Number(req.query.year);
		const month = Number(req.query.month);
		if (!team || !year || !month) {
			return res.status(400).json({ error: '缺少 team/year/month 参数' });
		}
		const [rows] = await pool.execute(
			`SELECT day, person, shift_type, seat_category, seat_name, shift_value, bgcolor, fgcolor
			 FROM archives WHERE team = ? AND year = ? AND month = ? ORDER BY day, person`,
			[team, year, month]
		);
		if (!rows || rows.length === 0) {
			return res.status(404).json({ error: '未找到归档记录' });
		}
		return res.json({ team, year, month, entries: rows });
	} catch (err) {
		console.error('GET /api/archives error', err);
		return res.status(500).json({ error: '服务器错误' });
	}
});

app.get('/api/archives/summary', async (req, res) => {
	try {
		const team = String(req.query.team || '').trim();
		const year = Number(req.query.year);
		if (!team || !year) {
			return res.status(400).json({ error: '缺少 team/year 参数' });
		}
		const [rows] = await pool.execute(
			`SELECT DISTINCT month FROM archives WHERE team = ? AND year = ? ORDER BY month DESC`,
			[team, year]
		);
		return res.json({ team, year, months: rows.map(r => r.month) });
	} catch (err) {
		console.error('GET /api/archives/summary error', err);
		return res.status(500).json({ error: '服务器错误' });
	}
});

app.post('/api/archives', async (req, res) => {
	try {
		const { team, year, month, entries } = req.body || {};
		if (!team || !year || !month || !Array.isArray(entries)) {
			return res.status(400).json({ error: '缺少归档数据' });
		}
		const conn = await pool.getConnection();
		try {
			await conn.beginTransaction();
			await conn.execute(
				'DELETE FROM archives WHERE team = ? AND year = ? AND month = ?',
				[team, year, month]
			);
			const chunkSize = 500;
			for (let i = 0; i < entries.length; i += chunkSize) {
				const chunk = entries.slice(i, i + chunkSize);
				const values = chunk.map(item => [
					team,
					year,
					month,
					item.day,
					item.person,
					item.shift_type,
					item.seat_category,
					item.seat_name || null,
					item.shift_value,
					item.bgcolor || null,
					item.fgcolor || null
				]);
				await conn.query(
					`INSERT INTO archives (team, year, month, day, person, shift_type, seat_category, seat_name, shift_value, bgcolor, fgcolor)
					 VALUES ?`,
					[values]
				);
			}
			await conn.commit();
			return res.json({ ok: true });
		} catch (err) {
			await conn.rollback();
			throw err;
		} finally {
			conn.release();
		}
	} catch (err) {
		console.error('POST /api/archives error', err);
		return res.status(500).json({ error: '服务器错误' });
	}
});

app.delete('/api/archives', async (req, res) => {
	try {
		const team = String(req.query.team || '').trim();
		const year = Number(req.query.year);
		const month = Number(req.query.month);
		if (!team || !year || !month) {
			return res.status(400).json({ error: '缺少 team/year/month 参数' });
		}
		await pool.execute(
			'DELETE FROM archives WHERE team = ? AND year = ? AND month = ?',
			[team, year, month]
		);
		return res.json({ ok: true });
	} catch (err) {
		console.error('DELETE /api/archives error', err);
		return res.status(500).json({ error: '服务器错误' });
	}
});

app.get('/api/leave-records', async (req, res) => {
	try {
		const team = String(req.query.team || '').trim();
		const year = Number(req.query.year);
		if (!team || !year) {
			return res.status(400).json({ error: '缺少 team/year 参数' });
		}
		const [rows] = await pool.execute(
			`SELECT person, annual_quota, childcare_quota
			 FROM leave_records WHERE team = ? AND year = ? ORDER BY person`,
			[team, year]
		);
		return res.json({ team, year, records: rows });
	} catch (err) {
		console.error('GET /api/leave-records error', err);
		return res.status(500).json({ error: '服务器错误' });
	}
});

app.post('/api/leave-records', async (req, res) => {
	try {
		const { team, year, records } = req.body || {};
		if (!team || !year || !Array.isArray(records)) {
			return res.status(400).json({ error: '缺少休假数据' });
		}
		if (records.length === 0) {
			return res.json({ ok: true });
		}
		const values = records.map(item => [
			team,
			year,
			item.person,
			Number(item.annual_quota) || 0,
			Number(item.childcare_quota) || 0
		]);
		await pool.query(
			`INSERT INTO leave_records (team, year, person, annual_quota, childcare_quota)
			 VALUES ?
			 ON DUPLICATE KEY UPDATE annual_quota = VALUES(annual_quota), childcare_quota = VALUES(childcare_quota)`,
			[values]
		);
		return res.json({ ok: true });
	} catch (err) {
		console.error('POST /api/leave-records error', err);
		return res.status(500).json({ error: '服务器错误' });
	}
});

app.get('/api/holidays', async (req, res) => {
	try {
		const year = Number(req.query.year);
		if (!year) {
			return res.status(400).json({ error: '缺少 year 参数' });
		}
		const [rows] = await pool.execute(
			`SELECT label, month, day FROM holiday_calendar WHERE year = ? ORDER BY month, day, label`,
			[year]
		);
		return res.json({ year, holidays: rows });
	} catch (err) {
		console.error('GET /api/holidays error', err);
		return res.status(500).json({ error: '服务器错误' });
	}
});

app.post('/api/holidays', async (req, res) => {
	try {
		const { year, holidays, replace } = req.body || {};
		if (!year || !Array.isArray(holidays)) {
			return res.status(400).json({ error: '缺少节假日数据' });
		}
		const conn = await pool.getConnection();
		try {
			await conn.beginTransaction();
			if (replace) {
				await conn.execute('DELETE FROM holiday_calendar WHERE year = ?', [year]);
			}
			if (holidays.length > 0) {
				const values = holidays.map(item => [
					year,
					String(item.label || '').trim(),
					Number(item.month),
					Number(item.day)
				]);
				await conn.query(
					`INSERT INTO holiday_calendar (year, label, month, day)
					 VALUES ?
					 ON DUPLICATE KEY UPDATE label = VALUES(label), month = VALUES(month), day = VALUES(day)`,
					[values]
				);
			}
			await conn.commit();
			return res.json({ ok: true });
		} catch (err) {
			await conn.rollback();
			throw err;
		} finally {
			conn.release();
		}
	} catch (err) {
		console.error('POST /api/holidays error', err);
		return res.status(500).json({ error: '服务器错误' });
	}
});

ensureTables()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server running at http://localhost:${PORT}`);
		});
	})
	.catch((err) => {
		console.error('Failed to init database', err);
		process.exit(1);
	});
