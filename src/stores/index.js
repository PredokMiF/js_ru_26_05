import Article from './Article'

const stores = {}

Object.assign(stores, {
    articles: new Article(stores)
})

export default stores
//export const articleStore = stores.articles

window.stores = stores