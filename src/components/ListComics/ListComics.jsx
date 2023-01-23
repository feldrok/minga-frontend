import React, { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams, useSearchParams } from "react-router-dom"

import CategoryFilters from "../CategoryFilters/CategoryFilters"
import ExploreCard from "../ExploreCard/ExploreCard"
import comicActions from "../../store/comics/actions"
import styles from "./ListComics.module.css"

const { getComics, get_comics_company, get_comics_from_cia } = comicActions

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
    const [searchParams, setSearchParams] = useSearchParams()
    const params = useParams()

    const handleLoadMore = () => {
        const limit = comicsStore.comics?.response?.length
        if (location.pathname.includes("/comics")) {
            dispatch(getComics({ limit: limit + 4 }))
        } else if (location.pathname.includes("/company")) {
            dispatch(
                get_comics_company({ company_id: params.id, limit: limit + 3 })
            )
        }
    }

    const handleLoadMoreCategory = () => {
        const currentParams = Object.fromEntries([...searchParams])
        const limit = comicsStore.comics?.response?.length
        if (location.pathname.includes("/comics")) {
            dispatch(getComics({ limit: limit + 4 }))
        } else if (location.pathname.includes("/company")) {
            let obj = {
                company_id: params.id,
                limit: limit + 2,
                category_id: currentParams.category_id,
            }
            dispatch(get_comics_from_cia(obj))
        }
    }

    const renderLoadMore = () => {
        const currentParams = Object.fromEntries([...searchParams])
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
            currentParams.category_id &&
            comicsStore.comics?.response?.length === comicsStore.limit
        ) {
            return (
                <div className={styles.loadContainer} ref={listLoadRef}>
                    <button onClick={handleLoadMoreCategory}>Load More</button>
                </div>
            )
        } else if (
            currentParams.category_id &&
            comicsStore.comics?.response?.length < comicsStore.limit
        ) {
            return (
                <div className={styles.loadContainer} ref={listLoadRef}>
                    <p>No more comics available!</p>
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
