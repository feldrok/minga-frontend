import React, { useEffect } from "react"
import styles from "./Favourites.module.css"
import { useNavigate } from "react-router"
import Nav from "../../layouts/Nav/Nav"
import ComicsHeader from "../../components/ComicsHeader/ComicsHeader"
import SearchInput from "../../components/SearchInput/SearchInput"
import ListContainer from "../../components/ListContainer/ListContainer"
import ListComics from "../../components/ListComics/ListComics"
import ComicCards from "../../components/ComicCards/ComicCards"
import lastReadActions from "../../store/lastreads/actions"
import { useDispatch, useSelector } from "react-redux"

const { getLastReads } = lastReadActions

function Favourites() {
    const lastReadStore = useSelector((state) => state.lastRead)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        let token = localStorage.getItem("token")
        if (!token || token === undefined) {
            navigate("/")
        }

        if (lastReadStore.lastReads?.length === 0) {
            dispatch(getLastReads())
        }
    }, [])

    console.log(lastReadStore)
    return (
        <div className={styles.container}>
            <Nav />
            <ComicsHeader header={"Favourites"}>
                <SearchInput />
            </ComicsHeader>
            <ListContainer>
                <ListComics>
                    <ComicCards />
                </ListComics>
            </ListContainer>
        </div>
    )
}

export default Favourites
