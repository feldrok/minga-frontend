import "./MyComics.css"
import { Link } from "react-router-dom"
import Nav from "../../layouts/Nav/Nav"
import React from "react"

function Comics() {
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

export default Comics
