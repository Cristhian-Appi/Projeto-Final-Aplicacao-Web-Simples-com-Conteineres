'use server'

export async function getLogs () {
    try {
        const response = await fetch('http://api:3000/logs')

        return await response.json()
    } catch (error) {
        throw error
    }
}