import React from "react"
import CompanyHeader from "./CompanyHeader/CompanyHeader"
import Nav from "../../layouts/Nav/Nav"
import Footer from "../../layouts/Footer/Footer"
import CompanyMain from "./CompanyMain/CompanyMain"
import ListCategories from "./ListCategories/ListCategories"
import RenderCardsInCompany from "./ComicsCards/RenderComicsCards"


const Company = () => {

    return (
        <>
            <Nav/>
            <CompanyHeader/>
            <CompanyMain>
                <ListCategories/>
                <RenderCardsInCompany/>
            </CompanyMain>
            <Footer/>
        </>
    )

}

export default Company