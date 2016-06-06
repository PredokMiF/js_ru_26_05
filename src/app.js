import React from 'react'
import { render } from 'react-dom'

// Stores
import articleStore from './stores/articles'

//Components
import ArticleList from './components/ArticleList'
import InputText from './components/InputText'


render((
    <div>
        <div>
            <label>Фильтр</label>&nbsp;
            <InputText onChange={articleStore.filterChanged} autoFocus={true}/>
        </div>
        <div>
            <ArticleList/>
        </div>
    </div>
), document.getElementById('container'))