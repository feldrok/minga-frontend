import React, { useRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import styles from "./deleteComic.module.css"
import comicActions from "../../store/comics/actions"
import { useNavigate, useParams } from "react-router"

const { delete_comic, getComic, get_comics_from_company_author } = comicActions

const DeleteComic = () => {

    const comicStore = useSelector((store) => store.comics)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        dispatch(getComic(params.id))
    }, [])

    const clickConfirm = async (e) => {
        e.preventDefault()
        let link = params.id
        await dispatch(delete_comic({ link }))
        await dispatch(get_comics_from_company_author({}))
        navigate(-1)
    }
    const clickCancel = () => {
        navigate(-1)
    }

    const previousPage = () => {
        navigate(-1)
    }
    return (
        <>
            <div className={styles.modalContainer}>
                <div className={styles.modalClose} onClick={previousPage}></div>
                <div className={styles.modal}>
                    <div className={styles.inModal}>
                        <h3>Confirm delete</h3>
                        <div className={styles.buttonContainer}>
                            <button onClick={clickConfirm} className={`${styles.button} ${styles.confirm}`}>Confirm</button>
                            <button onClick={clickCancel} className={`${styles.button} ${styles.delete}`}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteComic