import "./Comment.css"

import { Link } from "react-router-dom"
import React from "react"
import { useSelector } from "react-redux"

function Comment() {
  const commentsStore = useSelector((state) => state.comments)

  const renderComment = () => {
    if (commentsStore.comments.success === true) {
      return (
        <div className="comment-container">
          <div className="comment-user-data">
            <img src="/userpic.png" alt="" />
            <h3>Ignacio Borraz</h3>
          </div>
          <div className="comment-text">
            <p>{commentsStore.comments.response?.text}</p>
          </div>
          <div className="comment-footer">
            <div className="comment-footer-left">
              <div className="comment-counter">
                <img src="./repliesCounterIcon.png" alt="" />
                <span className="comment-counter-text">0</span>
              </div>
              <div className="comment-buttons">
                <div className="comment-reply">
                  <Link  className="comment-reply-button" to={`/newcomment/${commentsStore.comments.response.commentable_id}`}>Reply</Link>
                  <img src="./replyIcon.png" alt="" />
                </div>
              </div>
            </div>
            <div className="comment-footer-right">
              <p>1 sec ago</p>
            </div>
          </div>
        </div>
      )
    } else {
      return <p>There are no comments</p>
    }
  }

  return (
    renderComment()
  )
}

export default Comment
