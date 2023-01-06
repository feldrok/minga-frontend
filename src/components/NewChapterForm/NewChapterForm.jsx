import React, { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import "./NewChapterForm.css"

import chapterActions from "../../store/chapters/actions"
const { newChapter } = chapterActions


const NewChapter = () => {

    const inpTitle = useRef("")
    let inpOrder = useRef("")
    const inpPages = useRef("")
    const dispatch = useDispatch()

    let handleSubmit = async (e) => {
        e.preventDefault()
        let values
        if(inpOrder === ""){
            inpOrder = null
            values = {
                comic_id: "63b33ec6314eea2b2acb8e8a",
                title: inpTitle.current.value,
                order: inpOrder,
                pages: inpPages.current.value.split(","),
            }
        }else{
            values = {
                comic_id: "63b33ec6314eea2b2acb8e8a",
                title: inpTitle.current.value,
                order: inpOrder.current.value,
                pages: inpPages.current.value.split(","),
            }
        }
            await dispatch(newChapter(values))
        }

    return(
        <div className="divContainerForm">
        <p>New Chapter</p>
        <form className="formNewChapter" onSubmit={handleSubmit}>
            <input
            className="inpForm"
            type="text"
            id="title"
            placeholder="Insert title"
            ref={inpTitle}
            />
            <input
            ref={inpOrder}
            className="inpForm"
            type="number"
            id="number"
            placeholder="Insert order"
            />
            <input
            ref={inpPages}
            className="inpForm"
            type="text"
            id="pages"
            placeholder="Insert pages"
            />
            <input
            type="submit"
            id="submit"
            value="Send"
            />
        </form>
        </div>
    )

}

export default NewChapter



