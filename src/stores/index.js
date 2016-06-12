import { myNormalizedArticles, myNormalizedComments } from '../fixtures'
import ArticleStore from './article'
import CommentsStore from './comments'


export const articleStore = new ArticleStore(myNormalizedArticles)
export const commentsStore = new CommentsStore(myNormalizedComments)