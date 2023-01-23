import { useDispatch, useSelector } from "react-redux"

import ChapterCard from "../ChapterCard/ChapterCard"
import React from "react"
import chapterActions from "../../store/chapters/actions"
import styles from "./Chapters.module.css"
import { useParams } from "react-router"

const { getChapters } = chapterActions

export default function Chapters() {
    const chapterStore = useSelector((store) => store.chapters)
    const dispatch = useDispatch()
    const { id } = useParams() 

    const handleLoad = () => {
        const limit = chapterStore.chapters?.response?.length
        dispatch(getChapters({ id: id, limit: limit + 2 })) 
    }

    console.log(chapterStore)
    return (
        <>
            {chapterStore.chapters.response?.length === 0 ? (
                <h2 className={styles.mensaje}>
                    {" "}
                    Sorry, this manga has no chapters{" "}
                </h2>
            ) : (
                <>
                    {chapterStore.chapters?.response?.map((chapter) => (
                        <ChapterCard
                            title={chapter.title}
                            chapterId={chapter._id}
                            order={chapter.order}
                        />
                    ))}
                    <div className={styles.button_next}>
                        {chapterStore.limit ===
                        chapterStore.chapters?.response?.length ? (
                            <button
                                className={styles.next}
                                onClick={handleLoad}
                            >
                                Load more
                            </button>
                        ) : (
                            <p className={styles.noChapters}>
                                No more chapters available
                            </p>
                        )}
                    </div>
                </>
            )}
        </>
    )
}
