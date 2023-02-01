import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"

import comicActions from "../../store/comics/actions"
import styles from "./SearchInput.module.css"

const { getComics } = comicActions

function SearchInput() {
    const categoryStore = useSelector((state) => state.categories)
    const [searchParams, setSearchParams] = useSearchParams()
    const [inputValue, setInputValue] = useState("")
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (categoryStore.activeCategory === "all") {
            setInputValue("")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    const updateURL = (e) => {
        e.preventDefault()
        const currentParams = Object.fromEntries([...searchParams])
        if (location.search.includes("category_id")) {
            navigate(
                `?title=${inputValue}&category_id=${currentParams.category_id}`
            )
            setSearchParams({
                title: inputValue,
                category_id: currentParams.category_id,
            })
            dispatch(
                getComics({
                    title: inputValue,
                    category_id: currentParams.category_id,
                })
            )
        } else {
            if (categoryStore.activeCategory === "all") {
                navigate(`?title=${inputValue}`)
                setSearchParams({ title: inputValue })
                dispatch(getComics({ title: inputValue }))
            } else {
                navigate(
                    `?title=${inputValue}&category_id=${categoryStore.activeCategory}`
                )
                setSearchParams({
                    title: inputValue,
                    category_id: categoryStore.activeCategory,
                })
                dispatch(
                    getComics({
                        title: inputValue,
                        category_id: categoryStore.activeCategory,
                    })
                )
            }
        }
    }

    return (
        <>
            <form onSubmit={updateURL} className={styles.container}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={styles.searchIcon}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Find your comics here"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </form>
        </>
    )
}

export default SearchInput
