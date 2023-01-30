import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

import React from "react";
import donateAction from "../../store/mercadopago/actions";
import styles from "./DonationCard.module.css";
import { useNavigate } from "react-router";
import userActions from "../../store/user/actions"

const { donation } = donateAction;
const { signInToken } = userActions


function DonationCard() {
  const mercadopagoStore = useSelector((state) => state?.mercadopago);
  const Store = useSelector((state) => console.log(state));
  


  const dispatch = useDispatch();

  let donation1 = 1000;
  let donation2 = 5000;
  let donation3 = 10000;

  const getPrice1 = () => {
    const order = {
      unit_price: donation1,
    };
    dispatch(donation(order));
  };

  const getPrice2 = () => {
    const order = {
      unit_price: donation2,
    };
    dispatch(donation(order));
  };

  const getPrice3 = () => {
    const order = {
      unit_price: donation3,
    };
    dispatch(donation(order));
    
  };

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalContenedor}>
          <div className={styles.text}>
            <button className={styles.x} onClick={() => navigate("/")}>
              {" "}
              ←{" "}
            </button>
            <p className={styles.description}>
              {" "}
              How much do you want to donate?{" "}
            </p>
          </div>

          <div className={styles.containerCard}>
            <p className={styles.donate}>Donate &#9825;</p>
            <div className={styles.containerPrice}>
              <button className={styles.price} onClick={getPrice1}>
                $1000
              </button>
            </div>
          </div>

          <div className={styles.containerCard}>
            <p className={styles.donate}>Donate &#9825;</p>
            <div className={styles.containerPrice}>
              <button className={styles.price} onClick={getPrice2}>
                $5000
              </button>
            </div>
          </div>

          <div className={styles.containerCard}>
            <p className={styles.donate}>Donate &#9825;</p>
            <div className={styles.containerPrice}>
              <button className={styles.price} onClick={getPrice3}>
                $10000
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DonationCard;
