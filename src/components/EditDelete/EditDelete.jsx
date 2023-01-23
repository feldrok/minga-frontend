import React from "react"
import styles from "./EditDelete.module.css"
import { Link } from "react-router-dom"
import Button from "../Button/Button"

function EditDelete({link}) {

    const clickEdit = (e) => {
        console.log(e.target);
    }
    const clickDelete = (e) => {
        console.log(e.target);
    }


    return (
        <div className={styles.container}>
            <Link>
                <Button 
                type={`${styles.button} ${styles.edit}`}
                action={clickEdit} 
                text="Edit"
                />
            </Link>
            <Link>
                <Button 
                type={`${styles.button} ${styles.delete}`}
                action={clickDelete}
                text="Delete"
                />
            </Link>
        </div>
    )
}

export default EditDelete
