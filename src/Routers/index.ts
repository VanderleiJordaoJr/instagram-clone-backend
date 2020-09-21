import { Request, Response, Router } from 'express'
import UserRouter from './users'
const IndexRouter = Router()

IndexRouter.get('/', (req: Request, res: Response) => res.send('Hello'))
IndexRouter.use(UserRouter)

export default IndexRouter