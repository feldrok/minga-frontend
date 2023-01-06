import AccountSetup from "../router/AccountSetup/AccountSetup"
import AccountType from "../components/AccountType/AccountType"
import NewAuthor from "../components/NewAuthor/NewAuthor"
import SigninForm from "../components/SigninForm/SigninForm"
import SignupForm from "../components/SignupForm/SignupForm"
import { createBrowserRouter } from "react-router-dom"
import Layout from "../layouts/Layout/Layout"
import Signup from "../router/Signup/Signup"
import Home from "../router/Home/Home"
import React from "react"

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
        // element: <NewCompany />,
      },
      {
        path: "/accountsetup/author",
        element: <NewAuthor />,
      },
      {
        path: "accountsetup/reader",
        // element: <NewReader />,
      }
    ]
  },
])

export default indexRouter