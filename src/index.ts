import express, { Request, Response } from 'express'
import { PORT } from './config'

const app = express()

app.get('/', (req: Request, res: Response) => res.send('Hello'))

app.listen(PORT, () => {
	console.log(`Listen at http://localhost:${PORT}`)
})
