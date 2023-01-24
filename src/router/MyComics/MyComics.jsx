import React, { useEffect } from "react"

import ComicCards from "../../components/ComicCards/ComicCards"
import MyComicsHeader from "../../components/MyComicsHeader/MyComicsHeader"
import ListComics from "../../components/ListComics/ListComics"
import ListContainer from "../../components/ListContainer/ListContainer"
import Nav from "../../layouts/Nav/Nav"
import { useNavigate } from "react-router-dom"

const MyComics = () => {

    const navigate = useNavigate()
    useEffect(() => {
        let token = localStorage.getItem("token")
        if (!token || token === undefined) {
            navigate("/")
        }
    })
    return (
        <>
            <Nav />
            <MyComicsHeader />
            <ListContainer>
                <ListComics>
                    <ComicCards/>
                </ListComics>
            </ListContainer>
        </>
    )
}

export default MyComics
