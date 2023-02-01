import React, { useState, useEffect } from "react"
import styles from "./FavouriteReaction.module.css"
import { useDispatch, useSelector } from "react-redux"
import reactionActions from "../../store/reactions/actions"
import { useParams } from "react-router"
const { addReaction } = reactionActions

function FavouriteReaction() {
    const [favourite, setFavourite] = useState()
    const storeReactions = useSelector((store) => store.reactions)
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        if (storeReactions?.reactions?.response?.reacted?.favourites === true) {
            setFavourite(true)
        } else if (
            storeReactions.reactions?.response?.reacted?.favourites === false
        ) {
            setFavourite(false)
        }
    }, [storeReactions])

    const handleClick = async (e) => {
        await dispatch(
            addReaction({
                comic_id: params.id,
                name: e.target.value,
            })
        )
        setFavourite(!favourite)
    }

    return (
        <div className={styles.container}>
            <button
                onClick={handleClick}
                value={"favourite"}
                className={`${styles.favourite} ${
                    favourite ? styles.active : ""
                }`}
            >
                &#128150;
            </button>
            {favourite ? (
                <p className={styles.text}>Remove from favourites</p>
            ) : (
                <p className={styles.text}>Add to favourites</p>
            )}
        </div>
    )
}

export default FavouriteReaction
