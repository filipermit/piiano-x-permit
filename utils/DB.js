import { Pool } from 'pg'
const PvaultSdk = require('../pvault-sdk');
//import PvaultSdk from 'pvault-sdk'


class DB {
	constructor() {
		this.pool = new Pool({
			host: process.env.DATABASE_URL,
			port: 5432,
			user: 'postgres',
			password: 'password',
		})
		this.vault = new PvaultSdk.ApiClient(process.env.PVAULT_BASE_PATH);
		// Configure Bearer (JWT) access token for authorization: bearerAuth
		this.vault.authentications['bearerAuth'].accessToken = process.env.PVAULT_API_KEY;	
		this.objApis = new PvaultSdk.ObjectsApi(this.vault);	
	}
	async query(query, values) {
		const sqlRes = await this.pool.query(query, values);
		return sqlRes.rows;
	}

	vaultObjs() {
		return this.objApis;
	}
  
	async getInfo(uids, fields) {
		const query = 'SELECT * FROM users JOIN \
		(SELECT user_email,json_agg(json_build_object(\'label\', label, \'emoji\', emoji)) as badges FROM badges GROUP BY user_email) as aa \
		ON email=user_email';

		const sqlRes = await this.client.query(query);
		//WHERE email = ANY($1::text[])', [["ariel@piiano.com", "filip@permit.io"]])
		
		if (null !== uids) {
			return sqlRes.rows.filter(element => uids.indexOf(element.email) != -1);
		}
		return sqlRes.rows;
	}
  }

const db = new DB();
export default db;