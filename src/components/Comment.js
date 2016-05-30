import React, { PropTypes, Component } from 'react'

function Comment (props) {
    return <p style={{marginLeft: "12px", fontSize:"12px", lineHeight: "12px"}}>
        <span style={{color: 'gray'}}>{props.name}</span>&nbsp;
        {props.text}
    </p>
}

Comment.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Comment