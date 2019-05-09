require('dotenv').config()
import express from 'express'
import helmet from 'helmet'
import http from 'http'
import bodyParser from 'body-parser'
import { setupSockets } from './www/sockets'
import path from 'path'
import { getTagsRoute, getIndexRoute } from './routes/getRoutes'
import { postAddTagRoute, postEditTagRoute, postRemoveTagRoute } from './routes/postRoutes'

(async () => {
    const app = express()
    const server = new http.Server(app)

    const sockets = setupSockets(server)

    app.use(helmet())
    app.use(express.static(path.join(__dirname, '../public')))
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    app.get('/', getIndexRoute)
    app.get('/get-tags', getTagsRoute)
    app.post('/create-tag', postAddTagRoute(sockets))
    app.post('/edit-tag', postEditTagRoute(sockets))
    app.post('/remove-tag', postRemoveTagRoute(sockets))

    server.listen(({ port: process.env.PORT || 5430 }), () => {
        console.info(`App is now open for action on port ${process.env.PORT || 5430}.`)
    })
})()
