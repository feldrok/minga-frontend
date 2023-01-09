import React from "react"
import Footer from "../Footer/Footer"
import Nav from "../Nav/Nav"
import { Outlet } from "react-router-dom"

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

