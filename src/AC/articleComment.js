import AppDispatcher from '../dispatcher'


export function addComment (parentId, name, text) {
    const action = {
        type: 'ADD_COMMENT',
        payload: { id: Date.now(), parentId, name, text }
    }

    AppDispatcher.dispatch(action)
}