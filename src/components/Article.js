import React, { PropTypes, Component } from 'react'

// Decorators
import contentToggler from '../decorators/contentToggler'

//Components
import CommentList from './CommentList'

//Styles
import './Article.css'


class Article extends Component {

    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.arrayOf(PropTypes.number)
        })
    }

    render() {
        const { article } = this.props

        const body = this.props.isOpen ? (
            <div>
                <section>{article.text}</section>
                <CommentList articleId={article.id}/>
            </div>
        ) : null

        return (
            <div>
                <h3 onClick = {this.props.toggleOpen} className="article-title">{article.title} <span className="date">({article.date})</span></h3>
                {body}
            </div>
        )
    }

}

export default contentToggler(Article)