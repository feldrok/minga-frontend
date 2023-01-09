import "./NewChapterForm.css"

import React, { useRef } from "react"

import chapterActions from "../../store/chapters/actions"
import { useDispatch } from "react-redux"

const { newChapter } = chapterActions


const NewChapter = () => {

    const inpTitle = useRef("")
    const inpOrder = useRef(null)
    const inpPages = useRef("")
    const dispatch = useDispatch()

    let handleSubmit = async (e) => {
        e.preventDefault()
        let values = {
            comic_id: "63b33ec6314eea2b2acb8e8a",
            title: inpTitle?.current?.value,
            pages: inpPages?.current?.value.split(","),
        }
        if(inpOrder.current.value){
            values.order = inpOrder.current.value
        }
        await dispatch(newChapter(values))
    }

    return (
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
                    className="inpForm"
                    type="number"
                    id="number"
                    placeholder="Insert order"
                    ref={inpOrder}
                />
                <input
                    className="inpForm"
                    type="text"
                    id="pages"
                    placeholder="Insert pages"
                    ref={inpPages}
                />
                <input
                    type="submit"
                    id="submit"
                    value="Send"
                    className="button_create"
                />
            </form>
        </div>
    )

}

export default NewChapter



