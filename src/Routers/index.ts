import { Request, Response, Router } from 'express'
import usersRouter from './usersRouter'
const IndexRouter = Router()

IndexRouter.get('/', (req: Request, res: Response) => res.json({ hello: 'World' }))
IndexRouter.use(usersRouter)

export default IndexRouter