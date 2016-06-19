import $ from 'jquery'

import AppDispatcher from '../dispatcher'
import { START, SUCCESS, FAIL } from '../event_consts'

export function asyncACFactory(apiCall, evType) {

    return (payload) => {
        AppDispatcher.dispatch({
            type: evType + START,
            payload
        })

        setTimeout(() => {
            apiCall(payload)
                .done((response) => AppDispatcher.dispatch({
                    type: evType + SUCCESS,
                    response,
                    payload
                }))
                .fail(error => AppDispatcher.dispatch({
                    type: evType + FAIL,
                    error,
                    payload
                }))
        }, 1000)
    }
}

export function loadAllArticlesCall({limit, offset}) {
    return $.get('/api/article', {limit, offset})
}

export function addArticleCall({title, text}) {
    return $.post('/api/article', {title, text})
}

/*
export function loadArticleByIdCall({ id }) {
    return $.get(`/api/article/${id}`)
}*/
