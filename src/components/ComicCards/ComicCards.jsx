import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import ComicCard from "../ComicCard/ComicCard"
import comicActions from "../../store/comics/actions"

const { getComics, getComicsByTitle } = comicActions

function ComicCards() {
    const comicsStore = useSelector((state) => state.comics)
    const dispatch = useDispatch()

    useEffect(() => {
        if (comicsStore.comics.length === 0) {
            if (window.location.search) {
                const searchParams = new URLSearchParams(window.location.search)
                const title = searchParams.get("title")
                dispatch(getComicsByTitle(title))
            } else {
                dispatch(getComics())
            }
        }
        console.log(comicsStore)
    }, [comicsStore])

    const renderComics = () => {
        if (comicsStore.comics.response?.length === 0) {
            return <p>There are no comics</p>
        } else {
            return comicsStore.comics.response?.map((comic) => (
                <ComicCard key={comic._id} title={comic.title} image={comic.photo} />
            ))
        }
    }

    return (
        <>
            {
                renderComics()
            }
            {/* {comics.map((comic) => (
                <ComicCard key={comic.id} title={comic.title} />
            ))} */}
        </>
    )
}

export default ComicCards
