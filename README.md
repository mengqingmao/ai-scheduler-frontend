## MySQL 后端说明

### 1. 数据库准备

创建数据库：

```sql
CREATE DATABASE IF NOT EXISTS dqs_schedule DEFAULT CHARSET utf8mb4;
```

程序启动后会自动创建表：

```sql
CREATE TABLE IF NOT EXISTS schedules (
	id INT AUTO_INCREMENT PRIMARY KEY,
	team VARCHAR(64) NOT NULL,
	year INT NOT NULL,
	month INT NOT NULL,
	schedule_json LONGTEXT NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	UNIQUE KEY uniq_team_year_month (team, year, month)
);

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
);

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
);

CREATE TABLE IF NOT EXISTS holiday_calendar (
	id INT AUTO_INCREMENT PRIMARY KEY,
	year INT NOT NULL,
	label VARCHAR(64) NOT NULL,
	month INT NOT NULL,
	day INT NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	UNIQUE KEY uniq_holiday_year_label_day (year, label, month, day)
);
```

### 2. 环境变量

通过环境变量配置 MySQL：

- `MYSQL_HOST`（默认 `localhost`）
- `MYSQL_PORT`（默认 `3306`）
- `MYSQL_USER`（默认 `root`）
- `MYSQL_PASSWORD`（默认空）
- `MYSQL_DATABASE`（默认 `dqs_schedule`）
- `PORT`（服务端口，默认 `3000`）

### 3. 启动服务

安装依赖后运行：

```bash
npm start
```

打开页面：

```
http://localhost:3000/签录%20A-DQS%20V1.0.html
```

### 4. API

- 保存排班：`POST /api/schedules`
- 获取排班：`GET /api/schedules?team=神鹰&year=2026&month=1`
- 清空排班：`DELETE /api/schedules?team=神鹰&year=2026&month=1`

- 保存归档：`POST /api/archives`
- 获取归档：`GET /api/archives?team=神鹰&year=2026&month=1`
- 归档月份列表：`GET /api/archives/summary?team=神鹰&year=2026`
- 清空归档：`DELETE /api/archives?team=神鹰&year=2026&month=1`

- 获取年度休假记录：`GET /api/leave-records?team=神鹰&year=2026`
- 保存年度休假记录：`POST /api/leave-records`

- 获取节假日配置：`GET /api/holidays?year=2026`
- 保存节假日配置：`POST /api/holidays`（可传 `replace:true` 覆盖该年度配置）
