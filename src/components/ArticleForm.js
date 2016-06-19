import React, { PropTypes, Component } from 'react'

//import { Component } from '../AC/articles'

import './ArticleForm.css'


class ArticleForm extends Component {

    state = {
        title: '',
        text: ''
    }

    render () {
        const { title, text } = this.state

        return (
            <div className="article-form">
                <div>
                    <label>Заголовок:</label><input type="text" value={title} onChange={this.titleChangeHandler}/>
                </div>
                <div>
                    <label>Текст:</label><input type="text" value={text} onChange={this.textChangeHandler}/>
                </div>
                <button onClick={this.submitHandler}>Сохранить</button>
            </div>
        )
    }

    titleChangeHandler = (e) => {
        this.setState({title: e.target.value})
    }

    textChangeHandler = (e) => {
        this.setState({text: e.target.value})
    }

    submitHandler = () => {
        const { title, text } = this.state
        this.setState({title: '', text: ''})
    }

}

export default ArticleForm