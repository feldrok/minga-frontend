import React from "react"
import styles from "./ReactionButton.module.css"

function ReactionButton({ action, state, children, value, style }) {
    return (
        <button
            onClick={action}
            value={value}
            className={`${styles.reaction} ${state ? styles.active : ""}`}
        >
            {children}
        </button>
    )
}

export default ReactionButton
