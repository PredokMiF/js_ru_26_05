import React from 'react'
import { render } from 'react-dom'

// Stores
import articleStore from './stores/articles'

//Components
import ListFilter from './components/ListFilter'
import RangeOfDays from './components/RangeOfDays'
import ArticleList from './components/ArticleList'


render((
    <div>
        <div>
            <ListFilter
                valueKey="id"
                labelKey="title"
                multi={true}
                onChang={articleStore.filterById}
                options={articleStore.getList().map(article=>{return {id: article.id, title:article.title}})}
            />
            <RangeOfDays onChang={articleStore.filterByDate}/>
        </div>
        <div>
            <ArticleList/>
        </div>
    </div>
), document.getElementById('container'))