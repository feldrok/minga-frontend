import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"

import CategoryFilter from "../CategoryFilter/CategoryFilter"
import categoryActions from "../../store/categories/actions"
import comicActions from "../../store/comics/actions"
import styles from "./CategoryFilters.module.css"

const { getCategories, setActiveCategory } = categoryActions
const { getComics } = comicActions


function CategoryFilters() {
    const [active, setActive] = useState('')
    const categoryStore = useSelector((state) => state.categories)
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getCategories())
        //eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (location.pathname === '/comics' && categoryStore.activeCategory === 'all') {
            setActive(styles.active)
        } else if (categoryStore.activeCategory !== 'all') {
            setActive('')
        }
        //eslint-disable-next-line
    }, [location, categoryStore.activeCategory])

    const showAllComics = () => {
        navigate('/comics')
        dispatch(setActiveCategory('all'))
        dispatch(getComics())
    }

    const colors = ["red", "orange", "green", "purple", "blue", "yellow"]

    return (
        <div className={styles.container}>
            <button value={""} onClick={showAllComics} className={`${styles.allButton} ${active} `}>
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
