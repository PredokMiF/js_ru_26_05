import React from 'react'
import { render } from 'react-dom'

// Stores
import { articleStore } from './stores'

//Components
import ListFilter from './components/ListFilter'
import RangeOfDays from './components/RangeOfDays'
import ArticleList from './components/ArticleList'

/*
 <div>
 <ListFilter
 valueKey="id"
 labelKey="title"
 multi={true}
 onChang={articleStore.filterById}
 options={articleStore.getAll().map(article=>{return {id: article.id, title:article.title}})}
 />
 <RangeOfDays onChang={articleStore.filterByDate}/>
 </div>*/

render((
    <div>

        <div>
            <ArticleList/>
        </div>
    </div>
), document.getElementById('container'))