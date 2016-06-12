import AppDispatcher from '../dispatcher'
import { EventEmitter } from 'events'


const SOME_CHANGE_EVENT = 'SOME_CHANGE_EVENT'

export default class ArticleStoreAbstract extends EventEmitter {

    _items = []

    constructor (items=[]) {
        super()
        items.forEach(this.add)
    }

    _emitChange = () => {
        this.emit(SOME_CHANGE_EVENT)
    }

    addChangeListener = (callback) => {
        this.on(SOME_CHANGE_EVENT, callback)
    }

    removeChangeListener = (callback) => {
        this.removeListener(SOME_CHANGE_EVENT, callback)
    }

    _subscribe = (callback) => {
        AppDispatcher.register(callback)
    }

    add = (item) => {
        this._items.push(item)
        return true
    }

    remove = (id) => {
        return this._items.some((item, i, items) => {
            if (item.id === id) {
                items.splice(i, 1)
                return true
            }
        })
    }

    getAll = () => {
        return this._items
    }

    getById = (id) => {
        return this._items.filter(item=>item.id === id)[0]
    }

    filterBy = (field, value) => {
        return this._items.filter(item=>item[field] === value)
    }

}