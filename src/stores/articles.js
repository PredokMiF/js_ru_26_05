import { myNormalizedArticles } from '../fixtures'


class Articles {

    onChangeHandlers = []
    articles = myNormalizedArticles.slice()
    filters = {}

    getList(){
        return this.articles
    }

    on(handler){
        handler && this.onChangeHandlers.push(handler)
    }

    off(handler){
        if (handler && this.onChangeHandlers.indexOf(handler) !== -1)
            this.onChangeHandlers.splice(this.onChangeHandlers.indexOf(handler), 1)
    }

    filterById = (ids = null) => {
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
    }

}

export default new Articles()