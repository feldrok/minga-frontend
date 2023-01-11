import ComicCard from "../ComicCard/ComicCard"
import React from "react"
import styles from "./ComicCards.module.css"
import { useSelector } from "react-redux"

function ComicCards() {
    const comicsStore = useSelector((state) => state.comics)
    const categoryStore = useSelector((state) => state.categories)

    const colors = ["red", "orange", "green", "purple", "blue", "yellow"]

    const setCategoryColor = (id) => {
        if (categoryStore.categories.response?.length === 0) {
            return <h4>No category found</h4>
        } else {
            return colors[categoryStore.categories.response?.findIndex((category) => category._id === id)]
        }
    }
    
    const renderComics = () => {
        if (comicsStore.comics.response?.length === 0) {
            return <p>There are no comics</p>
        } else {
            return comicsStore.comics.response?.map((comic) => (
                <div className={styles.container} key={comic.title}>
                    <ComicCard
                        link={comic._id}
                        comicCategory={comic.category_id}
                        title={comic.title}
                        color={setCategoryColor(comic.category_id)}
                        image={comic.photo}
                    />
                </div>
            ))
        }
    }

    return <>{renderComics()}</>
}

export default ComicCards
