import NewChapterForm from "../../components/NewChapterForm/NewChapterForm"
import Nav from "../../layouts/Nav/Nav"
import "./NewChapter.css"
import { Slide, ToastContainer, toast } from "react-toastify"
import { useSelector } from "react-redux"
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect } from "react"


function CreatNewChapter() {
    const chapterStore = useSelector((state) => state.chapters)
    
    const createChapterAlert = () => toast.success(chapterStore.message, {autoClose: 3000, theme: "colored"})
    const errorChapterAlert = () => {
        chapterStore.chapters.response.map((err)=> toast.error(err.message, {autoClose: 3000, theme: "colored"}))
    }
    
    useEffect(()=>{
        if(chapterStore.chapters.success === true){
            createChapterAlert()
        }
        if(chapterStore.chapters.success === false){
            errorChapterAlert()
        }
    }, )

    return (
        <div>
            <ToastContainer transition={Slide}/>
            <Nav />
            <div className="formContainer">
                <NewChapterForm />
            </div>
        </div>
    );
}

export default CreatNewChapter