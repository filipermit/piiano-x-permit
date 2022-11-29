import { Pool } from 'pg'


class DB {
	constructor() {
		this.pool = new Pool({
			host: process.env.DATABASE_URL,
			port: 5432,
			user: 'postgres',
			password: 'password',
		})
	}
	async query(query, values) {
		const sqlRes = await this.pool.query(query, values);
		return sqlRes.rows;
	}

  }

const db = new DB();
export default db;