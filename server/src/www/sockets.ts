import http from 'http'
import socketIO from 'socket.io'

export function setupSockets(server: http.Server) {
    const sockets: SocketIO.Server = socketIO(server)

    sockets.on('connection', onSocketConnection)

    return sockets
}

function onSocketConnection() {
    console.info('A user connected')
}
