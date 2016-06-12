import AppDispatcher from '../dispatcher'
import { EventEmitter } from 'events'
import { ADD_COMMENT } from '../EVENTS'

import ListStoreAbstract from './ListStoreAbstract'


export default class ArticleComments extends ListStoreAbstract {

    constructor (items=[]) {
        super(items)

        this._subscribe((action) => {
            const {type, payload} = action
            switch (type) {
                case ADD_COMMENT:
                    this.add(payload)
                    this._emitChange()
                    break;
            }
        })
    }

}
