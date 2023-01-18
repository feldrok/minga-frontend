import React from "react"
import AuthorHeader from "../../components/Author/AuthorHeader/AuthorHeader"
import NavAuthor from "../../components/Author/NavAuthor/NavAuthor"
import AuthorMain from "../../components/Author/AuthorMain/AuthorMain"
import AuthorCards from "../../components/Author/AuthorCards/AuthorCards"


const Author = () => {

    return (
        <>
            <NavAuthor/>
            <AuthorHeader/>
            <AuthorMain>
                <AuthorCards/>
            </AuthorMain>
        </>
    )

}

export default Author