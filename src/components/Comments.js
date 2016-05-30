import React, { PropTypes, Component } from 'react'
import { findDOMNode } from 'react-dom'

class Comments extends Component {

    state = {
        isOpen: false,
        comments: [],
        input: ""
    }

    componentWillMount = () => {
        this.setState({comments: this.props.comments ? this.props.comments.slice() : []})
    }

    render() {
        const comments =
            this.state.isOpen
                ? this.state.comments.map(comment =>
                    <p key={comment.id} style={{marginLeft: "12px", fontSize:"12px", lineHeight: "12px"}}>
                        <span style={{color: 'gray'}}>{comment.name}</span>&nbsp;
                        {comment.text}
                    </p>)
                : this.state.comments.length
                    ? <a href="javascript:void 0;" onClick={this.showComments}>Показать все комментарии ({this.state.comments.length})</a>
                    : <p style={{color: 'gray'}}>Ни кто ни чего еще не написал</p>

        return (
            <div>
                <div>
                    {comments}
                </div>
                <div>
                    <input autoFocus type="text" value={this.state.input} onChange={this.typing} onKeyPress={this.keyPressHandler}/>
                    <button onClick={this.addComment}>Добавить</button>
                </div>
            </div>
        )
    }

    showComments = () => {
        this.setState({isOpen: true})
    }

    typing = (ev) => {
        this.setState({input: ev.target.value})
    }

    keyPressHandler = (e) => {
        if (e.key === 'Enter') {
            this.addComment();
        }
    }

    addComment = () => {
        let comments = this.state.comments.slice();
        comments.push({id:Date.now(), name:'Вы', text:this.state.input})
        this.setState({input: '', comments: comments, isOpen:true})
    }
}

Comments.propTypes = {
    comments: PropTypes.array
}

export default Comments