import "./CommentModal.css"

import React, { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import Button from "../Button/Button"
import commentActions from "../../store/comments/actions"

const { addComment } = commentActions
function CommentModal({ type, action }) {
  const [textLength, setTextLength] = useState(0)
  const comment = useRef(null)
  const commentsStore = useSelector((state) => state.comments)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    let data = {
      text: comment.current.value,
      user_id: "63ac470c8d3a5803ae2889ff",
      chapter_id: "5f9f1b9b0b9b0c0017b0b0a0",
      commentable_id: "5f9f1b9b0b9b0c0017b0b0a0",
    }
    dispatch(addComment(data))

    comment.current.value = ""
    setTextLength(0)
  }

  console.log(commentsStore)

  return (
    <>
      <div className={type} >
      <div className="close-modal" onClick={action}></div>
        <div className="comments-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="text">New Comment</label>
              <textarea className="comment-text" id="text" ref={comment} maxlength={200} onChange={e => setTextLength(e.target.value.length)} rows="5"></textarea>
              <span className="text-length">{textLength}/200</span>
              <Button type={"comment-submit"} text={"Send"} />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CommentModal
