import React, { useRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import styles from "./editComic.module.css"
import comicActions from "../../store/comics/actions"
import { useNavigate, useParams } from "react-router"

const { edit_comic, getComic, get_comics_from_company_author } = comicActions

const EditComic = () => {

    const comicStore = useSelector((store) => store.comics)
    const inpTitle = useRef("")
    const inpPhoto = useRef("")
    const inpDesc = useRef("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        dispatch(getComic(params.id))
    }, [])

    const sendEdit = async (e) => {
        e.preventDefault()
        let values = {}
        if(inpTitle.current.value){
            values.title = inpTitle.current.value
        }
        if(inpPhoto.current.value){
            values.photo = inpPhoto.current.value
        }
        if(inpDesc.current.value){
            values.description = inpDesc.current.value
        }
        let link = params.id
        await dispatch(edit_comic({ link, values })) // si le mando un objeto con propiedad vacia, el validador valida lo mismo la propiedad por mas que no sea requerida su validacion, se hace un condicional
        await dispatch(get_comics_from_company_author({}))
        navigate(-1)
    }
    const previousPage = () => {
        navigate(-1)
    }

    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalClose} onClick={previousPage}></div>
            <div className={styles.modal}>
                <div className={styles.containerComic}>
                    <p className={styles.pComic}>COMIC</p>
                    <div className={styles.dataContain}>
                        <p>Title: <span className={styles.spanName}>{comicStore.comic.response?.title}</span></p>
                        <p>Photo: <img src={comicStore.comic.response?.photo} alt="" /></p>
                        <p>Description: <span className={styles.spanDesc}>{comicStore.comic.response?.description}</span></p>
                    </div>
                </div>
                <div className={styles.divContainerForm}>
                    <p>EDIT COMIC</p>
                    <form className={styles.formNewChapter}>
                        <input
                            className={styles.inpForm}
                            type="text"
                            id="title"
                            placeholder="Edit title"
                            ref={inpTitle}
                        />
                        <input
                            className={styles.inpForm}
                            type="url"
                            id="number"
                            placeholder="Edit photo"
                            ref={inpPhoto}
                        />
                        <input
                            className={styles.inpForm}
                            type="text"
                            id="description"
                            placeholder="Edit description"
                            ref={inpDesc}
                        />
                        <input
                            type="button"
                            id="submit"
                            value="Edit"
                            className={styles.button_create}
                            onClick={sendEdit}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditComic