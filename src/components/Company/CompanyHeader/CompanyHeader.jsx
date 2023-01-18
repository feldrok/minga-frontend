import React, { useEffect } from "react"
import "./companyHeader.css"
import { useSelector, useDispatch} from "react-redux"
import companyActions from "../../../store/companies/actions.js"
import { useParams } from "react-router"

const { get_company } = companyActions

const CompanyHeader = () => {

    const store = useSelector(store => store.company)
    const company = store.companies
    const dispatch = useDispatch()
    const params = useParams()
    useEffect(()=>{
        if(company.length === 0){
            dispatch(get_company(params.id))
        }
    }, )

    return (
        <>
            <div className="companyHeader">
                <section className="titleContainer">
                    <div className="titleHeader">
                        <h2 className="h2Header">{company.name}</h2>
                        <p className="pHeader">{company.description}</p>
                    </div>
                </section>
            </div>
        </>
    )

}

export default CompanyHeader