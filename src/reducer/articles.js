import { REMOVE_ARTICLE, REMOVE_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'

export default (articles = normalizedArticles, action) => {
    const { type, payload } = action

    switch(type) {
        case REMOVE_COMMENT:
            const { id:commentId } = payload
            return articles.map(article=>{
                if (article.comments && article.comments.includes(commentId)) {
                    article = JSON.parse(JSON.stringify(article))
                    article.comments = article.comments.filter(id=>id!==commentId)
                    return article
                } else {
                    return article
                }
            })
    }

    return articles
}