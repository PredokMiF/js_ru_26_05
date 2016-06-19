import React from 'react'
import { render } from 'react-dom'
import AppContainer from './containers/AppContainer'
import store from './store'

render(<AppContainer store={store}/>, document.getElementById('container'))