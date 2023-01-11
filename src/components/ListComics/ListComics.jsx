import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import CategoryFilters from "../CategoryFilters/CategoryFilters"
import ComicCards from "../ComicCards/ComicCards"
import ExploreCard from "../ExploreCard/ExploreCard"
import { browserHistory } from "react-router"
import comicActions from "../../store/comics/actions"
import styles from "./ListComics.module.css"
import { useSearchParams } from "react-router-dom"

const {
    getComics,
    getComicsByTitle,
    getComicsByCategory,
    getComicsByTitleAndCategory,
} = comicActions

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
    const [searchParams] = useSearchParams()

    useEffect(() => {
        const currentParams = Object.fromEntries([...searchParams])
        if (window.location.search.includes("title") && window.location.search.includes("category_id")) {
            dispatch(getComicsByTitleAndCategory({title: currentParams.title, category_id: currentParams.category_id}))
        } else if (window.location.search.includes("category_id")) {
            dispatch(getComicsByCategory(currentParams.category_id))
        } else if (window.location.search.includes("title")) {
            dispatch(getComicsByTitle(currentParams.title))
        } else {
            if (comicsStore.comics?.length === 0) {
                dispatch(getComics())
            }
        }
    }, [searchParams])

    const handleLoadMore = () => {
        const limit = comicsStore.comics.response?.length
        dispatch(getComics(limit + 4))
    }

    const renderLoadMore = () => {
        if (
            window.location.search.includes("title") ||
            window.location.search.includes("category")
        ) {
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
