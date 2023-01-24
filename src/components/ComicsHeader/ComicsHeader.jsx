import React from "react"
import styles from "./ComicsHeader.module.css"

function ComicsHeader({ children, header }) {
    return (
        <div className={styles.container}>
            <div className={styles.headerContent}>
                <h1 className={styles.headerTitle}>{header}</h1>
                {children}
            </div>
        </div>
    )
}

export default ComicsHeader
