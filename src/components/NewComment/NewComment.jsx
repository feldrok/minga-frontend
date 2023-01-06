import "./NewComment.css"

import React, { useRef, useState } from "react"

import Button from "../Button/Button"
import commentActions from "../../store/comments/actions"
import { useDispatch } from "react-redux"

const { addComment } = commentActions

function NewComment() {
  const [textLength, setTextLength] = useState(0)
  const comment = useRef(null)
  const dispatch = useDispatch()

  const handleComment = (e) => {
    setTextLength(e.target.value.length)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let data = {
      text: comment.current.value,
      user_id: "63ac470c8d3a5803ae2889ff",
      chapter_id: "5f9f1b9b0b9b0c0017b0b0a0",
      commentable_id: "5f9f1b9b0b9b0c0017b0b0a0",
    }

    await dispatch(addComment(data))
    // console.log(sendDispatch)

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
