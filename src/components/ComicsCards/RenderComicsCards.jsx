import "./comicsCards.css"

import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router"

import ComicsCardsCompany from "./ComicsCards"
import comicActions from "../../store/comics/actions"
import { useSearchParams } from "react-router-dom"

const { get_comics_company, get_comics_from_cia, getComics } = comicActions

const RenderCardsInCompany = () => {
    const comicsStore = useSelector((store) => store.comics)
    const dispatch = useDispatch()
    const location = useLocation()
    const params = useParams()
    const [searchParams] = useSearchParams()

    useEffect(() => {
        const currentParams = Object.fromEntries([...searchParams])
        if (location.search.includes("category_id")) {
            let obj = {
                company_id: params.id,
                limit: "",
                category_id: currentParams.category_id,
            }
            dispatch(get_comics_from_cia(obj))
        } else {
            if (comicsStore.comics?.length === 0) {
                if (location.pathname.includes("/comics")) {
                    dispatch(getComics())
                } else if (location.pathname.includes("/company")) {
                    dispatch(get_comics_company({ company_id: params.id }))
                }
            } else if (comicsStore.comics?.response?.length !== 0) {
                if (location.pathname.includes("/comics")) {
                    dispatch(getComics())
                } else if (location.pathname.includes("/company")) {
                    console.log(comicsStore)
                    dispatch(get_comics_company({ company_id: params.id }))
                }
            }
        }
    }, [])

    const renderCategoryInCard = () => {
        if (comicsStore.comics?.success === false) {
            return <p className="pNotFound">COMICS NOT FOUND</p>
        } else {
            return comicsStore.comics.response?.map((comic) => (
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

    return <div className="containerCardsCompany">{renderCategoryInCard()}</div>
}

export default RenderCardsInCompany
