import React, { useState } from "react"
import styles from "./SortButton.module.css"
import { useDispatch } from "react-redux"
import comicActions from "../../store/comics/actions"
import { useParams } from "react-router"

const { getFavouriteComics } = comicActions

function SortButton() {
    const [sort, setSort] = useState("desc")
    const dispatch = useDispatch()
    const params = useParams()

    const handleSort = () => {
        if (sort === "asc") {
            setSort("desc")
        } else {
            setSort("asc")
        }
        dispatch(
            getFavouriteComics({
                user_id: params.user_id,
                order: sort,
            })
        )
    }

    return (
        <>
            {sort === "asc" ? (
                <button className={styles.button} onClick={handleSort}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        className={styles.icon}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                        />
                    </svg>
                </button>
            ) : (
                <button className={styles.button} onClick={handleSort}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        className={styles.icon}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
                        />
                    </svg>
                </button>
            )}
        </>
    )
}

export default SortButton
