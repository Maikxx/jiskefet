import express from 'express'
import { addNewTagToDatabase, updateTagInDatabase } from '../www/database'
import SocketIO from 'socket.io'

export function postAddTagRoute(sockets: SocketIO.Server) {
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

export function postEditTagRoute(sockets: SocketIO.Server) {
    return async function(request: express.Request, response: express.Response) {
        const { tagId, updatedTagName } = request.body

        try {
            const { tag, isUpdated } = await updateTagInDatabase(tagId, updatedTagName)

            if (isUpdated) {
                sockets.emit('tag-updated', tag)
            } else {
                response.status(409).json({
                    success: false,
                    error: `Updating tag ${tagId} failed!`,
                })
            }
        } catch (error) {
            response.status(500).json({
                success: false,
                error: error.message,
            })
        }
    }
}
