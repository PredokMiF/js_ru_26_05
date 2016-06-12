//Utils
import AppDispatcher from '../dispatcher'
import { ADD_COMMENT } from '../EVENTS'


export function addComment (parentId, name, text) {
    const action = {
        type: ADD_COMMENT,
        payload: { id: Date.now(), parentId, name, text }
    }

    AppDispatcher.dispatch(action)
}