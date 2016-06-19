import React, { PropTypes, Component } from 'react'

import { loadAllArticles } from '../AC/articles'
import connectToStore from '../decorators/connectToStore'
import pagination from '../decorators/pagination'
import Article from './Article'

import './ArticleList.css'



class ArticleList extends Component {

    render () {
        const { loading } = this.props

        if (loading) {
            return <div>Loading...</div>
        }

        return (
            <div >
                <ul className="article-list">
                    {this.getBody()}
                </ul>
            </div>
        )
    }

    getBody () {
        const { articles } = this.props

        return articles.length
            ? articles.map((article) => (
                <li key={article.id} className="article-list-item">
                    <Article article={article}/>
                </li>
            ))
            : <i>Ничего не найдено</i>
    }

}

function getState(stores) {
    const { articles } = stores
    return {
        articles: articles.getAll(),
        loading: articles.loading
    }
}

export default connectToStore(['articles'], getState,
    pagination('articles', loadAllArticles, ArticleList)
)