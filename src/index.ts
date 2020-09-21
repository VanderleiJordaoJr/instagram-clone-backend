import express, { Request, Response } from 'express'

const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => res.send('Hello'))

app.listen(port, () => {
	console.log(`Listen at http://localhost:${port}`)
})
