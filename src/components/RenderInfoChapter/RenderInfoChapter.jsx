import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import React from "react"
import chapterActions from "../../store/chapters/actions"
import getIdActions from "../../store/getId/actions"
import styles from "./RenderInfoChapter.module.css"

const { getChapterDetails } = chapterActions
const { reloadChapter } = getIdActions

const RenderInfoChapter = () => {
    //este es el store de getIdComic que me trae el payload de del input  guardado que viene por Id
    const chapterStore = useSelector((state) => state?.id?.idChapter?.payload)
    console.log(chapterStore)

    //este me trae el  un chapter completo sin actualizar
    const chaptersStore = useSelector(
        (state) => state?.chapters?.chapter.response
    )
    console.log(chaptersStore)

    //este busca el valor que esta guardado en el store de chapters
    const reloadStore = useSelector((state) => state?.chapters.updateChapter)
    console.log(reloadStore)

    const dispatch = useDispatch()

    //este despacha el chapter sin actualizar
    useEffect(() => {
        if (chapterStore) {
            dispatch(getChapterDetails(chapterStore))
        }
    }, [chapterStore])

    //este despacha el chapter actualizado....
    useEffect(() => {
        if (chapterStore) {
            dispatch(reloadChapter(chapterStore))
        }
    }, [chapterStore])

    return (
        <>
            <div className={styles.container_card}>
                <div className={styles.container_title}>
                    <p className="">
                        {chaptersStore?.title === undefined
                            ? null
                            : `Title: "${chaptersStore?.title}" `}
                    </p>
                    <p>
                        {chaptersStore?.order === undefined
                            ? `"Choose a chapter to see the details"`
                            : `Order: ${chaptersStore?.order}`}
                    </p>
                    <p>
                        {chaptersStore?.pages === undefined
                            ? null
                            : `Pages: ${chaptersStore?.pages.length}`}
                    </p>
                </div>
            </div>
        </>
    )
}

export default RenderInfoChapter

/* 

*/
