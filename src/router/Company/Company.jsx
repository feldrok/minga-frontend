import CompanyHeader from "../../components/CompanyHeader/CompanyHeader"
import CompanyMain from "../../components/CompanyMain/CompanyMain"
import Footer from "../../layouts/Footer/Footer"
import ListCategories from "../../components/ListCategories/ListCategories"
import Nav from "../../layouts/Nav/Nav"
import React from "react"
import RenderCardsInCompany from "../../components/ComicsCards/RenderComicsCards"

const Company = () => {
    return (
        <>
            <Nav />
            <CompanyHeader />
            <CompanyMain>
                <ListCategories />
                <RenderCardsInCompany />
            </CompanyMain>
            <Footer />
        </>
    )
}

export default Company
