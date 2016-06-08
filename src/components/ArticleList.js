import React, { PropTypes, Component } from 'react'

// Stores
import articleStore from '../stores/articles'

// Decorators
import storeSubscriber from '../decorators/storeSubscriber'

//Components
import Article from './Article'


class ArticleList extends Component {

    state = {
        activeArticleId: null
    }

    render () {
        const articleList = articleStore.getList()

        const body = articleList.length
            ? articleList.map((article) => (
                <li key={article.id}>
                    <Article
                        article={article}
                        isOpend={article.id===this.state.activeArticleId}
                        onToggle={(dropped)=>{this.setState({activeArticleId: dropped?article.id:null})}}/>
                </li>
            ))
            : <i>Ничего не найдено</i>

        return <ul>{body}</ul>
    }

}

export default storeSubscriber(ArticleList, articleStore, function () {this.forceUpdate()})