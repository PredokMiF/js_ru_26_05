import { combineReducers } from 'redux'

import { REMOVE_ARTICLE } from '../constants'
import articles from './articles'
import comments from './comments'

const combinedReducers = combineReducers ({
    articles,
    comments
})

export default (store, action) => {
    const { type, payload } = action

    switch (type) {
        case REMOVE_ARTICLE:
            const { id:articleId } = payload
            let commentIds = []
            store = Object.assign({}, store)
            store.articles = store.articles.filter(article=>{
                if (article.id!==articleId) {
                    return true
                } else {
                    commentIds = (article.comments || []).slice()
                    return false
                }
            })
            store.comments = store.comments.filter(({id})=>!commentIds.includes(id))
            return store;
        default:
            return combinedReducers(store, action)
    }
}