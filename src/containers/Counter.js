import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { increment } from '../AC/counter'

class Counter extends Component {
    static propTypes = {
        count: PropTypes.number,
        increment: PropTypes.func
    };

    render() {
        const { count } = this.props

        return (
            <di>
                <h1>{count}</h1>
                <a onClick={this.handleClick}>Increment me!</a>
            </di>
        )
    }

    handleClick = (e) => {
        e.preventDefault()
        this.props.increment()
    }
}

export default connect(
    (state) => ({
        count: state.count
    }),
    { increment }
)(Counter)