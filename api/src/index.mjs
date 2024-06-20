import { LogsRepository } from './db/logs-repository.mjs'
import express from 'express'

const app = express()
app.use(express.json())

const logsRepository = new LogsRepository()

app.get('/logs', async (req, res) => {
    const logs = await logsRepository.list()
    res.status(200).json(logs)
})

const server = app.listen(3000, () => console.log('server listening at http://localhost:3000'))

process.on('SIGTERM', () => server.close())
