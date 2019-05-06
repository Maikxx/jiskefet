import 'babel-polyfill'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

const App: React.SFC = () => (
    <div>Hoi</div>
)

ReactDOM.render(<App />, document.getElementById('react-root'))
