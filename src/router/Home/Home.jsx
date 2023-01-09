import "./Home.css"

import React, { useState } from "react"

import Button from "../../components/Button/Button"
import Hero from "../../components/Hero/Hero"
import { Link } from "react-router-dom"
import React from "react"

function Home() {
  return (
    <>
      <Hero>
        <>
          <Link className="announcement-btn" to={"#"}>
            Anunciamos nuestra próxima ronda de financiación. Leer más →
          </Link>
          <h1 className="hero-title">Tu tienda de comics favorita</h1>
          <p className="hero-text">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <Link className="get-started-btn" to={"#comics"}>
            Empezar →
          </Link>
        </>
      </Hero>
      <div className="main-content">
        <Button
          type={"button-new-comment"}
          text={"New comment"}
          action={handleModal}
        />
      </div>
    </>
  )
}

export default Home
