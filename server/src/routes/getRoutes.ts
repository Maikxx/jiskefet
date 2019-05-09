import express from 'express'
import { getDataFromDatabase } from '../www/database'
import path from 'path'

export function getIndexRoute(request: express.Request, response: express.Response) {
    response.sendFile(path.join(__dirname, '../../public/index.html'))
}

export async function getTagsRoute (request: express.Request, response: express.Response) {
    try {
        const data = await getDataFromDatabase()

        response.status(200).json({
            success: true,
            data: data.tags,
        })
    } catch (error) {
        response.status(500).json({
            success: false,
            error: error.message,
        })
    }
}
