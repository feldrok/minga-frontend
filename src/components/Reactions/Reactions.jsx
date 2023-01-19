import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { decodeToken } from "react-jwt"
import reactionActions from "../../store/reactions/actions"
import styles from "./Reactions.module.css"
import { useParams } from "react-router"
import ReactionButton from "../ReactionButton/ReactionButton"

const { addReaction } = reactionActions

function Reactions() {
    const [like, setLike] = useState()
    const [dislike, setDislike] = useState()
    const [likes, setLikes] = useState()
    const [dislikes, setDislikes] = useState()
    const storeReactions = useSelector((store) => store.reactions)
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        if (storeReactions.reactions?.response?.reacted?.likes === true) {
            setLike(true)
        } else {
            setLike(false)
        }
        if (storeReactions.reactions?.response?.reacted?.dislikes === true) {
            setDislike(true)
        } else {
            setDislike(false)
        }
        setLikes(storeReactions.reactions?.response?.reactions.like.count)
        setDislikes(storeReactions.reactions?.response?.reactions.dislike.count)
    }, [storeReactions])

    const handleClick = async (e) => {
        await dispatch(
            addReaction({
                comic_id: params.id,
                user_id: decodeToken(localStorage.getItem("token"))?.id,
                name: e.target.value,
            })
        )
        if (e.target.value === "like") {
            setLike(!like)
            setLikes(like ? likes - 1 : likes + 1)
            setDislike(false)
            setDislikes(dislike ? dislikes - 1 : dislikes)
        } else if (e.target.value === "dislike") {
            setDislike(!dislike)
            setDislikes(dislike ? dislikes - 1 : dislikes + 1)
            setLike(false)
            setLikes(like ? likes - 1 : likes)
        } else if (e.target.value === "like" && dislike === true) {
            setLike(!like)
            setLikes(like ? likes - 1 : likes + 1)
            setDislike(false)
            setDislikes(dislike ? dislikes - 1 : dislikes + 1)
        } else if (e.target.value === "dislike" && like === true) {
            setDislike(!dislike)
            setDislikes(dislike ? dislikes - 1 : dislikes + 1)
            setLike(false)
            setLikes(like ? likes - 1 : likes + 1)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <ReactionButton
                    action={handleClick}
                    state={like}
                    value={"like"}
                >
                    &#128077;
                </ReactionButton>
                <p>{likes === 1 ? `${likes} like` : `${likes} likes`}</p>
            </div>
            <div className={styles.wrapper}>
                <ReactionButton
                    action={handleClick}
                    state={dislike}
                    value={"dislike"}
                >
                    &#128078;
                </ReactionButton>
                <p>
                    {dislikes === 1
                        ? `${dislikes} dislike`
                        : `${dislikes} dislikes`}
                </p>
            </div>
        </div>
    )
}

export default Reactions
