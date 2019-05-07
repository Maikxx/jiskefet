import 'babel-polyfill'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Wysiwig } from './components/organisms/Wysiwyg'
import { Attachment } from './components/organisms/Attachment'
import { CreateTag } from './components/molecules/CreateTag'
import socketIO from 'socket.io-client'

const io = socketIO('http://localhost:3000')

io.on('connect', () => {
    console.info('Socket connection established')
})

const App: React.SFC = () => (
    <div>
        <h1>CREATE A NEW LOG</h1>
        <div>
            <label htmlFor=''>
                <input type='text' placeholder='Add a title for this log'/>
            </label>

            <Wysiwig />

            <CreateTag />

            <Attachment />

            <button className='CreateLog' type='submit'>ADD NEW LOG</button>
        </div>
    </div>
)

ReactDOM.render(<App />, document.getElementById('react-root'))
