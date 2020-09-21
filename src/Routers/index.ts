import { Request, Response, Router } from 'express'

const IndexRouter = Router()

IndexRouter.get('/', (req: Request, res: Response) => res.send('Hello'))

export default IndexRouter