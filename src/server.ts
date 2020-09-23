import express from 'express'
import { PORT } from './config'
import IndexRouter from './Routers'

const app = express()

app.use(express.json())
app.use(IndexRouter)

const server = app.listen(PORT, () => {
	console.log(`Listen at http://localhost:${PORT}`)
})

export default server