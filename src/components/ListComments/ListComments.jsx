import './ListComments.css'

import Comment from '../Comment/Comment'
import { Link } from "react-router-dom"
import NewComment from '../NewComment/NewComment'
import { useNavigate } from "react-router"
import React from "react"

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