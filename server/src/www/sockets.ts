import http from 'http'
import socketIO from 'socket.io'

export function setupSockets(server: http.Server) {
    const sockets: SocketIO.Server = socketIO(server)

    sockets.on('connection', onSocketConnection(sockets))

    return sockets
}

function onSocketConnection(sockets: SocketIO.Server) {
    return function(socket: SocketIO.Socket) {
        console.info('A user connected')
    }
}
