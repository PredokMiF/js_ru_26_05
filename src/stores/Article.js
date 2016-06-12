import AppDispatcher from '../dispatcher'
import { EventEmitter } from 'events'

import ListStoreAbstract from './ListStoreAbstract'

const SOME_CHANGE_EVENT = 'SOME_CHANGE_EVENT'

export default class ArticleStore extends ListStoreAbstract {

    //_filters = {}

    constructor (items=[]) {
        super(items)
        this._subscribe((action) => {
            const {type, payload} = action
            switch (type) {
                case 'DELETE_ARTICLE':
                    this.remove(payload.id)
                    this._emitChange()
                    break;
            }
        })
    }

    /*filterById = (ids = null) => {
        if (ids === null || ids.length === 0) {
            ids = null
        } else if (!Array.isArray(ids)) {
            ids = [ids]
        }

        this.filters.ids = ids

        this.filtr()
    }

    filterByDate = (range) => {
        this.filters.range = range

        this.filtr()
    }

    filtr () {
        const {ids, range} = this.filters;
        let articles = [].concat(myNormalizedArticles)
        if (ids && ids.length) {
            articles = articles.filter(article=>{
                return ids.includes(article.id)
            })
        }

        if (range.from && range.to) {
            articles = articles.filter(article=>{
                const date = new Date(article.date)
                return range.from <= date && date <= range.to
            })
        }

        this.articles.splice(0, this.articles.length, ...articles)

        this.onChangeHandlers.forEach(onChangeHandler=>onChangeHandler(this.articles))
    }*/

}