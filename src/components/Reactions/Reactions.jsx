import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { decodeToken } from "react-jwt"
import reactionActions from "../../store/reactions/actions"
import styles from "./Reactions.module.css"
import { useParams } from "react-router"

const { addReaction, getReactions } = reactionActions

function Reactions() {
    const [like, setLike] = useState()
    const [dislike, setDislike] = useState()
    const storeReactions = useSelector((store) => store.reactions)
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        if (storeReactions.reactions?.length === 0) {
            dispatch(
                getReactions({
                    comic_id: params.id,
                    user_id: decodeToken(localStorage.getItem("token"))?.id,
                })
            )
        }
    }, [])

    const handleClick = async (e) => {
        if (e.target.value === "like") {
            setLike(true)
            setDislike(false)
        } else {
            setLike(false)
            setDislike(true)
        }
        await dispatch(
            addReaction({
                comic_id: params.id,
                user_id: decodeToken(localStorage.getItem("token"))?.id,
                name: e.target.value,
            })
        )
    }
    console.log(storeReactions)

    return (
        <div className={styles.container_emojis}>
            <button
                onClick={handleClick}
                value={"like"}
                className={`${styles.emojis} ${like ? styles.active : ""}`}
            >
                &#128077;
            </button>
            <button
                onClick={handleClick}
                value={"dislike"}
                className={`${styles.emojis} ${dislike ? styles.active : ""}`}
            >
                &#128078;
            </button>
        </div>
    )
}

export default Reactions
