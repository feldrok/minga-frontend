import React from "react"
import styles from "./ComicCard.module.css"

function ComicCard({ title, image }) {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <h4>Type</h4>
            </div>
            <div className={styles.imageContainer}>
                <img src={image} alt="Comic cover" />
            </div>
        </div>
    )
}

export default ComicCard
