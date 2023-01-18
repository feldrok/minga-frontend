import "./NewChapter.css"
import "react-toastify/dist/ReactToastify.css"

import React, { useEffect } from "react"
import { Slide, ToastContainer, toast } from "react-toastify"

import Nav from "../../layouts/Nav/Nav"
import NewChapterForm from "../../components/NewChapterForm/NewChapterForm"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"

function CreatNewChapter() {
    const chapterStore = useSelector((state) => state.chapters)
    const navigate = useNavigate()

    const createChapterAlert = () =>
        toast.success(chapterStore.message, {
            autoClose: 3000,
            theme: "colored",
        })
    const errorChapterAlert = () => {
        chapterStore.chapters.response.map((err) =>
            toast.error(err.message, { autoClose: 3000, theme: "colored" })
        )
    }

    useEffect(() => {
        let token = localStorage.getItem("token")
        if (!token || token === undefined) {
            navigate("/")
        }
        if (chapterStore.chapters.success === true) {
            createChapterAlert()
        }
        if (chapterStore.chapters.success === false) {
            errorChapterAlert()
        }
    })

    return (
        <div>
            <ToastContainer transition={Slide} />
            <Nav />
            <div className="formContainer">
                <NewChapterForm />
            </div>
        </div>
    )
}

export default CreatNewChapter
