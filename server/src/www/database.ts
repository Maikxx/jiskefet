import util from 'util'
import fs from 'fs'
import path from 'path'
import { Database } from '../types/Database'

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

const databasePath = path.join(__dirname, '../../database/database.json')

export async function getDataFromDatabase() {
    try {
        const fileBuffer = await readFile(databasePath)
        const fileString = fileBuffer.toString()
        const data: Database = JSON.parse(fileString)

        return data
    } catch (error) {
        throw new Error(error.message)
    }
}

export async function addNewTagToDatabase(tagName: string) {
    try {
        const data = await getDataFromDatabase()

        const { tags, types } = data
        const lastTag = tags[tags.length - 1]

        if (lastTag) {
            const newTag = {
                id: lastTag.id + 1,
                name: tagName,
                typeId: 2,
            }

            tags.push(newTag)

            await writeFile(databasePath, JSON.stringify({
                types,
                tags,
            }))

            return newTag
        } else {
            throw new Error('There is no tag found')
        }
    } catch (error) {
        throw new Error(error.message)
    }
}
