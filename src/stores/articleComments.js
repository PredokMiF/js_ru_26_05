import { myNormalizedComments } from '../fixtures'


class ArticleComments {

    onChangeHandlers = []
    comments = myNormalizedComments.slice()

    getList(articleId){
        return this.comments.filter(comment=>comment.parent===articleId);
    }

    on(handler){
        handler && this.onChangeHandlers.push(handler)
    }

    off(handler){
        if (handler && this.onChangeHandlers.indexOf(handler) !== -1)
            this.onChangeHandlers.splice(this.onChangeHandlers.indexOf(handler), 1)
    }

    addComment({articleId, name = "Me", text = ""}){
        this.comments.push({
            id: Date.now(),
            parent: articleId,
            name: name,
            text: text
        })

        this.onChangeHandlers.forEach(onChangeHandler=>onChangeHandler(articleId))
    }

}

export default new ArticleComments