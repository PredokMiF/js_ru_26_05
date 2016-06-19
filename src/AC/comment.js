import { REMOVE_COMMENT } from '../constants'

export function removeComment (id) {
    return {
        type: REMOVE_COMMENT,
        payload: {id}
    }
}