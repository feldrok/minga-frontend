import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams, useSearchParams } from "react-router-dom"

import ComicCard from "../ComicCard/ComicCard"
import comicActions from "../../store/comics/actions"
import styles from "./ComicCards.module.css"

const {
    getComics,
    getComicsByTitle,
    getComicsByCategory,
    getComicsByTitleAndCategory,
    get_comics_company,
    get_comics_from_cia,
    get_comics_from_company_author
} = comicActions

function ComicCards() {
    const comicsStore = useSelector((state) => state.comics)
    const categoryStore = useSelector((state) => state.categories)
    const dispatch = useDispatch()
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams()
    const params = useParams()

    const colors = ["red", "orange", "green", "purple", "blue", "yellow"]

    useEffect(() => {
        const currentParams = Object.fromEntries([...searchParams])
        if (
            location.search.includes("title") &&
            location.search.includes("category_id")
        ) {
            dispatch(
                getComicsByTitleAndCategory({
                    title: currentParams.title,
                    category_id: currentParams.category_id,
                })
            )
        } else if (location.search.includes("category_id")) {
            if (location.pathname.includes("/comics")) {
                dispatch(getComicsByCategory(currentParams.category_id))
            } else if (location.pathname.includes("/company")) {
                let obj = {
                    company_id: params.id,
                    limit: 5,
                    category_id: currentParams.category_id,
                }
                dispatch(get_comics_from_cia(obj))
            } else if(location.pathname.includes("/mycomics")){
                dispatch(get_comics_from_company_author({category_id: currentParams.category_id}))
            }
        } else if (location.search.includes("title")) {
            dispatch(getComicsByTitle(currentParams.title))
        } else {
            if (comicsStore.comics?.length === 0) {
                if (location.pathname.includes("/comics")) {
                    dispatch(getComics())
                } else if (location.pathname.includes("/company")) {
                    dispatch(get_comics_company({ company_id: params.id }))
                } else if(location.pathname.includes("/mycomics")){
                    dispatch(get_comics_from_company_author({}))
                }
            } else if (comicsStore.comics?.response?.length !== 0) {
                if (
                    location.pathname.includes("/comics") &&
                    comicsStore.storedComics !== "allComics"
                ) {
                    dispatch(getComics())
                } else if (
                    location.pathname.includes("/company") &&
                    comicsStore.storedComics !== "companyComics"
                ) {
                    console.log(comicsStore)
                    dispatch(get_comics_company({ company_id: params.id }))
                } else if (
                    location.pathname.includes("/mycomics") &&
                    comicsStore.storedComics !== "mycomics"
                ) {
                    console.log(comicsStore)
                    dispatch(get_comics_from_company_author({}))
                }
            }
        }
    }, [searchParams])

    const setCategoryColor = (id) => {
        if (categoryStore.categories.response?.length === 0) {
            return <h4>No category found</h4>
        } else {
            return colors[
                categoryStore.categories?.response?.findIndex(
                    (category) => category._id === id
                )
            ]
        }
    }

    const renderComics = () => {
        if (comicsStore.comics.success === false) {
            return <p>{comicsStore.comics?.message}</p>
        } else {
            return comicsStore.comics?.response?.map((comic) => (
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
