import React from "react"
import { useSelector } from "react-redux"
import "./comicsCards.css"
import { Link } from "react-router-dom"


const ComicsCardsCompany = ({ title, image, comicCategory, link }) => {

    const comicStore = useSelector(store => store?.comics)
    const storeCategory = useSelector(store => store.categories)
    const catStored = storeCategory.categories?.response


    let categoryCard;

    const renderCategoryInCard = () => {
        if (comicStore?.comics.length === 0) {
            return <p>No category found</p>
        } else {
            return catStored?.map((cat) => {
                while (cat._id === comicCategory) {
                    categoryCard = cat?.name
                    break
                }
                return null
            })
        }
    }

    renderCategoryInCard()

    let colorCategory;
    let cardsCompany;

    const classCategory = (cat) => {
        if (cat === "marvel") {
            colorCategory = "catColorGreen"
            cardsCompany = "cardBorderGreen"
        }
        if (cat === "shonen") {
            colorCategory = "catColorRed"
            cardsCompany = "cardBorderRed"
        }
        if (cat === "seinen") {
            colorCategory = "catColorYellow"
            cardsCompany = "cardBorderYellow"
        }
        if (cat === "shojo") {
            colorCategory = "catColorBlue"
            cardsCompany = "cardBorderBlue"
        }
        if (cat === "dc") {
            colorCategory = "catColorPurple"
            cardsCompany = "cardBorderPurple"
        }
        if (cat === "manhwa") {
            colorCategory = "catColorOrange"
            cardsCompany = "cardBorderOrange"
        }
        if (cat === null) {
            return null
        }
    }

    classCategory(categoryCard)

    return (
        <>
            <div className={`cardsCompany ${cardsCompany}`}>
                <div className="titleAndButtons">
                    <div className="titleComicCard">
                        <Link className="pTitle" to={`/comic/${link}`}>
                            <p className="pTitle">{title}</p>
                        </Link>
                        <p className={colorCategory}>{categoryCard}</p>
                    </div>
                    <div className="buttonsComicCard">
                        <button className="butEditComic">Edit</button>
                        <button className="butDeleteComic">Delete</button>
                    </div>
                </div>
                <Link className="imgLink" to={`/comic/${link}`}>
                    <img src={image} alt={title} />
                </Link>
            </div>
        </>
    )
}

export default ComicsCardsCompany