import './ListComments.css'

import NewComment from '../NewComment/NewComment'
import React from "react"

function CommentModal({ type, action }) {
  

  return (
    <>
      <div className={type} >
      <div className="close-modal" onClick={action}></div>
        <div className="comments-container">
          <NewComment />
        </div>
      </div>
    </>
  )
}

export default CommentModal
