import { REMOVE_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'

export default (comments = normalizedComments, action) => {
    const { type, payload } = action

    switch(type) {
        case REMOVE_COMMENT:
            const { id } = payload
            return comments.filter(comment=>comment.id !== id)
    }

    return comments
}