import 'babel-polyfill'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Wysiwig } from './components/organisms/Wysiwyg'

const App: React.SFC = () => (
    <div>
        <Wysiwig />
        {/* Here comes the tags selector organism */}
    </div>
)

ReactDOM.render(<App />, document.getElementById('react-root'))
