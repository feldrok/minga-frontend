import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

import React from "react";
import donateAction from "../../store/mercadopago/actions";
import styles from "./DonationCard.module.css";
import { useNavigate } from "react-router";
import userActions from "../../store/user/actions";

const { donation } = donateAction;
const { signInToken } = userActions;

function DonationCard() {
  const mercadopagoStore = useSelector((state) => state?.mercadopago);
  const Store = useSelector((state) => console.log(state));

  const dispatch = useDispatch();

  let donation1 = 1000;
  let donation2 = 5000;
  let donation3 = 10000;
  let donation4 = useRef();

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

  const getDonation4 = () => {
    const price = parseInt(donation4.current.value);
    console.log(price);
    const order = {
      unit_price: price,
    };
    dispatch(donation(order));
  };

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalContenedor}>
   

          <div className={styles.containerImagen}>
            <img
              src="https://media.tenor.com/8ctGtM0JDmUAAAAM/marvel-avengers.gif"
              alt=""
              className={styles.imagen}
            />
          </div>

          <div className={styles.text}>
            <p className={styles.description}>
              {" "}
              How much would you like to donate?{" "}
            </p>
          </div>

          <div className={styles.cards}>
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

          <div className={styles.containerOther}>
            <p className={styles.donate}>Choose an amount</p>

            <div className={styles.containerPrice}>
              <input
                type="text"
                placeholder="$"
                className={styles.input}
                ref={donation4}
              />
              <button className={styles.donate2} onClick={getDonation4}>
                Accept
              </button>
            </div>


          </div>
          <div className= {styles.containerButton}>
            <button className={styles.x} onClick={() => navigate("/")}>
              Home
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default DonationCard;
