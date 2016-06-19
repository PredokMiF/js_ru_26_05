import React, { PropTypes, Component } from 'react'

import './Article.css'



class Article extends Component {

    render () {
        const { article } = this.props

        return (
            <h3 className="article-title">{article.title} <span className="date">({article.date})</span> <a>(Удалить)</a></h3>
        )
    }

}

export default Article