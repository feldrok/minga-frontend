import AccountSetup from "../router/AccountSetup/AccountSetup"
import AccountType from "../components/AccountType/AccountType"
import Chapters from "../components/Chapters/Chapters"
import Comic from "./Comic/Comic"
import Home from "../router/Home/Home"
import Layout from "../layouts/Layout/Layout"
import ListComments from "../components/ListComments/ListComments"
import MyComics from "../router/MyComics/MyComics"
import NewAuthor from "../components/NewAuthor/NewAuthor"
import NewChapter from "./NewChapter/NewChapter"
import NewComic from "./NewComic/NewComic"
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
                children: [
                    {
                        path: "/newcomment",
                        element: <ListComments />,
                        children: [
                            {
                                path: "/newcomment/:comment_id",
                                element: <ListComments />,
                            },
                        ],
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
        element: <NewComic />,
    },
    {
        path: "/newchapter",
        element: <NewChapter />,
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
        path: "/comic/:id",
        element: <Comic />, 
    },
    {
        path: "/pages",
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
                path: "/accountsetup/author",
                element: <NewAuthor />,
            },
            {
                path: "accountsetup/reader",
                // element: <NewReader />,
            },
        ],
    },
])

export default indexRouter
