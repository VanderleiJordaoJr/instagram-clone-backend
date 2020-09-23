import { expect } from 'chai'
import server from '../src/server'
import { agent as request } from 'supertest'

describe('Router get test', () => {
	it('Index test', async () => {
		const res = await request(server)
			.get('/')
		expect(res.status).to.be.equal(200)
		expect(res.body).not.to.be.empty
		expect(res.body).to.have.property('hello')
		expect(res.body.hello).to.be.equal('World')
	})
})
