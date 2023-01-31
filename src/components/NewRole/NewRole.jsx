import React from "react"
import { Link } from "react-router-dom"
import styles from "./newRole.module.css"


const NewRole = () => {

    return (
        <>
            <div className={styles.allContainer}>
                <div className={styles.joinContainer}>
                    <div className={styles.title}>
                        <p>Sing up to</p>
                        <h3>Minga.com</h3>
                    </div>
                    <Link className={styles.joinAs} to="/accountsetup/author">
                        <div className={styles.joinContent}>
                            <div className={styles.imgJoinAs}>
                                <img src="../Ellipse_3.png" alt="" />
                                <img className={styles.imgMid} src="../Ellipse_4.png" alt="" />
                                <img src="../Ellipse_5.png" alt="" />
                            </div>
                            <div className={styles.textJoinAs}>
                                <h3>Join as an Author!</h3>
                                <p>I'm a reader writting a manga</p>
                            </div>
                        </div>
                    </Link>
                    <Link className={styles.joinAs} to="/accountsetup/company">
                        <div className={styles.joinContent}>
                            <div className={styles.imgJoinAs}>
                                <img src="../Ellipse_3C.png" alt="" />
                                <img className={styles.imgMid} src="../Ellipse_4C.png" alt="" />
                                <img src="../Ellipse_5C.png" alt="" />
                            </div>
                            <div className={styles.textJoinAs}>
                                <h3>Join as an Company!</h3>
                                <p>I’m a company and I want to publish my comics</p>
                            </div>
                        </div>
                    </Link>
                    <p className={styles.goHome}>Go back to <a href="/">Home page</a></p>
                </div>
                <div className={styles.bgContainer}>
                    <div className={styles.textContent}>
                        <p className={styles.p1}>Minga.com is the best place to find manga reviews. We’ve been super impress by the quality of applicants.</p>
                        <p className={styles.p2}><img src="../Line_2.png" alt="" />Madhushan sasanka</p>
                        <p className={styles.p3}>CEO, abc.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewRole