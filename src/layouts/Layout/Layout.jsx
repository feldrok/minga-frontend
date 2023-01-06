import 'react-toastify/dist/ReactToastify.css';

import React from "react"
import { Slide, ToastContainer} from "react-toastify"

import Footer from "../Footer/Footer"
import Nav from "../Nav/Nav"
import { Outlet } from "react-router-dom"

function Layout() {
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