import 'babel-polyfill'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Wysiwig } from './components/organisms/Wysiwyg'
import { CreateTag } from './components/molecules/CreateTag'
import socketIO from 'socket.io-client'

const io = socketIO('http://localhost:3000')

io.on('connect', () => {
    console.info('Socket connection established')
})

const App: React.SFC = () => (
    <div>
        <Wysiwig />
        <CreateTag categories={[ 'Subsystem', 'Runtype', 'HLT-mode', 'Class' ]}/>
        {/* Here comes the tags selector organism */}
    </div>
)

ReactDOM.render(<App />, document.getElementById('react-root'))
