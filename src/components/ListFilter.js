import React, { PropTypes, Component } from 'react'

//Components
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class InputText extends Component {

    static propTypes = {
        multi: PropTypes.bool,
        labelKey: PropTypes.string,
        valueKey: PropTypes.string,
        options: PropTypes.array.isRequired,
        onChang: PropTypes.func
    }

    state = {
        value: null
    }

    render () {
        return (
            <Select
                value={this.state.value}
                onChange={this.logChange}

                labelKey={this.props.labelKey}
                valueKey={this.props.valueKey}
                multi={this.props.multi}
                options={this.props.options}
            />
        )
    }

    logChange = (value) => {
        this.setState({value: value});

        const outValue =
            value === null
                ? null
                : this.props.multi
                    ? value.map(value=>value[this.props.valueKey])
                    : value[this.props.valueKey]

        this.props.onChang && this.props.onChang(outValue)
    }

}





