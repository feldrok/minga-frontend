import "./AccountSetup.css"
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect } from "react";
import { Slide, ToastContainer, toast } from "react-toastify"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux";

function AccountSetup() {
  const authorStore = useSelector(state => state.author)
  const createdAuthorNotif = () => toast.success(authorStore.message, {autoClose: 3000, theme: "colored"} )
  const errorAuthorNotif = () => {
    authorStore.author.response.map((i) => {
      return toast.error(i.message, {autoClose: 3000, theme: "colored"})
    })
    }
  useEffect(() => {
    if (authorStore.author?.success === true) {
      createdAuthorNotif()
    }
    if (authorStore.author?.success === false) {
      errorAuthorNotif()
    }
    console.log(authorStore);
  }, [authorStore])
  return (
    <>
      <ToastContainer transition={Slide} />
      <div className="accountsetup-container">
        <div className="accountsetup-form-container">
          <Outlet />
        </div>
        <div className="image-container-accsetup">
          <div className="review-container">
            <h2 className="review-content">
              Minga.com is the best place to find manga reviews. We've been
              super impressed by the quality of applicants.
            </h2>
            <p className="review-name"> - Madhushan Sasanka</p>
            <p>CEO abc.com</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountSetup