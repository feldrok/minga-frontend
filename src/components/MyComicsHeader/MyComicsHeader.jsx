import styles from "./myComicsHeader.module.css"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import companyActions from "../../store/companies/actions.js"
import authorActions from "../../store/authors/actions"
import { decodeToken } from "react-jwt"

const { get_company_from_user } = companyActions
const { get_author_from_user } = authorActions


const MyComicsHeader = () => {
    const companyStore = useSelector((store) => store.company)
    const authorStore = useSelector((store) => store.author)
    const dispatch = useDispatch()

    const id = decodeToken(localStorage.getItem("token"))?.id

    useEffect(() => {
        dispatch(get_company_from_user(id))
    }, [])
    useEffect(() => {
        dispatch(get_author_from_user(id))
    }, [])

    return (
        <>
            <div className={styles.myComicsHeader}>
                <section className={styles.titleContainer}>
                    <div className={styles.titleHeader}>
                        <h2 className={styles.h2Header}>
                            {authorStore?.authors?.length === 0 ? companyStore?.companies[0]?.name : authorStore?.authors[0]?.name}
                        </h2>
                    </div>
                </section>
            </div>
        </>
    )
}

export default MyComicsHeader