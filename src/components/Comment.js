import React, { PropTypes, Component } from 'react'

//Styles
import './Comment.css'


export default function Comment (props) {
    return <p className="comment">
        <span className="author-name">{props.name}</span>&nbsp;
        {props.text}
    </p>
}

Comment.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string
}