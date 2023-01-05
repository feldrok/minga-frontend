import AccountType from "../components/AccountType/AccountType"
import Home from "../router/Home/Home"
import Layout from "../layouts/Layout/Layout"
import React from "react"
import SigninForm from "../components/SigninForm/SigninForm"
import Signup from "../router/Signup/Signup"
import SignupForm from "../components/SignupForm/SignupForm"
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
        element: <SignupForm />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SigninForm />,
  },
  {
    path: "/accounttype",
    element: <AccountType />,
  },
])

export default indexRouter
