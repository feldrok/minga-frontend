import { Link } from "react-router-dom"
import React from "react"
import styles from "./ComicCard.module.css"
import { useSelector } from "react-redux"

function ComicCard({ title, image, link, comicCategory, color }) {
    const categoryStore = useSelector((state) => state.categories)
    const comicStore = useSelector((state) => state.comics)

    const renderCategoryType = () => {
        if (comicStore.comics.response?.length === 0) {
            return <h4>No category found</h4>
        } else {
            return categoryStore.categories.response?.map((category) => {
                if (category._id === comicCategory) {
                    return <h4 className={styles.comicCategory} key={category._id}>{category.name}</h4>
                } else {
                    return null
                }
            })
        }
    }

    if (color === 'red') {
        color = styles.red
    } else if (color === 'orange') {
        color = styles.orange
    } else if (color === 'green') {
        color = styles.green
    } else if (color === 'purple') {
        color = styles.purple
    } else if (color === 'blue') {
        color = styles.blue
    } else if (color === 'yellow') {
        color = styles.yellow
    }

    return (
        <Link className={styles.container} to={`/comics/${link}`}>
            <div className={`${styles.textContainer} ${color} `}>
                <h3>{title}</h3>
                {renderCategoryType()}
            </div>
            <div className={styles.imageContainer}>
                <img src={image} alt="Comic cover" />
            </div>
        </Link>
    )
}

export default ComicCard
