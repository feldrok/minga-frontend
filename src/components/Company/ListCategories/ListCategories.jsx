import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import categoryActions from "../../../store/categories/actions";
import comicActions from "../../../store/comics/actions";
import "./listCategories.css"
import { useParams } from "react-router";

const { get_categories } = categoryActions
const { get_comics_from_cia } = comicActions

const ListCategories = () => {

    const storeCategory = useSelector(store => store.categories)
    const catStored = storeCategory.categories?.response
    const storeComic = useSelector(store => store.comics)
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        if (storeCategory.categories?.length === 0) {
            dispatch(get_categories())
        }
    }, [])

    // useEffect(() => {
    //     dispatch(get_comics_from_cia([params.id, "", "63bcc0003f33b0f658f28c74"]))
    //     console.log(storeComic.comics)
    // }, [])

    
    const handleClick = (e) => {
        let obj = {
            company_id: params.id,
            category_id: e.target.value,
            page: 2
        }
        dispatch(get_comics_from_cia(obj))
    }

    console.log(storeComic.comics)

    
    return (
        <>
            <div className="divCategories" onClick={handleClick}>
                <button id="buttonCat" className="inpCategories">all</button>
                {
                    catStored?.map(cat =>
                        <button
                            key={cat._id}
                            id={cat?.name}
                            value={cat?._id}
                            className="inpCategories"
                        >
                            {cat.name}
                        </button>
                    )
                }
            </div>
            <div className="cardsMain">
                
            </div>
        </>
    )
}

export default ListCategories