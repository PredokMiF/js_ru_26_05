import React, { PropTypes, Component } from 'react'

export default class InputText extends Component {

    static propTypes = {
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        autoFocus: PropTypes.bool,
        onChange: PropTypes.func,
        onEnter: PropTypes.func
    }

    state = {
        value: this.props.value || ''
    }

    render(){
        return <input
            type="text"
            value={this.state.value}
            autoFocus={this.props.autoFocus}
            onChange={this.onChangeHandler}
            onKeyPress={this.keyPressHandler}
        />
    }

    clear(){
        this.setState({value: ''})
    }

    onChangeHandler = (e)=>{
        const value = e.target.value;
        this.setState({value: value})
        this.props.onChange && this.props.onChange(value)
    }

    keyPressHandler = (e) => {
        if (e.key === 'Enter') {
            this.props.onEnter && this.props.onEnter(this.state.value)
        }
    }
}