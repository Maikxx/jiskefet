require('dotenv').config()
import express from 'express'
import helmet from 'helmet'
import http from 'http'
import bodyParser from 'body-parser'
import { setupSockets } from './www/sockets'

(async () => {
    const app = express()
    const server = new http.Server(app)

    setupSockets(server)

    app.use(helmet())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    app.get('/', () => {
        console.log('Index get route')
    })

    server.listen(({ port: process.env.PORT || 3000 }), () => {
        console.info(`App is now open for action on port ${process.env.PORT || 3000}.`)
    })
})()
