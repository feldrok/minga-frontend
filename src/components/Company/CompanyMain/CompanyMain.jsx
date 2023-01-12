import React from "react"
import "./companyMain.css"


const CompanyMain = ({children}) => { 

    return(
        <div className="companyMain">
            <div className="mainContainer">
                {children}
            </div>
        </div>
    )
}

export default CompanyMain