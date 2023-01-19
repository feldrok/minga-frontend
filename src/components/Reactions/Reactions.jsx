import { useDispatch, useSelector } from "react-redux"

import React from "react"
import reactionActions from "../../store/reactions/actions"
import styles from "./Reactions.module.css"

const { addReaction, getReactions } = reactionActions

function Reactions() {
    const storeReactions = useSelector((store) => store.reactions)
    const storeUser = useSelector((store) => store.user)
    const dispatch = useDispatch()

    console.log(storeUser)
    const handleClick = (e) => {
        let obj = {
            name: e.target.value,
            user_id: localStorage.getItem("id"),
        }
    }

    return (
        <div className={styles.container_emojis}>
            <button className={styles.emojis}>&#128077;</button>
            <button className={styles.emojis}> &#128078;</button>
        </div>
    )
}

export default Reactions
