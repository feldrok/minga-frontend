import React from "react"
import styles from "./CategoryFilter.module.css"

function CategoryFilter({ title, color }) {

    if (color === 'red') {
        color = styles.red
    } else if (color === 'orange') {
        color = styles.orange
    } else if (color === 'green') {
        color = styles.green
    } else if (color === 'purple') {
        color = styles.purple
    }
    return (
        <label htmlFor={title} className={`${styles.container} ${color}`}>
            <input
                className={styles.checkbox}
                type="checkbox"
                id={title}
                name={title}
                value={title}
            />
            {title}
        </label>
    )
}

export default CategoryFilter
