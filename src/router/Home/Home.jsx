import "./Home.css"

import React, { useState } from "react"

import Button from "../../components/Button/Button"
import CommentModal from "../../components/CommentModal/CommentModal"
import Hero from "../../components/Hero/Hero"
import { Link } from "react-router-dom"

function Home() {
  const [visible, setVisible] = useState(false)

  const handleModal = () => {
    setVisible(!visible)
  }
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
        <>
          <CommentModal  action={handleModal} type={visible ? "modal-overlay" : "hidden"} />
        </>
      </div>
    </>
  )
}

export default Home
