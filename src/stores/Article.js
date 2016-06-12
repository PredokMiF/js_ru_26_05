import AppDispatcher from '../dispatcher'
import { EventEmitter } from 'events'

import ListStoreAbstract from './ListStoreAbstract'

const SOME_CHANGE_EVENT = 'SOME_CHANGE_EVENT'

export default class ArticleStore extends ListStoreAbstract {

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

}