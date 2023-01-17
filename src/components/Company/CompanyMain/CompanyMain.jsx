import React from "react";
import "./companyMain.css"
import Button from "../../Button/Button"
import { useSelector, useDispatch } from "react-redux";
import comicActions from "../../../store/comics/actions";
import { useParams } from "react-router";

const { get_comics_from_cia } = comicActions

const CompanyMain = ({ children }) => {

    const storeComics = useSelector(store => store.comics)
    const dispatch = useDispatch()
    const params = useParams()

    const handleClickViewMore = (e) => {
        let currentLimit = storeComics.comics.response?.length
        let obj = {
            company_id: params.id,
            limit: currentLimit + 5,
            category_id: e?.target.value
        }
        dispatch(get_comics_from_cia(obj))
    }

    return (
        <div className="companyMain">
            <div className="mainContainer">
                {children}
                {
                    storeComics.comics.response?.length >= 5 ?
                        <Button
                            type="buttonViewMore"
                            text="View More"
                            action={handleClickViewMore}
                        />
                        :
                        null
                }
            </div>
        </div>
    )
}

export default CompanyMain