import { Router } from 'express'
import { create, update, destroy, authenticate, logout, createToken } from '../Controllers/user'

const UserRouter = Router()

// Create, update and delete user
UserRouter
	.post('/users', create)
	.put('/users', update)
	.delete('/users', destroy)

// Create and delete user refresh token
UserRouter
	.post('/users/login', authenticate)
	.delete('/users/logout', logout)

// Create a temporary access token based on user refresh token
UserRouter
	.post('/users/token', createToken)

export default UserRouter