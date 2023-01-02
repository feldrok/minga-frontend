import Home from "../router/Home/Home"
import Layout from "../layouts/Layout/Layout"
import React from 'react'
import { createBrowserRouter } from "react-router-dom"

const indexRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        }
      ],
    },
  ],
)

export default indexRouter