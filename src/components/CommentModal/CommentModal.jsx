import "./CommentModal.css"
import 'react-toastify/dist/ReactToastify.css';

import React, { useRef, useState } from "react"

import Button from "../Button/Button"
import commentActions from "../../store/comments/actions"
import { useDispatch } from "react-redux"

const { addComment } = commentActions
function CommentModal({ type, action }) {
  const [textLength, setTextLength] = useState(0)
  const comment = useRef(null)
  const dispatch = useDispatch()

  const handleComment =  (e) => {
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
    <>
      <div className={type} >
      <div className="close-modal" onClick={action}></div>
        <div className="comments-container">
          <form className="comment-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="text">New Comment</label>
              <textarea className="comment-text" id="text" ref={comment} maxLength={200} onChange={e => setTextLength(e.target.value.length)} rows="5"></textarea>
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
