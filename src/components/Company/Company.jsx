import React from "react"
import CompanyHeader from "./CompanyHeader/CompanyHeader"
import Nav from "../../layouts/Nav/Nav"
import Footer from "../../layouts/Footer/Footer"
import CompanyMain from "./CompanyMain/CompanyMain"
import ListCategories from "./ListCategories/ListCategories"


const Company = () => {

    return (
        <>
            <Nav/>
            <CompanyHeader/>
            <CompanyMain>
                <ListCategories/>
            </CompanyMain>
            <Footer/>
        </>
    )

}

export default Company