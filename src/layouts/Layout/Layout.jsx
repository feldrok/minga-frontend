import 'react-toastify/dist/ReactToastify.css';

import React, { useEffect } from "react"
import { Slide, ToastContainer, toast } from "react-toastify"

import Footer from "../Footer/Footer"
import Nav from "../Nav/Nav"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

function Layout() {
  const commentsStore = useSelector((state) => state.comments)

  const createdCategoryNotify = () => toast.success(commentsStore.message, { autoClose: 3000, theme: "colored" })
  const errorCategoryNotify = () => toast.error(commentsStore.message, { autoClose: 2000, theme: "colored" })

  useEffect(() => {
    if (commentsStore.comments.success === true) {
      createdCategoryNotify()
    }
    if (commentsStore.comments.success === false) {
      errorCategoryNotify()
    }
    console.log(commentsStore)
  },)

  // Nav & Footer
  return (
    <div>
      <ToastContainer transition={Slide} />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout