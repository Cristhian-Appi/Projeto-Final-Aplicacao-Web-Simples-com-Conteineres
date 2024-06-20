import { MongoClient } from 'mongodb'

export async function connect () {
    return await MongoClient.connect('mongodb://db:27017')
}
