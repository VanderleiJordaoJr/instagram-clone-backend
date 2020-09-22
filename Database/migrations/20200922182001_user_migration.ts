import * as Knex from 'knex'


export async function up(knex: Knex): Promise<void> {
	return knex.schema
		.createSchemaIfNotExists('InstagramClone')
		.createTable('Users', (table) => {
			table.string('id', 15).primary()
			table.string('username', 50)
			table.string('email', 50)
			table.string('name', 50)
			table.string('password', 60)
			table.timestamp('created_at').defaultTo(knex.fn.now())
			table.timestamp('updated_at').defaultTo(knex.fn.now())
		}).withSchema('InstagramClone')
}


export async function down(knex: Knex): Promise<void> {
	return knex.schema
		.dropTableIfExists('Users').withSchema('InstagramClone')
		.dropSchemaIfExists('InstagramClone')

}
