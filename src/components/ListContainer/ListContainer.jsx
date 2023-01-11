import React from "react"
import styles from "./ListContainer.module.css"

function ListContainer({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default ListContainer
