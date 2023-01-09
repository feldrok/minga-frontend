import React from 'react'
import AccountSetup from "../router/AccountSetup/AccountSetup"
import AccountType from "../components/AccountType/AccountType"
import Home from "../router/Home/Home"
import SigninForm from "../components/SigninForm/SigninForm"
import SignupForm from "../components/SignupForm/SignupForm"
import Layout from "../layouts/Layout/Layout"
import Signup from "../router/Signup/Signup"
import React from "react"

import NewAuthor from "../components/NewAuthor/NewAuthor"
import ListComments from "../components/ListComments/ListComments"
import NewCompany from "../components/NewCompany/NewCompany"
import NewChapter from "./NewChapter/NewChapter"
import MyComics from "../router/MyComics/MyComics"
import NewComic from "./NewComic/NewComic"

import { createBrowserRouter } from "react-router-dom"

const indexRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/newcomment",
            element: <ListComments />,
            children: [
              {
                path: "/newcomment/:comment_id",
                element: <ListComments />,
              }
            ]
          },
        ],
      },
    ],
  },
  {
    path: "/mycomics",
    element: <MyComics />,
  },
  {
    path: "/newcomics",
    element: <NewComic />
  },
  {
    path: "/new-chapter",
    element: <NewChapter />
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
<<<<<<< HEAD
        path: "/accountsetup/author",
        element: <NewAuthor />,
=======
        path: "accountsetup/author",
        // element: <NewAuthor />,
>>>>>>> main
      },
      {
        path: "accountsetup/reader",
        // element: <NewReader />,
      }
    ]
  },
])

export default indexRouter
