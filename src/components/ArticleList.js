import React, { PropTypes, Component } from 'react'

// Stores
import { articleStore } from '../stores'

//Components
import Select from 'react-select';
import DayPickerRu from './DayPickerRu'
import Article from './Article'

//Styles
import 'react-select/dist/react-select.css';
import './ArticleList.css'

//Utils
import { DateUtils } from 'react-day-picker';



export default class ArticleList extends Component {

    state = {
        list: articleStore.getAll(),
        activeArticleId: null,
        filterList: [],
        filterRangeOfDays: {}
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

        const listFull = this.state.list
        const filters = <div>
            <Select
                value={this.state.filterList}
                onChange={this.listFilterHandler}
                valueKey="id"
                labelKey="title"
                multi={true}
                options={listFull.map(article=>{return {id: article.id, title:article.title}})}
            />
            <DayPickerRu
                onDayClick={this.rangeOfDaysHandler}
                numberOfMonths={3}
                selectedDays={day => DateUtils.isDayInRange(day, this.state.filterRangeOfDays)}
            />
        </div>

        return (
            <div>
                {filters}
                <ul className="article-list">
                    {this.getBody()}
                </ul>
            </div>
        )
    }

    getBody () {
        const filterList = this.state.filterList.map(item=>item.id);
        const {from, to} = this.state.filterRangeOfDays;

        const list = this.state.list.filter((item) => {

            if (filterList && filterList.length && !filterList.includes(item.id))
                return false;

            const date = new Date(item.date)
            if (from && to && !(from <= date && date <= to))
                return false

            return true;
        })

        return list.length
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
    }

    listFilterHandler = (value) => {
        this.setState({filterList:value})
    }

    rangeOfDaysHandler = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state.filterRangeOfDays);
        this.setState({filterRangeOfDays:range})
    }

}
