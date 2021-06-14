import React from 'react'

const Comment = ({comment}) => {
    return (
        <div className="comment_card">
            <span>{comment.email}</span>
            <span>{comment.comment}</span>
        </div>
    )
}

export default Comment
