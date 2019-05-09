import express from 'express'
import { addNewTagToDatabase, updateTagInDatabase, removeTagFromDatabase } from '../www/database'
import SocketIO from 'socket.io'

export function postAddTagRoute(sockets: SocketIO.Server) {
    return async function(request: express.Request, response: express.Response) {
        const { tagName } = request.body

        try {
            const newlyAddedTag = await addNewTagToDatabase(tagName)
            sockets.emit('tag-created', newlyAddedTag)

            return response.status(200).json({
                success: true,
            })
        } catch (error) {
            return response.status(409).json({
                success: false,
                error: error.message,
            })
        }
    }
}

export function postEditTagRoute(sockets: SocketIO.Server) {
    return async function(request: express.Request, response: express.Response) {
        const { tagId, updatedTagName } = request.body

        try {
            const { tag, isUpdated } = await updateTagInDatabase(tagId, updatedTagName)

            if (isUpdated) {
                sockets.emit('tag-edited', tag)

                return response.status(200).json({
                    success: true,
                })
            } else {
                return response.status(409).json({
                    success: false,
                    error: `Updating tag ${tagId} failed!`,
                })
            }
        } catch (error) {
            return response.status(500).json({
                success: false,
                error: error.message,
            })
        }
    }
}

export function postRemoveTagRoute(sockets: SocketIO.Server) {
    return async function(request: express.Request, response: express.Response) {
        const { tagId } = request.body

        try {
            const { isRemoved, message } = await removeTagFromDatabase(tagId)

            if (isRemoved) {
                sockets.emit('tag-removed', tagId)

                return response.status(200).json({
                    success: true,
                })
            } else {
                return response.status(409).json({
                    success: false,
                    error: message,
                })
            }
        } catch (error) {
            return response.status(500).json({
                success: false,
                error: error.message,
            })
        }
    }
}
