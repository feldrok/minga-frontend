import './Button.css'

import React from 'react'

function Button({type, action, text}) {
  return (
    <>
      <button className={type} onClick={action}>{text}</button>
    </>
  )
}

export default Button

