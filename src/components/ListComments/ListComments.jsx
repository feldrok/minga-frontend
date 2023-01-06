import './ListComments.css'

import Comment from '../Comment/Comment'
import NewComment from '../NewComment/NewComment'
import React from "react"

function ListComments({ type, action }) {
  return (
    <>
      <div className={type} >
      <div className="close-modal" onClick={action}></div>
        <div className="comments-container">
          <Comment />
          <NewComment />
        </div>
      </div>
    </>
  )
}

export default ListComments