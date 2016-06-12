//Utils
import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE } from '../EVENTS'


export function deleteArticle (id) {
    const action = {
        type: DELETE_ARTICLE,
        payload: { id }
    }

    AppDispatcher.dispatch(action)
}