import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import Chapters from "../../components/Chapters/Chapters"
import Nav from "../../layouts/Nav/Nav"
import React from "react"
import Reactions from "../../components/Reactions/Reactions"
import chapterActions from "../../store/chapters/actions"
import comicActions from "../../store/comics/actions"
import styles from "./Comic.module.css"
import FavouriteReaction from "../../components/FavouriteReaction/FavouriteReaction"
import reactionActions from "../../store/reactions/actions"

const { getChapters } = chapterActions
const { getComic } = comicActions
const { getReactions } = reactionActions

export default function Comic() {
    const [chapter, setChapter] = useState(false)
    const storeReactions = useSelector((store) => store.reactions)
    const chapterStore = useSelector((store) => store.chapters)
    const comicStore = useSelector((store) => store.comics)
    console.log(comicStore)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { id } = useParams()

    useEffect(() => {
        let token = localStorage.getItem("token")
        if (!token || token === undefined) {
            navigate("/")
        }
        if (id !== comicStore?.comic?.response?._id) {
            dispatch(getComic(id))
        }
        dispatch(
            getReactions({
                comic_id: id,
            })
        )
    }, [])

    const currentChapters = chapterStore.chapters?.response?.find(
        (chapter) => chapter.comic_id === id
    )

    const showChapter = () => {
        setChapter(true)
        const limit = chapterStore.chapters?.response?.length
        if (chapterStore.chapters?.length === 0 || id !== currentChapters) {
            dispatch(getChapters({ id: id, limit: limit }))
        }
    }

    const showManga = () => {
        setChapter(false)
    }

    return (
        <div>
            <Nav />
            <div className={styles.container}>
                <div className={styles.headContainer}>
                    <div className={styles.container_img}>
                        <img
                            className={styles.imagen}
                            src={comicStore.comic?.response?.photo}
                            alt={comicStore.comic?.response?.photo}
                        />
                    </div>
                    <div className={styles.imageFooter}>
                        <p className={styles.author}>
                            By: {comicStore.comic?.response?.author_id.name}
                        </p>
                        <FavouriteReaction />
                    </div>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.infoContainerTop}>
                        <p className={styles.title}>
                            {comicStore.comic?.response?.title}
                        </p>
                    </div>
                    <div className={styles.infoContainerBottom}>
                        <p className={styles.category}>
                            {comicStore.comic?.response?.category_id?.name}
                        </p>
                        <p className={styles.company}>Company Name</p>
                    </div>
                </div>
                <Reactions />
                <div className={styles.buttons}>
                    <div className={styles.container_button}>
                        <button
                            className={`${styles.button_category} ${
                                chapter ? "" : styles.active
                            }  `}
                            onClick={showManga}
                        >
                            Description
                        </button>
                        <button
                            className={`${styles.button_category} ${
                                chapter ? styles.active : ""
                            }  `}
                            onClick={showChapter}
                        >
                            Chapter
                        </button>
                    </div>
                </div>

                <div className={styles.bottomContainer}>
                    {chapter ? (
                        <div className={styles.container_chapter}>
                            <Chapters />
                        </div>
                    ) : (
                        <p className={styles.description}>
                            {comicStore.comic?.response?.description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}
