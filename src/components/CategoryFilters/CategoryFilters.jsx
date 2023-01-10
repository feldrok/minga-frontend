import CategoryFilter from "../CategoryFilter/CategoryFilter"
import React from "react"
import styles from "./CategoryFilters.module.css"

const categories = [
    {
        id: 2,
        title: 'Shonen',
        color: 'red',
    },
    {
        id: 3,
        title: 'Seinen',
        color: 'orange'
    },
    {
        id: 4,
        title: 'Shojo',
        color: 'green'
    },
    {
        id: 5,
        title: 'Kodomo',
        color: 'purple'
    }
]

function CategoryFilters() {
    return (
        <div className={styles.container}>
            {categories.map((category) => (
                <CategoryFilter key={category.id} title={category.title} color={category.color} />
            ))}
        </div>
    )
}

export default CategoryFilters
