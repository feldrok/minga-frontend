import { Link, Outlet } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate, useParams } from "react-router"

import Nav from "../../layouts/Nav/Nav"
import chapterActions from "../../store/chapters/actions"
import styles from "./Pages.module.css"
import lastReadActions from "../../store/lastreads/actions"

const { getLastRead, getLastReads, createLastRead, updateLastRead } =
    lastReadActions
const { getChapterDetails } = chapterActions

function Pages() {
    const [current, setCurrent] = useState(0)
    const chapterStore = useSelector((state) => state.chapters)
    const lastReadStore = useSelector((state) => state.lastRead)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const { _id } = useParams()

    useEffect(() => {
        let token = localStorage.getItem("token")
        if (!token || token === undefined) {
            navigate("/")
        }

        try {
            if (
                chapterStore.chapter?.length === 0 ||
                chapterStore.chapter.response._id !== _id
            ) {
                dispatch(getChapterDetails(_id))
            }
            if (lastReadStore.lastReads?.length === 0) {
                dispatch(getLastReads())
            }
            if (lastReadStore.lastRead?.length !== 0) {
                setCurrent(lastReadStore.lastRead?.page)
            }
        } catch (error) {
            console.log(error)
        }
    }, [lastReadStore, _id, location])

    useEffect(() => {
        dispatch(
            createLastRead({
                chapter_id: _id,
                comic_id: chapterStore?.chapter?.response?.comic_id,
                page: 0,
            })
        )
    }, [chapterStore])

    useEffect(() => {
        dispatch(getLastRead(_id))
    }, [current])

    const getPagesImages = () => {
        if (chapterStore.chapter?.length === 0) {
            return <p>Loading...</p>
        } else {
            return (
                <div className={styles.imageContainer}>
                    <img
                        src={chapterStore.chapter?.response?.pages[current]}
                        alt="Comic Page"
                    />
                </div>
            )
        }
    }

    const next = () => {
        const nextChapter = chapterStore.chapters?.response?.find(
            (chapter) =>
                chapterStore.chapter.response.order + 1 === chapter.order
        )
        if (current !== chapterStore.chapter.response.pages?.length - 1) {
            dispatch(
                updateLastRead({
                    chapter_id: _id,
                    page: current + 1,
                })
            )
        } else {
            dispatch(
                updateLastRead({
                    chapter_id: nextChapter._id,
                    page: 0,
                })
            )
            navigate(`/pages/${nextChapter._id}`, { replace: true })
        }
    }
    const prev = () => {
        const prevChapter = chapterStore.chapters?.response?.find(
            (chapter) =>
                chapterStore.chapter?.response?.order - 1 === chapter.order
        )
        if (current > 0) {
            dispatch(
                updateLastRead({
                    chapter_id: _id,
                    page: current - 1,
                })
            )
        } else if (chapterStore.chapter?.response?.order === 1) {
            navigate(`/comic/${chapterStore.chapter?.response?.comic_id}`, {
                replace: true,
            })
        } else if (current === 0) {
            navigate(`/pages/${prevChapter._id}`, { replace: true })
            setCurrent(prevChapter.pages.length - 1)
            dispatch(
                updateLastRead({
                    chapter_id: _id,
                    page: prevChapter.pages.length - 1,
                })
            )
        }
    }
    const getChapterTitle = () => {
        if (chapterStore.chapter?.length === 0) {
            return <p>Loading...</p>
        } else {
            return (
                <div>
                    <h3>{`Chapter - ${chapterStore.chapter?.response?.order}`}</h3>
                    <h2>{chapterStore.chapter?.response?.title}</h2>
                    <p>{`Page - ${current + 1}`}</p>
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
                        to={`/pages/${chapterStore.chapter.response?._id}/newcomment`}
                    >
                        <div className={styles.newCommentBox}>
                            <img
                                className={styles.commentIcon}
                                src="../../../icon.png"
                                alt="comment icon"
                            />
                        </div>
                    </Link>
                    <p className={styles.commentNumber}>42</p>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Pages
