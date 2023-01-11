import ComicCard from "../ComicCard/ComicCard"
import React from "react"
import styles from "./ComicCards.module.css"
import { useSelector } from "react-redux"

function ComicCards() {
    const comicsStore = useSelector((state) => state.comics)

    const renderComics = () => {
        if (comicsStore.comics.response?.length === 0) {
            return <p>There are no comics</p>
        } else {
            return comicsStore.comics.response?.map((comic) => (
                <div className={styles.container} key={comic.title}>
                    <ComicCard title={comic.title} image={comic.photo} />
                </div>
            ))
        }
    }

    return <>{renderComics()}</>
}

export default ComicCards
