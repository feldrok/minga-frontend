import React, { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

import CategoryFilters from "../CategoryFilters/CategoryFilters"
import ComicCards from "../ComicCards/ComicCards"
import ExploreCard from "../ExploreCard/ExploreCard"
import comicActions from "../../store/comics/actions"
import styles from "./ListComics.module.css"

const { getComics } = comicActions

const exploreCategories = [
    {
        id: 1,
        title: "Adventurers",
        image: "./exploreAdventurers.png",
    },
    {
        id: 2,
        title: "Nostalgic",
        image: "./exploreNostalgic.png",
    },
    {
        id: 3,
        title: "Popular",
        image: "./explorePopular.png",
    },
]

function ListComics() {
    const listLoadRef = useRef()
    const comicsStore = useSelector((state) => state.comics)
    const dispatch = useDispatch()

    const handleLoadMore = () => {
        const limit = comicsStore.comics.response?.length
        dispatch(getComics(limit + 4))
    }

    const renderLoadMore = () => {
        if (window.location.search.includes("title") || window.location.search.includes("category")) {
            return null
        } else {
            return (
                <div className={styles.loadContainer} ref={listLoadRef}>
                    <button onClick={handleLoadMore}>Load More</button>
                </div>
            )
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <h2>Explore</h2>
            </div>
            <div className={styles.exploreCardsContainer}>
                {exploreCategories.map((category) => (
                    <ExploreCard
                        key={category.id}
                        title={category.title}
                        image={category.image}
                    />
                ))}
            </div>
            <div className={styles.filtersContainer}>
                <CategoryFilters />
            </div>
            <div className={styles.comicsContainer}>
                <ComicCards />
            </div>
            {renderLoadMore()}
        </div>
    )
}

export default ListComics
