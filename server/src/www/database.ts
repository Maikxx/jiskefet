import util from 'util'
import fs from 'fs'
import path from 'path'

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

const databasePath = path.join(__dirname, '../../database/database.json')

export async function getDataFromDatabase() {
    const fileBuffer = await readFile(databasePath)

    return JSON.parse(fileBuffer.toString())
}
