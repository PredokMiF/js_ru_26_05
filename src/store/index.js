import { createStore } from 'redux'
import reducer from '../reducer'
import { normalizedComments } from '../fixtures'

const store = createStore(reducer, {comments: normalizedComments})

window.store = store

export default store