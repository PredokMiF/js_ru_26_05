import React from 'react'
import { render } from 'react-dom'

import ArticleList from './components/ArticleList'
import ArticleForm from './components/ArticleForm'


render((
    <div>
        <ArticleList/>
        <ArticleForm/>
    </div>
), document.getElementById('container'))