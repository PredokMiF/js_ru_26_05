import React, { Component } from 'react'


export default (CustomComponent) => class DecoratedByContentToggler extends Component {

    static defaultProps = {
        isOpend: false
    }

    state = {
        isOpen: this.props.isOpend
    }

    componentWillReceiveProps(nextProps) {
        //это вообще ужасный паттерн, и делать стейт зависимым от пропсов стоит только когда другого выбора совсем нет
        //иначе вы будете бороться с кучей подобных багов
        //конкретно в этом случае вы ничего не починили, а проблема в том, что при добавлении комента все дерево перестраивается
        //И вы так и передаете сверху isOpen={false} хотя в стейте у вас isOpen={true}. Вот и закрываються они придобавлении.
        //Всегда сохраняйте single source of truth - а у вас вышло 2 источника одних данных
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
