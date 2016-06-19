import AppDispatcher from '../dispatcher'
import { asyncACFactory, loadAllArticlesCall, addArticleCall, loadArticleByIdCall } from './webUtils'
import { /*DELETE_ARTICLE, LOAD_ARTICLE_BY_ID, */LOAD_ALL_ARTICLES, ADD_ARTICLE } from '../event_consts'

/*export function deleteArticle(id) {
    const action = {
        type: DELETE_ARTICLE,
        payload: { id }
    }

    AppDispatcher.dispatch(action)
}*/

export const loadAllArticles = asyncACFactory(loadAllArticlesCall, LOAD_ALL_ARTICLES)
export const addArticle = asyncACFactory(addArticleCall, ADD_ARTICLE)
//export const loadArticleById = asyncACFactory(loadArticleByIdCall, LOAD_ARTICLE_BY_ID)
