import React, { Component } from 'react'


export default (CustomComponent, store) => class DecoratedByListStoreSubscriber extends Component {

    state = {
        list: store.getAll()
    }

    componentDidMount = () => {
        store.addChangeListener(this.storeUpdated)
    }

    componentWillUnmount = () => {
        store.removeChangeListener(this.storeUpdated)
    }

    storeUpdated = () => {
        this.setState({list:store.getAll()})
    }

    render() {
        return <CustomComponent {...this.props} list={this.state.list}/>
    }

}