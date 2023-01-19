import { Link as Anchor } from "react-router-dom"
import React from "react"
import styles from "./ChapterCard.module.css"
import { useSelector } from "react-redux"

const ChapterCard = ({ title, chapterId, order }) => {
    const comicStore = useSelector((store) => store.comics)

    return (
        <div className={styles.container}>
            <div className={styles.container_card}>
                <div className={styles.container_img}>
                    <img
                        className={styles.imagen}
                        src={comicStore.comic.response?.photo}
                        alt={title}
                    />
                </div>
                <div className={styles.container_title}>
                    <p>Chapter #{order}</p>
                    <p className={styles.title}> {title} </p>
                </div>
                <div className={styles.container_button}>
                    <Anchor
                        to={`/pages/${chapterId}`}
                        className={styles.button}
                    >
                        Read
                    </Anchor>
                </div>
            </div>
        </div>
    )
}

export default ChapterCard
