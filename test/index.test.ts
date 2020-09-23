import { expect } from 'chai'
import server from '../src/server'
import knex from '../src/Database'

describe('Index Test', () => {
	it('should always pass', function () {
		expect(true).to.equal(true)
	})
})

after((done) => {
	knex.destroy()
	server.close(done)
})