import { REMOVE_ARTICLE } from '../constants'

export function removeArticle (id) {
    return {
        type: REMOVE_ARTICLE,
        payload: {id}
    }
}