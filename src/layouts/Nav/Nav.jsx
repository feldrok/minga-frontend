import "./Nav.css"

import { Link, NavLink, useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import userActions from "../../store/user/actions"

const { signInToken } = userActions
const routes = [
    {
        path: "/",
        name: "Home",
    },
    {
        path: "/newchapter",
        name: "New Chapter",
    },
    {
        path: "/comics",
        name: "Comics",
    },
    {
        path: "/mycomics",
        name: "My Comics",
    },
]

function Nav() {
    const userStore = useSelector((state) => state.user)
    const [navigation, setNavigation] = useState(false)
    const [navBar, setNavBar] = useState(false)
    const [isLogged, setIsLogged] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        let token = localStorage.getItem("token")
        if (token || token === undefined) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
        if (userStore.user?.length === 0) {
            dispatch(signInToken())
        }
    }, [])

    console.log(userStore)
    const toggleNav = () => {
        setNavigation(!navigation)
    }

    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate(0)
    }

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }

    window.addEventListener("scroll", changeBackground)

    return (
        <nav>
            <div className={`main-nav ${navBar ? "active" : ""}`}>
                <div className="nav-item">
                    <img className="nav-logo" src="/logo.png" alt="logo" />
                </div>
                <div className="nav-item nav-items">
                    {routes.map((route, index) => (
                        <NavLink
                            className="nav-link"
                            to={route.path}
                            key={index}
                        >
                            {route.name}
                        </NavLink>
                    ))}
                </div>
                {isLogged ? (
                    <div className="nav-item logout-button">
                        <button className="login-btn" onClick={handleLogout}>
                            Log out
                        </button>
                    </div>
                ) : (
                    <div className="nav-item log-button">
                        <Link className="login-btn" to={"/signin"}>
                            Log in
                        </Link>
                        <Link className="login-btn" to={"/signup"}>
                            Sign up
                        </Link>
                    </div>
                )}

                <div onClick={toggleNav} className="nav-item menu-button">
                    <svg
                        className={"menu-icon"}
                        onClick={toggleNav}
                        width="55"
                        height="55"
                        viewBox="0 0 55 55"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11 16H37"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                        <path
                            d="M11 27H37"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                        <path
                            d="M11 39H37"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>
            <div className={`mobile-nav ${navigation ? "show-menu" : ""} `}>
                <div className="profile-menu">
                    <div className="profile-container">
                        {userStore.user.length === 0 ? null : (
                            <img
                                className="profile-picture-mobile-nav"
                                src={userStore.user?.response?.user?.photo}
                                alt="logo"
                            />
                        )}

                        <div>
                            <p className="profile-name">User name</p>
                            <p className="profile-email">
                                {userStore?.user?.length === 0
                                    ? null
                                    : userStore.user?.response?.user?.mail}
                            </p>
                        </div>
                    </div>

                    <div onClick={toggleNav} className="close-button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            width={15}
                            height={10}
                            viewBox="0 0 24 24"
                            strokeWidth="1.2"
                            stroke="currentColor"
                            className="close-icon"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </div>
                </div>

                <div className="mobile-nav-items">
                    <ul className="mobile-nav-links">
                        {routes.map((route, index) => (
                            <li key={index}>
                                <NavLink
                                    className="mobile-nav-link"
                                    to={route.path}
                                >
                                    {route.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mobile-nav-items">
                    <ul className="mobile-nav-links">
                        {isLogged ? (
                            <li>
                                <button
                                    className="mobile-nav-link"
                                    onClick={handleLogout}
                                >
                                    Log out
                                </button>
                            </li>
                        ) : (
                            <>
                                <Link
                                    className="mobile-nav-link"
                                    to={"/signin"}
                                >
                                    Log in
                                </Link>
                                <Link
                                    className="mobile-nav-link"
                                    to={"/signup"}
                                >
                                    Sign up
                                </Link>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
