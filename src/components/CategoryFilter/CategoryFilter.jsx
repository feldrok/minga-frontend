import React from "react"
import comicActions from "../../store/comics/actions"
import styles from "./CategoryFilter.module.css"
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"

const { getComicsByCategory, getComicsByTitleAndCategory } = comicActions


function CategoryFilter({ title, color, value }) {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()

    if (color === 'red') {
        color = styles.red
    } else if (color === 'orange') {
        color = styles.orange
    } else if (color === 'green') {
        color = styles.green
    } else if (color === 'purple') {
        color = styles.purple
    } else if (color === 'blue') {
        color = styles.blue
    } else if (color === 'yellow') {
        color = styles.yellow
    }


    const updateURL = (e) => {
        e.preventDefault()
        const currentParams = Object.fromEntries([...searchParams])
        if (window.location.search.includes('title')) {
            window.history.pushState({}, "", `?title=${currentParams.title}&category_id=${e.target.getAttribute('value')}`)
            setSearchParams({title: currentParams.title, category_id: e.target.getAttribute('value')})
            dispatch(getComicsByTitleAndCategory({title: currentParams.title, category_id: e.target.getAttribute('value')}))
        } else {
            window.history.pushState({}, "", `?category_id=${e.target.getAttribute('value')}`)
            setSearchParams({category_id: e.target.getAttribute('value')})
            dispatch(getComicsByCategory(e.target.getAttribute('value')))
        }
    }

    return (
        <label value={value} onClick={updateURL} htmlFor={title} className={`${styles.container} ${color} `}>
            <input
                className={styles.checkbox}
                type="checkbox"
                id={title}
                name={title}
            />
            {title}
        </label>
    )
}

export default CategoryFilter
