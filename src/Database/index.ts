import knex from 'knex'
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USER } from '../config'

const connection = knex({
	client: 'pg',
	connection: {
		host: DB_HOST,
		database: DB_DATABASE,
		user: DB_USER,
		password: DB_PASSWORD,
		charset: 'utf-8',
	},
	migrations: {
		directory: __dirname + '/Database/migrations',
	},
	seeds: {
		directory: __dirname + '/Database/seeds'
	}
})

export default connection