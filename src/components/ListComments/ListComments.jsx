import './ListComments.css'

import Comment from '../Comment/Comment'
import { Link } from "react-router-dom"
import NewComment from '../NewComment/NewComment'
import React from "react"

function ListComments() {
  return (
      <div className={"modal-overlay"} >
      <Link className="close-modal" to={"/"}></Link>
        <div className="comments-container">
          <Comment />
          <NewComment />
        </div>
      </div>  )
}

export default ListComments