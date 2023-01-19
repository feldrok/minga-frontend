import React, { useEffect } from "react"
import styles from "./Favourites.module.css"
import { useNavigate } from "react-router"
import Nav from "../../layouts/Nav/Nav"
import ComicsHeader from "../../components/ComicsHeader/ComicsHeader"
import SearchInput from "../../components/SearchInput/SearchInput"
import ListContainer from "../../components/ListContainer/ListContainer"
import ListComics from "../../components/ListComics/ListComics"
import ComicCards from "../../components/ComicCards/ComicCards"

function Favourites() {
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
            <ComicsHeader header={"Favourites"}>
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

export default Favourites
