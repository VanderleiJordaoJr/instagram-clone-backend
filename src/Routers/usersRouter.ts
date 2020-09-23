import { Router } from 'express'
import index from '../Controllers/user/'
import knex from '../Database'

const usersRouter = Router()

// Create, update and delete user
usersRouter
	.post('/users', index.create(knex))
/*
	.put('/users', update)
	.delete('/users', destroy)

// Create and delete user refresh token
usersRouter
	.post('/users/login', authenticate)
	.delete('/users/logout', logout)

// Create a temporary access token based on user refresh token
usersRouter
	.post('/users/token', createToken)
*/
export default usersRouter