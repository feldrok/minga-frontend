import "./NewChapterForm.css"

import React, { useRef } from "react"

import chapterActions from "../../store/chapters/actions"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"

const { newChapter } = chapterActions


const NewChapter = () => {

    const inpTitle = useRef("")
    const inpOrder = useRef(null)
    const inpPages = useRef("")
    const dispatch = useDispatch()
    const params = useParams()
    const chapterStore = useSelector((store) => store.chapters)
    const { id } = params
    console.log(id)

    let handleSubmit = async (e) => {
        e.preventDefault()
        let values = {
            comic_id: id,
            title: inpTitle?.current?.value,
            pages: inpPages?.current?.value.split(","),
        }
        if(inpOrder.current.value){
            values.order = inpOrder.current.value
        }
        await dispatch(newChapter(values))

    }

    console.log(chapterStore);

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



