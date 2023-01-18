import "./AuthorCards.css"

import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { Link } from "react-router-dom"
import comicActions from "../../store/comics/actions.js"
import { useParams } from "react-router"

const { get_comics_from_author } = comicActions

const AuthorCards = () => {
    const [isToggled, setIsToggled] = useState(false)
    const store = useSelector((store) => store.comics)
    const comics = store.comics
    const dispatch = useDispatch()
    const params = useParams()

    const handleClick = () => {
        setIsToggled(!isToggled)
    }

    useEffect(() => {
        if (comics.length === 0) {
            dispatch(get_comics_from_author(params.id))
        }
    })

    const comicsF = comics?.filter((comic) => comic.author_id === params.id)

    let comicsFiltrados = comicsF

    console.log(comicsFiltrados)

    switch (isToggled) {
        case false:
            comicsFiltrados = [...comicsF].sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            )
            break
        case true:
            comicsFiltrados = [...comicsF].sort(
                (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
            )
            break
        default:
            comicsFiltrados = comicsF
    }

    return (
        <>
            <div className="containerSwitch">
                <p>New</p>
                <div className="toggle-container">
                    <button
                        className={`toggle-button ${isToggled ? "active" : ""}`}
                        onClick={handleClick}
                    >
                        <span className="toggle-button__slider"></span>
                    </button>
                </div>
                <p>Old</p>
            </div>
            <div className="containerCards">
                {comicsFiltrados.length < 4
                    ? comicsFiltrados.map((comic) => (
                          <div className="card" key={comic._id}>
                              <Link to={`/comic/${comic._id}`} key={comic._id}>
                                  <img
                                      className="imgCard"
                                      src={comic.photo}
                                      alt="manga"
                                  />
                              </Link>
                              <p className="titleComic">{comic.title}</p>
                          </div>
                      ))
                    : comicsFiltrados
                          .slice(0, comicsFiltrados.length / 2)
                          .map((comic) => (
                              <div className="card" key={comic._id}>
                                  <Link
                                      to={`/comic/${comic._id}`}
                                      key={comic._id}
                                  >
                                      <img
                                          className="imgCard"
                                          src={comic.photo}
                                          alt="manga"
                                      />
                                  </Link>
                                  <p className="titleComic">{comic.title}</p>
                              </div>
                          ))}
            </div>
        </>
    )
}

export default AuthorCards
