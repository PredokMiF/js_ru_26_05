import React, { Component, PropTypes } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array
    };

    render() {
        const { comments } = this.props
        const commentsList = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)

        return (
            <ul>
                {commentsList}
            </ul>
        )
    }
}

export default CommentList