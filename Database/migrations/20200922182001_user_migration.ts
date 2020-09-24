import * as Knex from 'knex'

export async function up(knex: Knex): Promise<void> {
	return knex.schema
		.createSchemaIfNotExists('InstagramClone')
		.createTable('Users', (table) => {
			table.string('id', 15).primary()
			table.string('username', 50).unique()
			table.string('email', 50).unique()
			table.string('name', 50).unique()
			table.string('password', 60)
			table.timestamp('created_at').defaultTo(knex.fn.now())
			table.timestamp('updated_at').defaultTo(knex.fn.now())
		}).withSchema('InstagramClone')
		.createTable('RefreshTokens', (table) => {
			table.increments()
			table.string('refreshToken').unique()
			table.string('userId').references('id').inTable('InstagramClone.Users').notNullable().onDelete('cascade')
		}).withSchema('InstagramClone')
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema
		.dropTableIfExists('RefreshTokens').withSchema('InstagramClone')
		.dropTableIfExists('Users').withSchema('InstagramClone')
		.dropSchemaIfExists('InstagramClone')
}
