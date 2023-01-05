import AccountSetup from "../router/AccountSetup/AccountSetup"
import AccountType from "../components/AccountType/AccountType"
import Home from "../router/Home/Home"
import Layout from "../layouts/Layout/Layout"
import NewCompany from "../components/NewCompany/NewCompany"
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
    path: "/accountsetup",
    element: <AccountSetup />,
    children: [
      {
        path: "/accountsetup",
        element: <AccountType />,
      },
      {
        path: "/accountsetup/company",
        element: <NewCompany />,
      },
      {
        path: "accountsetup/author",
        // element: <NewAuthor />,
      },
      {
        path: "accountsetup/reader",
        // element: <NewReader />,
      }
    ]
  },
])

export default indexRouter
