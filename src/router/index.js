import Home from "../router/Home/Home"
import Layout from "../layouts/Layout/Layout"
import MyComics from "../router/MyComics/MyComics"
import NewComic from "./NewComic/NewComic"
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
  }


],
)

export default indexRouter

