import Home from "../router/Home/Home"
import Layout from "../layouts/Layout/Layout"
import NewCompany from "../components/NewCompany/NewCompany"
import React from "react"
import Signin from "../router/Signin/Signin"
import Signup from "../router/Signup/Signup"
import SignupReader from "../components/SignupReader/SignupReader"
import SignupUserType from "../components/SignupUserType/SignupUserType"
import { createBrowserRouter } from "react-router-dom"

const indexRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
    children: [
      {
        path: "/signup",
        element: <SignupUserType />,
      },
      {
        path: "/signup/company",
        element: <NewCompany />,
      },
      {
        path: "/signup/reader",
        element: <SignupReader />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Signin />,
  },
])

export default indexRouter
