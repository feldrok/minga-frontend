import ComicsHeader from "../../components/ComicsHeader/ComicsHeader"
import ListComics from "../../components/ListComics/ListComics"
import ListContainer from "../../components/ListContainer/ListContainer"
import Nav from "../../layouts/Nav/Nav"
import React from "react"
import SearchInput from "../../components/SearchInput/SearchInput"
import styles from "./Comics.module.css"

function Comics() {
    return (
        <div className={styles.container}>
            <Nav />
            <ComicsHeader>
                <SearchInput />
            </ComicsHeader>
            <ListContainer>
                <ListComics />
            </ListContainer>
        </div>
    )
}

export default Comics
