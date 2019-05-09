import express from 'express'
import { addNewTagToDatabase } from '../www/database'

export function postAddTagRoute (sockets: SocketIO.Server) {
    return async function(request: express.Request, response: express.Response) {
        const { tagName } = request.body

        try {
            const newlyAddedTag = await addNewTagToDatabase(tagName)
            sockets.emit('tag-created', newlyAddedTag)
        } catch (error) {
            response.status(409).json({
                success: false,
                error: error.message,
            })
        }

        response.status(200).json({
            success: true,
        })
    }
}
