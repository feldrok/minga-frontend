import React, { useEffect } from "react"

import AuthorCards from "../../components/AuthorCards/AuthorCards"
import AuthorHeader from "../../components/AuthorHeader/AuthorHeader"
import AuthorMain from "../../components/AuthorMain/AuthorMain"
import Nav from "../../layouts/Nav/Nav"
import { useNavigate } from "react-router"

const Author = () => {
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
            <AuthorHeader />
            <AuthorMain>
                <AuthorCards />
            </AuthorMain>
        </>
    )
}

export default Author
