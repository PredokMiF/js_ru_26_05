import React, { Component } from 'react'


export default (CustomComponent, store, handler) => class DecoratedByStoreSubscriber extends Component {

    handler = handler.bind(this)

    componentDidMount () {
        store.on(this.handler)
    }

    componentWillUnmount () {
        store.off(this.handler)
    }

    render () {
        return <CustomComponent {...this.props}/>
    }
}