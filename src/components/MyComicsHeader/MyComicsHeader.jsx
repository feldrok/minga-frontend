import styles from "./myComicsHeader.module.css"
import { useSelector } from "react-redux"

const MyComicsHeader = () => {
    const comicStore = useSelector((store) => store.comics)

    return (
        <>
            <div className={styles.myComicsHeader}>
                <section className={styles.titleContainer}>
                    <div className={styles.titleHeader}>
                        <h2 className={styles.h2Header}>
                            {comicStore.comics?.author_company}
                        </h2>
                    </div>
                </section>
            </div>
        </>
    )
}

export default MyComicsHeader