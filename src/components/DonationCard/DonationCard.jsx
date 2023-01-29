import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import React from "react";
import donateAction from "../../store/mercadopago/actions";
import styles from "./DonationCard.module.css";
import { useNavigate } from "react-router";

const {donation } = donateAction

function DonationCard() {

const mercadopagoStore = useSelector((state) => console.log(state)) 
console.log(mercadopagoStore) 

const dispatch= useDispatch()

  const [value, setValue] = useState("")
  console.log(value)


  useEffect(() => {
    dispatch(donation(value)) 
  }) 

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalContenedor}>

          <div className={styles.text}>
          <button className={styles.x} onClick={()=> navigate("/") } > x </button>
          <p className={styles.description}> How much do you want to donate? </p>
          </div>

          <div className={styles.containerCard}>
            <p className={styles.donate}>Donate &#9825;</p>
            <div className={styles.containerPrice}>
            <option value="1000"  onClick={(e) => setValue(e.target.value)} className={styles.price} > $1000 </option>
            </div>
          </div>

          <div className={styles.containerCard}>
            <p className={styles.donate}>Donate &#9825;</p>
            <div className={styles.containerPrice}>
            <option value="5000" onClick={(e) => setValue(e.target.value)} className={styles.price} > $5000 </option>
            </div>
          </div>

          <div className={styles.containerCard}>
            <p className={styles.donate}>Donate &#9825;</p>
            <div className={styles.containerPrice}>
            <option value="10000" onClick={(e) => setValue(e.target.value)} className={styles.price} > $10000 </option>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default DonationCard;
