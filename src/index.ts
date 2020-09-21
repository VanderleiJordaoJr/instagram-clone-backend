import express from 'express'
import { PORT } from './config'
import IndexRouter from './Routers'

const app = express()

app.use(express.json())
app.use(IndexRouter)

app.listen(PORT, () => {
	console.log(`Listen at http://localhost:${PORT}`)
})
