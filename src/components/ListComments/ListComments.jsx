import './ListComments.css'

import Comment from '../Comment/Comment'
import NewComment from '../NewComment/NewComment'
import React from "react"
import { useNavigate } from "react-router"

function ListComments() {
  const navigate = useNavigate()

  const previousPage = () => {
    navigate(-1)
  }

  return (
      <div className={"modal-overlay"} >
      <div className="close-modal" onClick={previousPage}></div>
        <div className="comments-container">
          <Comment />
          <NewComment />
        </div>
      </div>  )
}

export default ListComments