import { Link, useLocation } from "react-router-dom"
import React, { useState } from "react"

import EditDelete from "../EditDelete/EditDelete"
import styles from "./ComicCard.module.css"
import { useSelector } from "react-redux"

function ComicCard({ title, image, link, comicCategory, color }) {
    const categoryStore = useSelector((state) => state.categories)
    const comicStore = useSelector((state) => state.comics)
    const [isActive, setIsActive] = useState("")
    const [currentImage, setCurrentImage] = useState("")
    const location = useLocation()

    const renderCategoryType = () => {
        if (comicStore.comics.response?.length === 0) {
            return <h4>No category found</h4>
        } else {
            return categoryStore.categories.response?.map((category) => {
                if (category._id === comicCategory) {
                    return (
                        <h4 className={styles.comicCategory} key={category._id}>
                            {category.name}
                        </h4>
                    )
                } else {
                    return null
                }
            })
        }
    }

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

    let timer = 0
    const TIMEOUT = 1000

    const handleMouseEnter = (e) => {
        timer = setTimeout(() => {
            setCurrentImage(image)
            setIsActive(styles.active)
        }, TIMEOUT)
    }

    const handleMouseLeave = (e) => {
        setIsActive("")
        clearTimeout(timer)
    }

    return (
        <>
            <Link className={styles.container} to={`/comic/${link}`}>
                <div className={`${styles.textContainer} ${color} `}>
                    <h3>{title}</h3>
                    {renderCategoryType()}
                    {location.pathname.includes("/company") ? (
                        <EditDelete />
                    ) : null}
                </div>
                <div
                    className={styles.imageContainer}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        className={styles.imageImg}
                        src={image}
                        alt="Comic cover"
                    />
                    <div className={`${styles.hoverImage} ${isActive}`}>
                        <img src={currentImage} alt="" />
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ComicCard
