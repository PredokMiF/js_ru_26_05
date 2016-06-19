import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Article from './Article'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    render() {
        const { articles } = this.props
        const articleList = articles.map(article => <li key={article.id}><Article article={article}/></li>)

        return (
            <ul>
                {articleList}
            </ul>
        )
    }
}

export default connect(
    (state) => ({
        articles: state.articles
    })
)(ArticleList)