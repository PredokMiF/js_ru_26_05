import React from 'react'
import { render } from 'react-dom'

// Stores
import { articleStore } from './stores'

//Components
import ArticleList from './components/ArticleList'


render((
    <ArticleList/>
), document.getElementById('container'))