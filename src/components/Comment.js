import React, { PropTypes, Component } from 'react'

//Styles
import './Comment.css'


export default function Comment (props) {
    const comment = props.store.getById(props.id)

    return <p className="comment">
        <span className="author-name">{comment.name}</span>&nbsp;
        {comment.text}
    </p>
}

Comment.propTypes = {
    store: PropTypes.object,
    id: PropTypes.number
}