import React, { Component as ReactComponent} from 'react'

import stores from '../stores'

import './pagination.css'

export default (storeName, loadAction, Component) => {
    const store = stores[storeName]

    return class Pagination extends ReactComponent {
        state = {
            limit: this.props.limit || 5,
            offset: this.props.offset || 0
        }

        componentDidMount = () => {
            const {limit, offset} = this.state
            loadAction({limit, offset})
        }

        render() {
            return <div>
                <Component {...this.props}/>
                <div>
                    {this.getPages()}
                </div>
            </div>
        }

        getPages () {
            const {limit, offset} = this.state
            const total = store.total

            const selectSize = <select onChange={this.sizeChanged}>{[5,10,20].map(tLimit=><option key={tLimit} value={tLimit} checked={tLimit==limit}>{tLimit}</option>)}</select>
            const maxPage = Math.floor(total / limit)
            let paging

            if (total > limit) {
                paging = []
                let i = 0
                while (i <= maxPage)
                    paging.push(<li key={i}><a onClick={this.pageHandler(i)}>{++i}</a></li>)
                paging = <ul>{paging}</ul>
            }

            return <div className="pagination-wrapper">{paging}{selectSize}</div>
        }

        sizeChanged = (e) => {
            const limit = +e.target.value
            const offset = Math.floor(this.state.offset / limit) * limit

            this.setState({limit, offset})
            loadAction({limit, offset})
        }

        pageHandler = (pageNum) => {
            return (e) => {
                const { limit } = this.state
                const offset = pageNum * limit

                this.setState({offset})

                loadAction({limit, offset})
            }
        }
    }
}
