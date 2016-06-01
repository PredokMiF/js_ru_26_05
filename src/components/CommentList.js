import React, { PropTypes, Component } from 'react'
import { findDOMNode } from 'react-dom'
import Comment from './Comment'

class CommentList extends Component {

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
                ? this.state.comments.map(comment => <Comment key={comment.id} {...comment}/>)
                //? this.state.comments.map(comment => <Comment id={comment.id} name={comment.name} text={comment.text}/>)
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
        //вот это можно заменить на this.state.comments.concat(...) все хорошо, с добавлением забежали на перед, решение хорошее но в реально жизни так не делают
        comments.push({id:Date.now(), name:'Вы', text:this.state.input})
        this.setState({input: '', comments: comments, isOpen:true})
    }
}

CommentList.propTypes = {
    comments: PropTypes.array
}

export default CommentList
