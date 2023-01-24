import "./NewComment.css"

import React, { useRef, useState } from "react"

import commentActions from "../../store/comments/actions"
import { decodeToken } from "react-jwt"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"

const {addComment, getComments} = commentActions

function NewComment() {
  const [textLength, setTextLength] = useState(0)
  const comment = useRef(null)
  const dispatch = useDispatch()
  const params = useParams()
  console.log(params);
  const handleComment = (e) => {
    setTextLength(e.target.value.length)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let data = {
      text: comment.current.value,
      user_id: decodeToken(localStorage.getItem("token"))?.id,
      chapter_id: params._id,
    }
    let data2 = {
      text: comment.current.value,
      user_id: decodeToken(localStorage.getItem("token"))?.id,
      commentable_id: params.commentable_id
    }
    if (params.commentable_id !== undefined) {
      dispatch(addComment(data2))

    } else {
      dispatch(addComment(data))

    }
    comment.current.value = ""
    handleComment({ target: { value: "" } })
  }
  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <div className="comment-form-group">
        <span className="text-length">{textLength}/200</span>
        <div className="send-input">
          <input
            className="comment-input"
            placeholder="Say something here..."
            id="text"
            ref={comment}
            maxLength={200}
            onChange={(e) => setTextLength(e.target.value.length)}
          />
          <input type="submit" className="send-btn" value="" />
        </div>
      </div>
    </form>
  )
}

export default NewComment