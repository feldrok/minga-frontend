import Home from "../router/Home/Home"
import Layout from "../layouts/Layout/Layout"
import React from 'react'
import NewChapter from "./NewChapter/NewChapter"

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
    {
      path: "/new-chapter",
      element:<NewChapter/>
    },
  ],
)

export default indexRouter