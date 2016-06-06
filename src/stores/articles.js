import { myNormalizedArticles } from '../fixtures'


class Articles {

    onChangeHandlers = []
    articles = myNormalizedArticles.slice()

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

    /**
     * Ищем по вхождению слов. Слова разделениы пробелами
     * @param filteredValue
     */
    filterChanged = (filteredValue='') => {
        const filteredValues = filteredValue.split(' ')
        this.articles.splice(0, this.articles.length, ...myNormalizedArticles.filter(article=>{
            return filteredValues.every(filteredValue=>article.title.toLowerCase().indexOf(filteredValue)!==-1)
        }))
        this.onChangeHandlers.forEach(onChangeHandler=>onChangeHandler(this.articles))
    }

}

export default new Articles()