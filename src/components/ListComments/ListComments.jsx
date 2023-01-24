import "./ListComments.css"

import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"

import Comment from "../Comment/Comment"
import NewComment from "../NewComment/NewComment"
import React from "react"
import { getComments } from "../../store/comments/actions"
import { getUsers } from "../../store/users/actions"
import { useEffect } from "react"

function ListComments() {
    const dispatch = useDispatch()
    const { _id } = useParams()
    const commentsList = useSelector((state) => state.comments.comments.response)
    console.log(commentsList);
    console.log(_id);
    useEffect(() => {
        dispatch(getComments(_id))
        dispatch(getUsers())
    }, [])
    const navigate = useNavigate()
    const previousPage = () => {
        navigate(-1)
    }
    function onAddComment() {
        dispatch(getComments(_id))
    }
    let sortedList;
    if (commentsList) {
        sortedList = [...commentsList]
        sortedList.sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt))
    }
    return (
        <div className={"modal-overlay"}>
            <div className="close-modal" onClick={previousPage}></div>
            <div className="comments-container">
                {sortedList && sortedList.map(comment => {
                    return <Comment
                    text={comment.text}
                    user_id={comment.user_id}
                    timestamp={comment.createdAt}
                    />
                })}
                <NewComment onAddComment={onAddComment} />
            </div>
        </div>
    )
}

export default ListComments
