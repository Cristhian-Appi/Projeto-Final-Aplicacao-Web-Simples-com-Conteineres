import { connect } from './connect.mjs'

export class LogsRepository {
    async list () {
        const connection = await connect()
        const logsCollection = connection.db('mydatabase').collection('logs')
        const result = await logsCollection.find().toArray()
        await connection.close()

        return result
    }
}
