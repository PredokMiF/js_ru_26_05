import React, { Component } from 'react'


export default (CustomComponent) => class DecoratedByContentToggler extends Component {

    static defaultProps = {
        isOpend: false
    }

    state = {
        isOpen: this.props.isOpend
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.isOpen != nextProps.isOpend)
            this.setState({isOpen: nextProps.isOpend})
    }

    toggleOpen = (ev) => {
        if (ev && ev.preventDefault) ev.preventDefault()

        const isOpen = !this.state.isOpen;
        this.setState({
            isOpen: isOpen
        })
        this.props.onToggle && this.props.onToggle(isOpen)
    }

    render() {
        return <CustomComponent {...this.props} isOpen = {this.state.isOpen} toggleOpen = {this.toggleOpen}/>
    }

}