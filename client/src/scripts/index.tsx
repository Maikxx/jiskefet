import 'babel-polyfill'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './App'

(async () => {
    ReactDOM.render(
        <App />,
        document.getElementById('react-root')
    )
})()
