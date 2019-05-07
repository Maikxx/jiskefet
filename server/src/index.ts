require('dotenv').config()
import express from 'express'
import helmet from 'helmet'
import http from 'http'
import bodyParser from 'body-parser'
import { setupSockets } from './www/sockets'
import { getDataFromDatabase, addNewTagToDatabase } from './www/database'
import path from 'path'

(async () => {
    const app = express()
    const server = new http.Server(app)

    const sockets = setupSockets(server)

    app.use(helmet())
    app.use(express.static(path.join(__dirname, '../public')))
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    app.get('/', (request: express.Request, response: express.Response) => {
        response.sendFile(path.join(__dirname, '../public/index.html'))
    })

    app.get('/get-tags', async (request: express.Request, response: express.Response) => {
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
    })

    app.post('/create-tag', async (request: express.Request, response: express.Response) => {
        const { tagName } = request.body

        try {
            const newlyAddedTag = await addNewTagToDatabase(tagName)
            sockets.emit('tag-created', newlyAddedTag)
        } catch (error) {
            response.status(500).json({
                success: false,
                error: error.message,
            })
        }

        response.status(200).json({
            success: true,
        })
    })

    server.listen(({ port: process.env.PORT || 3000 }), () => {
        console.info(`App is now open for action on port ${process.env.PORT || 3000}.`)
    })
})()
