import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import CommentList from '../components/CommentList'
import { removeArticle } from '../AC/article'
import { getRelation } from '../store/utils'

class Article extends Component {
    static propTypes = {
        article: PropTypes.object,
        removeArticle: PropTypes.func
    };

    render() {
        const { article } = this.props
        const comments = getRelation(article, 'comments')

        return (
            <div>
                <h2>{article.title} <a href="#" onClick={this.removeHandler}>Delete</a></h2>
                <p>{article.text}</p>
                <CommentList comments={comments}/>
            </div>
        )
    }

    removeHandler = (e) => {
        const { id } = this.props.article

        e.preventDefault()
        this.props.removeArticle(id)
    }
}

export default connect(
    null,
    {removeArticle}
)(Article)