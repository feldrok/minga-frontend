import React from "react"
import styles from "./EditDelete.module.css"

function EditDelete() {
    return (
        <div className={styles.container}>
            <button className={`${styles.button} ${styles.edit}`}>Edit</button>
            <button className={`${styles.button} ${styles.delete}`}>
                Delete
            </button>
        </div>
    )
}

export default EditDelete
