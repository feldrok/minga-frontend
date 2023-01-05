import "./Signup.css"
import 'react-toastify/dist/ReactToastify.css';

import { Link, Outlet } from "react-router-dom"
import React, { useEffect } from "react";
import { Slide, ToastContainer, toast } from "react-toastify"

import { useSelector } from "react-redux";

function Signup() {
  const companyStore = useSelector(state => state.company)
  const createdCompanyNotif = () => toast.success(companyStore.message, {autoClose: 3000, theme: "colored"} )
  const errorCompanyNotif = () => {
    companyStore.company.response.map((i) => {
      return toast.error(i.message, {autoClose: 3000, theme: "colored"})
    })
    }
  useEffect(() => {
    if (companyStore.company?.success === true) {
      createdCompanyNotif()
    }
    if (companyStore.company?.success === false) {
      errorCompanyNotif()
    }
    console.log(companyStore);
  }, [companyStore])
  return (
    <>
      <ToastContainer transition={Slide} />
        <div className="signup-container">
          <div className="image-film-wrap">
            <div className="container-1">
              <Outlet />
              <div className="account-exists-container">
                <p>Already have an account?</p>
                <Link className="signin-link" to="/signin">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Signup
