import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import CategoryFilter from "../CategoryFilter/CategoryFilter"
import categoryActions from "../../store/categories/actions"
import comicActions from "../../store/comics/actions"
import styles from "./CategoryFilters.module.css"

const { getCategories } = categoryActions
const { getComics } = comicActions


function CategoryFilters() {
    const categoryStore = useSelector((state) => state.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        if (categoryStore.categories?.length === 0) {
            dispatch(getCategories())
        }
        console.log(categoryStore)
    }, [])

    const showAllComics = () => {
        window.history.pushState({}, "", "/comics")
        dispatch(getComics())
    }

    const colors = ["red", "orange", "green", "purple", "blue", "yellow"]

    return (
        <div className={styles.container}>
            <label value={""} onClick={showAllComics} htmlFor={"all"} className={`${styles.allButton} `}>
                <input
                    className={styles.checkbox}
                    type="checkbox"
                    id={"all"}
                    name={"all"}
                />
                {"all"}
            </label>
            {categoryStore.categories.response?.map((category) => (
                <CategoryFilter
                    key={category._id}
                    title={category.name}
                    color={
                        colors[
                            categoryStore.categories.response.indexOf(category)
                        ]
                    }
                    value={category._id}
                />
            ))}
        </div>
    )
}

export default CategoryFilters
