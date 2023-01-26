import "./Comment.css"

import { useDispatch, useSelector } from "react-redux"

import Button from "../Button/Button"
import { Link } from "react-router-dom"
import NewComment from "../NewComment/NewComment"
import React from "react"
import commentActions from "../../store/comments/actions"
import { useParams } from "react-router-dom"
import { useState } from "react"

const { getComments, editComment, deleteComment } = commentActions

function Comment( {text, user_id, timestamp, id} ) {
  const user = useSelector((state) => state.users.users.find((u) => u._id === user_id) )
  const [showNewReply, setNewReply] = useState(false)
  const [editMode, setEdit] = useState(false)
  const [editText, setEditText] = useState(text)
  const commentsStore = useSelector((state) => state.comments)
  const params = useParams()
  const dispatch = useDispatch()
  const date = new Date(timestamp)
  const handleClick = () => {
    dispatch(getComments({commentable_id: id}))
  }
  const renderComment = () => {
      return (
        <div className="comment-container">
          <div className="comment-user-data">
            <img src={user?.photo} alt="user avatar" />
            <h3>{user?.mail}</h3>
          </div>
          <div className="comment-text">
            {editMode ? (
                <input placeholder="Edit your comment..."
                onChange={(e) => setEditText(e.target.value)}
                value={editText}
                />
            ):( 
              <p>{text}</p>
            )}
          </div>
          <div className="comment-footer">
            <div className="comment-footer-left">
              <div className="comment-counter">
                <img src="./repliesCounterIcon.png" alt="" />
                <span className="comment-counter-text">0</span>
              </div>
              <div className="comment-buttons">
                <div className="comment-reply">
                    <Link
                    to={`/pages/${params._id}/comments/${id}`}
                    text={"Reply"}
                    type={"reply-button"}
                    onClick={handleClick}
                    >
                      Reply
                    <img src="/replyIcon.png" alt="reply icon" />
                    </Link>
                    {
                      editMode ? (
                        <Button
                        text={"Save"}
                        type={"reply-button"}
                        action={() => {
                          setEdit(false)
                          dispatch(editComment({comment_id: id, text: editText}))
                        }}
                        ></Button>
                      ) : (
                        <Button
                        text={"Edit"}
                        type={"reply-button"}
                        action={() => setEdit(true)}
                        ></Button>
                      )
                    }
                      <Button
                        text={"Delete"}
                        type={"reply-button"}
                        action={() => {dispatch(deleteComment({comment_id: id}))
                        }}
                        ></Button>
                </div>
              </div>
            </div>
            <div className="comment-footer-right">
              <p>{date.toUTCString()}</p>
            </div>
          </div>
        </div>
      )
  }

  return (
    renderComment()
  )
}

export default Comment
