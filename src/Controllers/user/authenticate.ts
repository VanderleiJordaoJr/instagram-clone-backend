import { Request, Response } from 'express'
import { compare, hash } from 'bcrypt'
import Knex from 'knex'
import User from '../../Models/User'

export default (knex: Knex) => {
	return async (req: Request, res: Response): Promise<Response> => {
		const { username_email, password } = req.body
		if (!username_email || !password)
			return res.sendStatus(400)

		const storedUserArray: User[] = await knex.select('*')
			.from('InstagramClone.Users')
			.where('username', username_email)
			.orWhere('email', username_email)

		if (storedUserArray.length === 0)
			return res.sendStatus(400)
		else if (storedUserArray.length > 1) // Two users cannot have the same email or username
			return res.sendStatus(500)

		const storedUser = storedUserArray[0]

		if (!(await compare(password, storedUser.password)))
			return res.sendStatus(401)



		return res.json(storedUser)
	}
}