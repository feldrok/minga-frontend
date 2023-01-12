import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"

import categoryActions from "../../store/categories/actions"
import comicActions from "../../store/comics/actions"
import styles from "./CategoryFilter.module.css"

const { getComicsByCategory, getComicsByTitleAndCategory } = comicActions
const { setActiveCategory } = categoryActions


function CategoryFilter({ title, color, value }) {
    const categoryStore = useSelector((state) => state.categories)
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const [active, setActive] = useState('')
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
        if (location.search.includes('title')) {
            navigate(`?title=${currentParams.title}&category_id=${e.target.getAttribute('value')}`)
            setSearchParams({title: currentParams.title, category_id: e.target.getAttribute('value')})
            dispatch(getComicsByTitleAndCategory({title: currentParams.title, category_id: e.target.getAttribute('value')}))
        } else {
            navigate(`?category_id=${e.target.getAttribute('value')}`)
            setSearchParams({category_id: e.target.getAttribute('value')})
            dispatch(getComicsByCategory(e.target.getAttribute('value')))
        }
    }

    useEffect(() => {
        const currentParams = Object.fromEntries([...searchParams])
        if (currentParams.category_id === value) {
            setActive(styles.active)
            dispatch(setActiveCategory(currentParams.category_id))
        } else {
            setActive('')
        }
        if (!currentParams.category_id) {
            dispatch(setActiveCategory(categoryStore.activeCategory))
            if (categoryStore.activeCategory === value) {
                setActive(styles.active)
            } else {
                setActive('')
            }
        }
    }, [location])
        
    return (
        <button value={value} onClick={updateURL} className={`${styles.container} ${color} ${active} `}>
            {title}
        </button>
    )
}

export default CategoryFilter
