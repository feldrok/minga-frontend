import React from "react"
import styles from "./ComicsHeader.module.css"

function ComicsHeader({ children }) {
    return (
        <div className={styles.container}>
            <div className={styles.headerContent}>
                <h1 className={styles.headerTitle}>Comics</h1>
                {children}
            </div>
        </div>
    )
}

export default ComicsHeader
