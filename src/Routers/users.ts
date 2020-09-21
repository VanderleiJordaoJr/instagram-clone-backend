import { Router } from 'express'

const UserRouter = Router()

// Create, update and delete user
UserRouter
	.post('/users')
	.put('/users')
	.delete('/users')

// Create and delete user refresh token
UserRouter
	.post('/users/login')
	.delete('/users/logout')

// Create a temporary access token based on user refresh token
UserRouter
	.post('/users/token')

export default UserRouter