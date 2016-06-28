import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Comment from './../components/Comment'
import { loadComments } from '../AC/comments'

class CommentListAll extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        total: PropTypes.number.isRequired,
        loading: PropTypes.bool.isRequired
    };

    componentDidMount() {
        const { params: { page } } = this.props
        this.props.loadComments(page)
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.params.page!=nextProps.params.page)
            this.props.loadComments(nextProps.params.page)
    }

    render() {
        return (
            <div>
                {this.props.loading ? 'Загрузка...' : this.getList()}
                <ul>{this.props.loading ? '' : this.getPaging()}</ul>
            </div>
        )
    }

    getPaging() {
        const { total, size } = this.props
        const pages = Math.ceil( total / size )
        let list = []
        for (let page = 1; page<=pages; page++)
            list.push(<li key={page}><Link to={`/comments/${page}`}>{page}</Link></li>)
        return list
    }

    getList() {
        const items = this.props.comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <div>
            <ul>{items}</ul>
        </div>
    }
}

export default connect(state => ({
    comments: state.commentsAll.entities,
    total: state.commentsAll.total,
    size: state.commentsAll.size,
    loading: state.commentsAll.loading
}),  { loadComments })(CommentListAll)