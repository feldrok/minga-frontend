import "./MyComics.css"

import { Link, useNavigate } from "react-router-dom"
import React, { useEffect } from "react"

import Nav from "../../layouts/Nav/Nav"

function MyComics() {
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
            <div className="container-my-comics">
                <div className="container_header">
                    <h1 className="my-comics-title">My comics</h1>
                </div>
                <div className="container-body">
                    <div className="container-modal-my-comics">
                        <Link to={"/newcomics"} className="link_new_comic">
                            Add comic
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyComics
