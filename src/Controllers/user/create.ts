import { Request, Response } from 'express'
import { nanoid } from 'nanoid'
import { hash } from 'bcrypt'
import Knex from 'knex'

export default (knex: Knex) => {
	return async (req: Request, res: Response): Promise<Response> => {
		console.log(res)
		const { username, email, name, password } = req.body
		if (!username || !email || !name || !password)
			return res.sendStatus(400)

		try {
			const id = nanoid(15)
			const hashedPassword = await hash(password, 10)

			const user = {
				id, username, email, name, password: hashedPassword
			}
			const transaction = await knex.transaction()
			await transaction('Users').insert(user).withSchema('InstagramClone')
			await transaction.commit()
			return res.sendStatus(201)
		} catch (error) {
			return res.sendStatus(500)
		}
	}
}