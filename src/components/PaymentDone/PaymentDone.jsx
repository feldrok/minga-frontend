import React from "react";
import styles from "./PaymentDone.module.css";
import { useNavigate } from "react-router";

function PaymentDone() {
  const navigate = useNavigate();

  return (
    <div className={styles.modal}>
        <div className={styles.modalContenedor}>
          <div className={styles.text}>
            <p className={styles.description}>
              The donation has been made successfully!
            </p>
          </div>

          <div className={styles.containerCard}></div>
          <button className={styles.x} onClick={() => navigate("/")}>
            Back home
          </button>
        </div>
      </div> 
  );
}

export default PaymentDone;
