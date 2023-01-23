import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    useLocation,
    useNavigate,
    useParams,
    useSearchParams,
} from "react-router-dom"

import categoryActions from "../../store/categories/actions"
import comicActions from "../../store/comics/actions"
import styles from "./CategoryFilter.module.css"

const { getComics, get_comics_from_cia } = comicActions
const { setActiveCategory } = categoryActions

function CategoryFilter({ title, color, value }) {
    const categoryStore = useSelector((state) => state.categories)
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const [active, setActive] = useState("")
    const [searchParams, setSearchParams] = useSearchParams()
    const params = useParams()

    if (color === "red") {
        color = styles.red
    } else if (color === "orange") {
        color = styles.orange
    } else if (color === "green") {
        color = styles.green
    } else if (color === "purple") {
        color = styles.purple
    } else if (color === "blue") {
        color = styles.blue
    } else if (color === "yellow") {
        color = styles.yellow
    }

    const updateURL = (e) => {
        e.preventDefault()
        const currentParams = Object.fromEntries([...searchParams])
        if (location.search.includes("title")) {
            setSearchParams({
                title: currentParams.title,
                category_id: e.target.getAttribute("value"),
            })
            dispatch(
                getComics({
                    title: currentParams.title,
                    category_id: e.target.getAttribute("value"),
                })
            )
        } else {
            setSearchParams({ category_id: e.target.getAttribute("value") })
            if (location.pathname === `/company/${params.id}`) {
                let obj = {
                    company_id: params.id,
                    limit: "",
                    category_id: e.target.getAttribute("value"),
                }
                dispatch(get_comics_from_cia(obj))
            } else if (location.pathname === `/comics`) {
                dispatch(
                    getComics({ category_id: e.target.getAttribute("value") })
                )
            }
        }
    }

    useEffect(() => {
        const currentParams = Object.fromEntries([...searchParams])
        if (currentParams.category_id === value) {
            setActive(styles.active)
            dispatch(setActiveCategory(currentParams.category_id))
        } else {
            setActive("")
        }
        if (!currentParams.category_id) {
            dispatch(setActiveCategory(categoryStore.activeCategory))
            if (categoryStore.activeCategory === value) {
                setActive(styles.active)
            } else {
                setActive("")
            }
        }
    }, [location])

    return (
        <button
            value={value}
            onClick={updateURL}
            className={`${styles.container} ${color} ${active} `}
        >
            {title}
        </button>
    )
}

export default CategoryFilter
