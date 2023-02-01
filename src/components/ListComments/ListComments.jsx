import "./ListComments.css"

import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate, useParams } from "react-router"

import Comment from "../Comment/Comment"
import NewComment from "../NewComment/NewComment"
import React from "react"
import commentActions from "../../store/comments/actions"
import { getUsers } from "../../store/users/actions"
import { useEffect } from "react"

const {getComments} = commentActions

function ListComments() {
    const dispatch = useDispatch()
    const { _id, commentable_id } = useParams()
    const commentsStore = useSelector((state) => state.comments)
    console.log(commentsStore);
    const commentsList = useSelector((state) => state.comments.comments)
    const location = useLocation()
    useEffect(() => {
        if (commentable_id !== undefined) {
            dispatch(getComments({commentable_id: commentable_id}))
        } else {
            dispatch(getComments({chapter_id: _id}))
        }
        dispatch(getUsers())
    }, [commentsStore.comment, location.pathname])
    const navigate = useNavigate()
    const previousPage = () => {
        navigate(-1)
    }
    const handleLoadMore = () => {
        const limit = commentsList?.length
        if (commentable_id !== undefined) {
            dispatch(getComments({commentable_id: commentable_id, limit: limit + 2}))
        } else {
            dispatch(getComments({chapter_id: _id, limit: limit + 2}))
        }
    }
    return (
        <div className={"modal-overlay"}>
            <div className="close-modal" onClick={previousPage}></div>
            <div className="comments-container">
                <div className="scroll-container">
                {commentsList && commentsList.map(comment => {
                    return <Comment
                    text={comment.text}
                    user_id={comment.user_id}
                    timestamp={comment.createdAt}
                    id={comment._id}
                    key={comment._id}
                    />
                })}
                {/** en la linea 47, JS va a chequear si existe una lista de comentarios, y luego los renderiza si los hay.
                 * El motivo por el cual usé esta sintaxis es para ahorrarle trabajo al codigo; si no hay comentarios, JS no se va a molestar en hacer el mapeo */}
                                <div className="loadContainer">
                    <button onClick={handleLoadMore}>Load More</button>
                </div>
                </div>
                <div className="new-comment-container">
                    <NewComment />
                </div>
            </div>
        </div>
    )
}

export default ListComments
