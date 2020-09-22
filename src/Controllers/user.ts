import { Request, Response } from 'express'
import { nanoid } from 'nanoid'
import knex from '../Database'
import { hash } from 'bcrypt'

export const create = async (req: Request, res: Response): Promise<Response> => {
	const { username, email, name, password } = req.body
	try {
		const id = nanoid(15)
		const hashedPassword = await hash(password, 10)
		const user = {
			id, username, email, name, password: hashedPassword
		}
		const transaction = await knex.transaction()
		await transaction('Users').insert(user).withSchema('InstagramClone')
		await transaction.commit()
		return res.status(201).json({ id })
	} catch (error) {
		console.log(error)
		return res.sendStatus(500)
	}
}

export const update = async (req: Request, res: Response) => { }

export const destroy = async (req: Request, res: Response) => { }

export const authenticate = async (req: Request, res: Response) => { }

export const logout = async (req: Request, res: Response) => { }

export const createToken = async (req: Request, res: Response) => { }