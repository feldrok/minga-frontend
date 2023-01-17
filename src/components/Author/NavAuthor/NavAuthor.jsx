import "./NavAuthor.css";

import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/newchapter",
    name: "New Chapter"
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
  const [navigation, setNavigation] = useState(false);
  const [navBar, setNavBar] = useState(false);

  const toggleNav = () => {
    setNavigation(!navigation);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav>
      <div className={`main-nav ${navBar ? "active" : ""}`}>
        <div className="nav-item">
          <img className="nav-logo" src="../../logo.png" alt="logo" />
        </div>
        <div className="nav-item nav-items">
          {routes.map((route, index) => (
            <NavLink className="nav-link" to={route.path} key={index}>
              {route.name}
            </NavLink>
          ))}
        </div>
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
            <path d="M11 16H37" strokeWidth="3" strokeLinecap="round" />
            <path d="M11 27H37" strokeWidth="3" strokeLinecap="round" />
            <path d="M11 39H37" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className={`mobile-nav ${navigation ? "show-menu" : ""} `}>
        <div className="profile-menu">
          <div className="profile-container">
            <img
              className="profile-picture-mobile-nav"
              src="./userpic.png"
              alt="logo"
            />
            <div>
              <p className="profile-name">User name</p>
              <p className="profile-email">random@email.com</p>
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
                <NavLink className="mobile-nav-link" to={route.path}>
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;