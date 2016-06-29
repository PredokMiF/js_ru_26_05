import { LOAD_COMMENTS, SUCCESS, START, FAIL } from '../constants'

const defaultState = {
    entities: [],
    total: 0,
    size: 5,
    loading: false
}
//эти комменты ничем не отличаються от прошлых, не вижу причины заводить отдельный редюсер. + вы каждый раз перезаписываете комменты, соответственно каждый раз их читаете
export default (commentsAll = defaultState, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case LOAD_COMMENTS + START:
            return Object.assign({}, commentsAll, { loading: true })
        case LOAD_COMMENTS + SUCCESS:
            return {
                entities: response.records,
                total: response.total,
                size: payload.size,
                loading: false
            }
    }

    return commentsAll
}
