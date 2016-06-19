import { EventEmitter } from 'events'

import AppDispatcher from '../dispatcher'

const SOME_CHANGE_EVENT = 'SOME_CHANGE_EVENT'

export default class BasicStore extends EventEmitter {

    constructor(stores, initialState = []) {
        super()
        this._stores = stores
        this._items = {}
        initialState.forEach(this._add)
    }

    // Pub/Sub

    _subscribe = (callback) => {
        this.dispatchToken = AppDispatcher.register(callback)
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

    // Data API

    getAll = () => {
        return Object.keys(this._items).map(this.getById)
    }

    getById = (id) => {
        return this._items[id]
    }

    _add = (item) => {
        this._items[item.id] = item
    }

    remove = (id) => {
        delete this._items[id]
    }

    dropData = () => {
        Object.keys(this._items).forEach(this.remove)
    }

}