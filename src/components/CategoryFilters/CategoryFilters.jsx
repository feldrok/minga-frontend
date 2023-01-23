import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    useLocation,
    useNavigate,
    useParams,
    useSearchParams,
} from "react-router-dom"

import CategoryFilter from "../CategoryFilter/CategoryFilter"
import categoryActions from "../../store/categories/actions"
import comicActions from "../../store/comics/actions"
import styles from "./CategoryFilters.module.css"

const { getCategories, setActiveCategory } = categoryActions
const { getComics, get_comics_company } = comicActions

function CategoryFilters() {
    const [active, setActive] = useState("")
    const categoryStore = useSelector((state) => state.categories)
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const params = useParams()

    useEffect(() => {
        dispatch(getCategories())
        //eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (
            (location.pathname.includes("/comics") ||
                location.pathname.includes("/company")) &&
            categoryStore.activeCategory === "all"
        ) {
            setActive(styles.active)
        } else if (categoryStore.activeCategory !== "all") {
            setActive("")
        }
        //eslint-disable-next-line
    }, [location, categoryStore.activeCategory])

    const showAllComics = () => {
        setSearchParams("")
        dispatch(setActiveCategory("all"))
        if (location.pathname.includes("/comics")) {
            dispatch(getComics({ limit: 10 }))
        } else if (location.pathname.includes("/company")) {
            dispatch(get_comics_company({ company_id: params.id }))
        }
    }

    const colors = ["red", "orange", "green", "purple", "blue", "yellow"]

    return (
        <div className={styles.container}>
            <button
                value={""}
                onClick={showAllComics}
                className={`${styles.allButton} ${active} `}
            >
                {"all"}
            </button>
            {categoryStore.categories?.response?.map((category) => (
                <CategoryFilter
                    key={category._id}
                    title={category.name}
                    color={
                        colors[
                            categoryStore.categories?.response.indexOf(category)
                        ]
                    }
                    value={category._id}
                />
            ))}
        </div>
    )
}

export default CategoryFilters
