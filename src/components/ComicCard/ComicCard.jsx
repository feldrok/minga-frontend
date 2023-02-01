import { Link, useLocation, useParams } from "react-router-dom"
import React, { useState } from "react"

import EditDelete from "../EditDelete/EditDelete"
import styles from "./ComicCard.module.css"
import EditComic from "../EditComic/EditComic"
import { useDispatch, useSelector } from "react-redux"
import reactionActions from "../../store/reactions/actions"

const { addReaction } = reactionActions

function ComicCard({ title, image, link, comicCategory, color }) {
    const categoryStore = useSelector((state) => state.categories)
    const comicStore = useSelector((state) => state.comics)
    const lastReadStore = useSelector((state) => state.lastRead)
    const [isActive, setIsActive] = useState("")
    const [currentImage, setCurrentImage] = useState("")
    const location = useLocation()
    const dispatch = useDispatch()

    const handleClick = async (e) => {
        await dispatch(
            addReaction({
                comic_id: link,
                name: e.target.value,
            })
        )
    }

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

    const renderLastReadButton = () => {
        if (lastReadStore.lastReads.response?.length === 0) {
            return null
        } else {
            let lastRead = lastReadStore.lastReads.response?.findLast(
                (lastRead) => lastRead.comic_id === link
            )
            if (lastRead) {
                return (
                    <Link
                        to={`/pages/${lastRead.chapter_id}`}
                        className={styles.readButton}
                    >
                        Read
                    </Link>
                )
            } else {
                return null
            }
        }
    }

    return (
        <>
            <div className={styles.container}>
                <div className={`${styles.textContainer} ${color} `}>
                    <h3>{title}</h3>
                    {renderCategoryType()}
                    <div className={styles.buttonsContainer}>
                        {location.pathname.includes("/company") ? (
                            <EditDelete />
                        ) : null}
                        {location.pathname.includes("/mycomics") ? (
                            <EditDelete link={link} />
                        ) : null}
                        {location.pathname.includes("/favourites") ? (
                            <div className={styles.buttonsWrapper}>
                                {renderLastReadButton()}
                                <button
                                    onClick={handleClick}
                                    value={"favourite"}
                                    className={`${styles.favourite} ${styles.active}`}
                                >
                                    Remove
                                </button>
                            </div>
                        ) : null}
                    </div>
                </div>
                <Link
                    to={`/comic/${link}`}
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
                </Link>
            </div>
        </>
    )
}

export default ComicCard
