import React, { useEffect } from "react"

import Carousel from "../../components/Carousel/Carousel"
import ComicCards from "../../components/ComicCards/ComicCards"
import ComicsHeader from "../../components/ComicsHeader/ComicsHeader"
import ListComics from "../../components/ListComics/ListComics"
import ListContainer from "../../components/ListContainer/ListContainer"
import Nav from "../../layouts/Nav/Nav"
import SearchInput from "../../components/SearchInput/SearchInput"
import styles from "./Comics.module.css"
import { useNavigate } from "react-router"

function Comics() {
    const navigate = useNavigate()
    useEffect(() => {
        let token = localStorage.getItem("token")
        if (!token || token === undefined) {
            navigate("/")
        }
    })
    return (
        <div className={styles.container}>
            <Nav />
            <ComicsHeader>
                <SearchInput />
            </ComicsHeader>
            <ListContainer>
                <ListComics>
                    <ComicCards />
                </ListComics>
            </ListContainer>
        </div>
    )
}

export default Comics
