import EditChapterForm from "../../components/EditChapterForm/EditChapterForm";
import Nav from "../../layouts/Nav/Nav";
import React from "react";
import styles from "./EditChapter.module.css"

function EditChapter () {
    return(
        <>
        <Nav />
        <div className={styles.container_formulario}>
            <div className={styles}> 
            <EditChapterForm />
            </div>
        </div>
        </>
    )
}
export default EditChapter 