import React, { PropTypes, Component } from 'react'

// AC
import { deleteArticle } from '../AC/article'

// Decorators
import contentToggler from '../decorators/contentToggler'

//Components
import CommentList from './CommentList'

//Styles
import './Article.css'


class Article extends Component {

    static propTypes = {
        store: PropTypes.object,
        id: PropTypes.string,
        isOpend: PropTypes.bool,
        onToggle: PropTypes.func
    }

    render() {
        const article = this.props.store.getById(this.props.id)

        const body = (
            <div>
                <section>{article.text}</section>
                <CommentList parentId={article.id}/>
            </div>
        )

        return (
            <div>
                <h3 onClick = {this.props.toggleOpen} className="article-title">{article.title} <span className="date">({article.date})</span> <a onClick={this.deleteArticleHandler}>(Удалить)</a></h3>
                {this.props.isOpen ? body : null}
            </div>
        )
    }

    deleteArticleHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()
        deleteArticle(this.props.id)
    }

}

export default contentToggler(Article)