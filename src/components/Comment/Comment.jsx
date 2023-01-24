import "./Comment.css"

import { Link } from "react-router-dom"
import React from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

function Comment( {text, user_id, timestamp} ) {
  const user = useSelector((state) => state.users.users.find((u) => u._id === user_id) )
  const commentsStore = useSelector((state) => state.comments)
  const params = useParams()
  const date = new Date(timestamp)
  const renderComment = () => {
    if (commentsStore.comments.success === true) {
      return (
        <div className="comment-container">
          <div className="comment-user-data">
            <img src={user?.photo} alt="user avatar" />
            <h3>{user?.mail}</h3>
          </div>
          <div className="comment-text">
            <p>{text}</p>
          </div>
          <div className="comment-footer">
            <div className="comment-footer-left">
              <div className="comment-counter">
                <img src="./repliesCounterIcon.png" alt="" />
                <span className="comment-counter-text">0</span>
              </div>
              <div className="comment-buttons">
                <div className="comment-reply">
                  <Link  className="comment-reply-button" to={`/pages/${params._id}/comments/${commentsStore.comments.response._id}`}>Reply</Link>
                  <img src="./replyIcon.png" alt="" />
                </div>
              </div>
            </div>
            <div className="comment-footer-right">
              <p>{date.toUTCString()}</p>
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
