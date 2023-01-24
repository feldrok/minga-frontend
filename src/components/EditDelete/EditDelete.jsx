import React from "react"
import styles from "./EditDelete.module.css"
import { Link } from "react-router-dom"
import Button from "../Button/Button"
import EditComic from "../EditComic/EditComic"

function EditDelete({ link }) {

    return (
        <div className={styles.container}>
            <Link to={`/edit-comic/${link}`}>
                <Button 
                type={`${styles.button} ${styles.edit}`}
                text={"Edit"}
                />
            </Link>
            <Link to={`/delete-comic/${link}`}>
                <Button
                    type={`${styles.button} ${styles.delete}`}
                    text="Delete"
                />
            </Link>
        </div>
    )
}

export default EditDelete
