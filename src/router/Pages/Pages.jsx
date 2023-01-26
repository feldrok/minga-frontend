import { Link, Outlet } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate, useParams } from "react-router"

import Nav from "../../layouts/Nav/Nav"
import chapterActions from "../../store/chapters/actions"
import styles from "./Pages.module.css"

const { getChapterDetails, getChapters } = chapterActions

function Pages() {
    const [current, setCurrent] = useState(0)
    const chapter = useSelector((state) => state.chapters?.chapter?.response)
    const chapters = useSelector((state) => state.chapters?.chapters?.response)
    const comicId = chapter?.comic_id;
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const { _id } = useParams()

    useEffect(() => {
        let token = localStorage.getItem("token")
        if (!token || token === undefined) {
            navigate("/")
        }
        const currentPage = localStorage.getItem("currentPage")
        if (currentPage !== null) {
            setCurrent(parseInt(currentPage))
        }
        dispatch(getChapterDetails(_id))
    }, [])

    useEffect(() => {
        const url = location.pathname.split("/")
        const id = url[url.length - 1]
        dispatch(getChapterDetails(_id))
    }, [location])
    
    const getPagesImages = () => {
        if (!chapter) {
            return <p>Loading...</p>
        } else {
            return (
                <div className={styles.imageContainer}>
                    <img
                        src={chapter.pages[current]}
                        alt="Comic Page"
                    />
                </div>
            )
        }
    }
    const next = () => {
        const nextChapter = chapters?.find(
            (c) => chapter.order + 1 === c.order
        )
        if (current !== chapter?.pages?.length - 1) {
            setCurrent(current + 1)
            localStorage.setItem("currentPage", current + 1)
        } else {
            console.log(nextChapter)
            navigate(`/pages/${nextChapter._id}`, { replace: true })
            setCurrent(0)
            localStorage.setItem("currentPage", 0)
        }
    }
    const prev = () => {
        const prevChapter = chapters?.find(
            (c) => chapter.order - 1 === c.order
        )
        if (current > 0) {
            setCurrent(current - 1)
            localStorage.setItem("currentPage", current - 1)
        } else if (chapter.order === 1) {
            navigate(`/comic/${chapter.comic_id}`, {
                replace: true,
            })
        } else if (current === 0) {
            console.log(prevChapter)
            navigate(`/pages/${prevChapter._id}`, { replace: true })
            setCurrent(prevChapter.pages.length - 1)
            localStorage.setItem("currentPage", prevChapter.pages.length - 1)
        }
    }
    const getChapterTitle = () => {
        if (!chapter) {
            return <p>Loading...</p>
        } else {
            return (
                <div>
                    <h3>{`Chapter - ${chapter.order}`}</h3>
                    <h2>{chapter.title}</h2>
                </div>
            )
        }
    }
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.titleContainer}>
                        {getChapterTitle()}
                    </div>
                </header>
                <div className={styles.comicPage}>
                    {getPagesImages()}
                    <div className={styles.leftButton} onClick={prev}>
                        <p className={styles.leftArrow}>&lt;</p>
                    </div>
                    <div className={styles.rightButton} onClick={next}>
                        <p className={styles.rightArrow}>&gt;</p>
                    </div>
                </div>
                <div className={styles.commentContainer}>
                    <Link
                        className={styles.commentButton}
                        text={"New comment"}
                        to={`/pages/${chapter?._id}/comments`}
                    >
                        <div className={styles.newCommentBox}>
                            <img
                                className={styles.commentIcon}
                                src="../../../icon.png"
                                alt="comment icon"
                            />
                        </div>
                    </Link>
                    <p className={styles.commentNumber}>3</p>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Pages
