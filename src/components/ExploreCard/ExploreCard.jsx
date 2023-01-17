import React from "react"
import styles from "./ExploreCard.module.css"

function ExploreCard({ title, image }) {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="imagen" />
            <h3 className={styles.text}>{title}</h3>
        </div>
    )
}

export default ExploreCard
