import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import ComicCard from "../ComicCard/ComicCard"
import comicActions from "../../store/comics/actions"
import styles from "./ComicCards.module.css"
import { useSearchParams } from "react-router-dom"

const {
    getComics,
    getComicsByTitle,
    getComicsByCategory,
    getComicsByTitleAndCategory,
} = comicActions

function ComicCards() {
    const comicsStore = useSelector((state) => state.comics)
    const dispatch = useDispatch()

    const [searchParams] = useSearchParams()
    
    useEffect(() => {
        const currentParams = Object.fromEntries([...searchParams])
        if (currentParams.title && currentParams.category_id) {
            dispatch(getComicsByTitleAndCategory({ title: currentParams.title, category_id: currentParams.category_id }))
        } else if (currentParams.category_id) {
            dispatch(getComicsByCategory(currentParams.category_id))
        } else if (currentParams.title) {
            dispatch(getComicsByTitle(currentParams.title))
        } else {
            dispatch(getComics(comicsStore.limit))
        }
    }, [searchParams])

    const renderComics = () => {
        if (comicsStore.comics.response?.length === 0) {
            return <p>There are no comics</p>
        } else {
            return comicsStore.comics.response?.map((comic) => (
                <div className={styles.container} key={comic._id}>
                    <ComicCard title={comic.title} image={comic.photo} />
                </div>
            ))
        }
    }

    return <>{renderComics()}</>
}

export default ComicCards
