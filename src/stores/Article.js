import BasicStore from './BasicStore'

import { LOAD_ALL_ARTICLES, ADD_ARTICLE, START, SUCCESS, FAIL } from '../event_consts'



export default class ArticleStore extends BasicStore {
    constructor(...args) {
        super(...args)
        this._subscribe((action) => {
            const { type, payload, response, error } = action

            switch (type) {

                case LOAD_ALL_ARTICLES + START:
                    this.loading = true
                    this.dropData()
                    break

                case LOAD_ALL_ARTICLES + SUCCESS:
                    response.list.forEach(this._add)
                    this.loading = false
                    this.total = response.total
                    break

                case LOAD_ALL_ARTICLES + FAIL:
                    this.error = error
                    this.loading = false
                    this.total = 0
                    break

                case ADD_ARTICLE + SUCCESS:
                    break

                default:
                    return
            }

            this._emitChange()
        })
    }
}