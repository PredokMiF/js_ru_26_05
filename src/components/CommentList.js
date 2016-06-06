import React, { PropTypes, Component } from 'react'
import { findDOMNode } from 'react-dom'

// Stores
import articleCommentsStore from '../stores/articleComments'

// Decorators
import contentToggler from '../decorators/contentToggler'
import storeSubscriber from '../decorators/storeSubscriber'

//Components
import Comment from './Comment'
import InputText from './InputText'


class CommentList extends Component {

    static propTypes = {
        articleId: PropTypes.string.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    render() {
        const comments = articleCommentsStore.getList(this.props.articleId);

        var body;
        if (comments.length === 0) {
            body = <p style={{color: 'gray'}}>Ни кто ни чего еще не написал</p>
        } else if (this.props.isOpen) {
            body = comments.map(comment => <Comment key={comment.id} {...comment}/>)
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
        articleCommentsStore.addComment({
            articleId: this.props.articleId,
            text: text
        })
        if (!this.props.isOpen)
            this.props.toggleOpen()
    }
}

export default
    contentToggler(
        storeSubscriber(CommentList, articleCommentsStore, function () {this.forceUpdate()})
    )