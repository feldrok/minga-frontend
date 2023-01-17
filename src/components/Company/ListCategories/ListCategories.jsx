import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import categoryActions from "../../../store/categories/actions";
import comicActions from "../../../store/comics/actions";
import "./listCategories.css"
import { useParams } from "react-router";

const { get_categories } = categoryActions
const { get_comics_from_cia, get_comics_company } = comicActions

const ListCategories = () => {

    const storeCategory = useSelector(store => store.categories)
    const storeComics = useSelector(store => store.comics)
    const catStored = storeCategory.categories?.response
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        if (storeComics.comics?.length === 0) {
            dispatch(get_comics_company({ company_id: params.id }))
        }
    }, [])
    
    useEffect(() => {
        if (storeCategory.categories?.length === 0) {
            dispatch(get_categories())
        }
    }, [])

    const handleClick = (e) => {
        let obj = {
            company_id: params.id,
            limit: "",
            category_id: e?.target.value
        }
        dispatch(get_comics_from_cia(obj))
    }

    const styleCategory = ["buttonRed", "buttonOrange", "buttonGreen", "buttonPurple","buttonBlue", "buttonYellow"]
    let i = 0

    return (
        <>
            <div className="divCategories">
                <button onClick={handleClick} id="buttonCat" className="buttonAll">All</button>
                {
                    catStored?.map(cat =>
                        <button
                            onClick={handleClick}
                            id={cat?.name}
                            value={cat?._id}
                            className={`${styleCategory[i]}`}
                            key={i++}
                        >
                            {cat.name}
                        </button>
                    )
                }
            </div>
        </>
    )
}

export default ListCategories