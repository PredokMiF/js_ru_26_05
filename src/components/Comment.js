import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { removeComment } from '../AC/comment'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object,
        removeComment: PropTypes.func
    };

    render() {
        const {comment: { text, user }} = this.props
        return (
            <div>{text} <b>by {user}</b> <a href="#" onClick={this.removeHandler}>Delete</a></div>
        )
    }

    removeHandler = (e) => {
        const { id } = this.props.comment

        e.preventDefault()
        this.props.removeComment(id)
    }
}

export default connect(
    null,
    {removeComment}
)(Comment)