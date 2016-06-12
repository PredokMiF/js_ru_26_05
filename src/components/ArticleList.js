import React, { PropTypes, Component } from 'react'

// Stores
import { articleStore } from '../stores'

//Components
import Article from './Article'

//Styles
import './ArticleList.css'


export default class ArticleList extends Component {

    state = {
        list: articleStore.getAll(),
        activeArticleId: null
    }

    componentDidMount = () => {
        articleStore.addChangeListener(this.storeUpdated)
    }

    componentWillUnmount = () => {
        articleStore.removeChangeListener(this.storeUpdated)
    }

    storeUpdated = () => {
        this.setState({list:articleStore.getAll()})
    }

    render () {
        const list = this.state.list
        const body = list.length
            ? list.map((article) => (
                <li key={article.id} className="article-list-item">
                    <Article
                        store={articleStore}
                        id={article.id}
                        isOpend={article.id===this.state.activeArticleId}
                        onToggle={(dropped)=>{this.setState({activeArticleId: dropped ? article.id : null})}}
                    />
                </li>
            ))
            : <i>Ничего не найдено</i>

        return <ul className="article-list">{body}</ul>
    }

}
