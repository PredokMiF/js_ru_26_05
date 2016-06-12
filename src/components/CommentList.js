import React, { PropTypes, Component } from 'react'
import { findDOMNode } from 'react-dom'

// AC
import { addComment } from '../AC/articleComment'

// Stores
import { commentsStore } from '../stores'

//Decorators
import listStoreSubscriber from '../decorators/listStoreSubscriber';
import contentToggler from '../decorators/contentToggler'

//Components
import Comment from './Comment'
import InputText from './InputText'



class CommentList extends Component {

    static propTypes = {
        parentId: PropTypes.string.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    render() {
        const comments = this.props.list.filter(item=>item.parentId===this.props.parentId)

        var body
        if (comments.length === 0) {
            body = <p style={{color: 'gray'}}>Ни кто ни чего еще не написал</p>
        } else if (this.props.isOpen) {
            body = comments.map(comment => <Comment key={comment.id} store={commentsStore} id={comment.id}/>)
        } else {
            body = <a href="javascript:void 0;" onClick={this.props.toggleOpen}>Показать все комментарии ({comments.length})</a>
        }

        return (
            <div>
                <div>
                    {body}
                </div>
                <div>
                    <InputText ref="addComment" onEnter={this.addComment} autoFocus={true}/>
                    <button onClick={this.addComment}>Добавить</button>
                </div>
            </div>
        )
    }

    addComment = () => {
        const text = this.refs.addComment.state.value
        this.refs.addComment.clear()

        addComment(this.props.parentId, 'Me', text)

        if (!this.props.isOpen)
            this.props.toggleOpen()
    }
}

export default listStoreSubscriber(contentToggler(CommentList), commentsStore)

