import React from "react"
import { useSelector } from "react-redux"
import ComicsCardsCompany from "./ComicsCards"
import "./comicsCards.css"

const RenderCardsInCompany = () =>{

    const comicStore = useSelector(store => store.comics)

    const renderCategoryInCard = () => {
        if (comicStore.comics?.success === false) {
            return <p className="pNotFound">COMICS NOT FOUND</p>
        } else {
            return comicStore.comics.response?.map((comic) => (
                        <ComicsCardsCompany
                            key={comic.title}
                            title={comic.title}
                            image={comic.photo}
                            comicCategory={comic.category_id}
                            link={comic._id}
                        />
            ))

        }
    }

    return(
        <div className="containerCardsCompany">{renderCategoryInCard()}</div>
    )
}

export default RenderCardsInCompany