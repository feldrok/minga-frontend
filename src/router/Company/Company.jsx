import ComicCards from "../../components/ComicCards/ComicCards"
import CompanyHeader from "../../components/CompanyHeader/CompanyHeader"
import ListComics from "../../components/ListComics/ListComics"
import ListContainer from "../../components/ListContainer/ListContainer"
import Nav from "../../layouts/Nav/Nav"
import React from "react"

const Company = () => {
    return (
        <>
            <Nav />
            <CompanyHeader />
            <ListContainer>
                <ListComics>
                    <ComicCards />
                </ListComics>
            </ListContainer>
        </>
    )
}

export default Company
