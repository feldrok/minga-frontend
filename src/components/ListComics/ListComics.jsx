import React, { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams, useSearchParams } from "react-router-dom"

import CategoryFilters from "../CategoryFilters/CategoryFilters"
import ExploreCard from "../ExploreCard/ExploreCard"
import comicActions from "../../store/comics/actions"
import styles from "./ListComics.module.css"

const { getComics, get_comics_company } = comicActions

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

function ListComics({ children }) {
    const listLoadRef = useRef()
    const categoryStore = useSelector((state) => state.categories)
    const comicsStore = useSelector((state) => state.comics)
    const dispatch = useDispatch()
    const location = useLocation()
    const params = useParams()

    const handleLoadMore = () => {
        const limit = comicsStore.comics?.response?.length
        if (location.pathname.includes("/comics")) {
            dispatch(getComics(limit + 4))
        } else if (location.pathname.includes("/company")) {
            dispatch(
                get_comics_company({ company_id: params.id, limit: limit + 3 })
            )
        }
    }

    const renderLoadMore = () => {
        if (
            categoryStore.activeCategory === "all" &&
            comicsStore.comics?.response?.length === comicsStore.limit
        ) {
            return (
                <div className={styles.loadContainer} ref={listLoadRef}>
                    <button onClick={handleLoadMore}>Load More</button>
                </div>
            )
        } else if (
            categoryStore.activeCategory === "all" &&
            comicsStore.comics?.response?.length < comicsStore.limit
        ) {
            return (
                <div className={styles.loadContainer} ref={listLoadRef}>
                    <p>No more comics available!</p>
                </div>
            )
        } else {
            return null
        }
    }

    console.log(comicsStore)
    console.log(categoryStore)
    return (
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <h2>Explore</h2>
            </div>
            {location.pathname.includes("/comics") ? (
                <div className={styles.exploreCardsContainer}>
                    {exploreCategories.map((category) => (
                        <ExploreCard
                            key={category.id}
                            title={category.title}
                            image={category.image}
                        />
                    ))}
                </div>
            ) : null}

            <div className={styles.filtersContainer}>
                <CategoryFilters />
            </div>
            <div className={styles.comicsContainer}>{children}</div>
            {renderLoadMore()}
        </div>
    )
}

export default ListComics
