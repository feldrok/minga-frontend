import Home from "../router/Home/Home"
import Layout from "../layouts/Layout/Layout"
import ListComments from "../components/ListComments/ListComments"
import React from "react"
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
])

export default indexRouter
