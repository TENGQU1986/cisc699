import React from 'react'
import './Comment.css'

const Comment = ({comment}) => {
    return (
        <div className="comment_card">
            <span className="comment_author">{comment.email}</span>
            <h4>{comment.comment}</h4>
        </div>
    )
}

export default Comment
