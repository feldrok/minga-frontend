import "./Carousel.css"

import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import Slide from "./Slide"
import comicActions from "../../store/comics/actions"

const { getComics } = comicActions

export default function Carousel() {
    const [slide, setSlide] = useState(0)
    const dispatch = useDispatch()
    const [isLogged, setIsLogged] = useState(false)

    const comicStore = useSelector((store) => store?.comics)

    useEffect(() => {
        dispatch(getComics(5))
        let token = localStorage.getItem("token")
        if (token || token === undefined) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }, [])

    let sortedComics = comicStore.comics?.response

    useEffect(() => {
        let interval = setInterval(() => {
            nextSlide()
        }, 3000)
        return () => clearInterval(interval)
    })

    const nextSlide = (e) => {
        setSlide(slide === sortedComics.length - 1 ? 0 : slide + 1)
    }
    const siguienteSlide2 = (e) => {
        e.preventDefault()
        setSlide(slide === sortedComics.length - 1 ? 0 : slide + 1)
    }
    const anteriorSlide = (e) => {
        e.preventDefault()
        setSlide(slide === 0 ? sortedComics.length - 1 : slide - 1)
    }

    const renderCarousel = () => {
        if (comicStore.comics.length === 0) {
            return <p>Loading</p>
        } else {
            return (
                <>
                    <div className="slideImage">
                        <Slide url={sortedComics[slide]?.photo} />
                        <div className="text">{sortedComics[slide]?.title}</div>
                    </div>
                </>
            )
        }
    }

    return (
        <div className="padre">
            <div className="carrusel">
                {isLogged ? renderCarousel() : <p>Loading</p>}
                <a href="." className="prev" onClick={anteriorSlide}>
                    &#10094;
                </a>
                <a href="." className="next" onClick={siguienteSlide2}>
                    &#10095;
                </a>
            </div>
        </div>
    )
}
