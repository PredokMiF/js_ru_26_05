import React, { PropTypes } from 'react'

function Comment(props) {
    const { comment } = props
    return (
        <div>{comment.text || comment.get('text')} <b>by {comment.user || comment.get('user')}</b></div>
    )
}

Comment.propTypes = {
    comment: PropTypes.object.isRequired
}

export default Comment