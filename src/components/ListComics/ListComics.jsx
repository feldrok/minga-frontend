import CategoryFilters from "../CategoryFilters/CategoryFilters"
import ComicCards from "../ComicCards/ComicCards"
import ExploreCard from "../ExploreCard/ExploreCard"
import React from "react"
import styles from "./ListComics.module.css"

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
        </div>
    )
}

export default ListComics
