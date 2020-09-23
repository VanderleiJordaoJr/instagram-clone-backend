import { expect } from 'chai'
import server from '../src/server'
import { agent as request } from 'supertest'

describe('Create user Test', () => {
	it('Request without body', async () => {
		const res = await request(server)
			.post('/users')
		expect(res.status).to.be.equal(500)
	})
	it('Request with correct body', async () => {
		const res = await request(server)
			.post('/users')
			.send({
				username: 'test_username',
				email: 'test_email',
				name: 'test name',
				password: '12345678@test'
			})
		expect(res.status).to.be.equal(201)
	})
})
