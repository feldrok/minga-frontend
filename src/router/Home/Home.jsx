import "./Home.css"

import { Link, Outlet } from "react-router-dom"

import Carousel from "../../components/Carousel/Carousel"
import Hero from "../../components/Hero/Hero"
import React from "react"

function Home() {
  return (
    <>
      <Hero>
        <>
          <h1 className="hero-title">Welcome to Minga! Your favorite comic and manga website!</h1>
          <p className="hero-text">
Are you ready to dive deep into the annals of comic and manga history?
          </p>
          <Link className="get-started-btn" to={"/"}>
            Begin Your Journey →
          </Link>
        </>
      </Hero>
      <Carousel/>
      <Outlet />
    </>
  )
}

export default Home
