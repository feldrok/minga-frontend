import React, { useEffect, useState } from "react"

import comicActions from "../../store/comics/actions"
import styles from "./SearchInput.module.css"
import { useDispatch } from "react-redux"

const { getComicsByTitle } = comicActions


function SearchInput() {
    
    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch()

    const updateURL = (e) => {
        e.preventDefault()
        dispatch(getComicsByTitle(inputValue))
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        const title = urlParams.get("title")
        if (title) {
            setInputValue(title)
            dispatch(getComicsByTitle(title))
        }
    }, [])

    useEffect(() => {
        if (inputValue === "") {
            window.history.pushState({}, "", "/comics")
        } else {
            window.history.pushState({}, "", `/comics?title=${inputValue}`)
        }
    }, [inputValue])

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
