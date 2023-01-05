import 'react-toastify/dist/ReactToastify.css';

import Footer from "../Footer/Footer"
import Nav from "../Nav/Nav"
import { Outlet } from "react-router-dom"
import React from "react"

function Layout() {

  // Nav & Footer
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout