import React from "react";
import styles from "./PaymentError.module.css";
import { useNavigate } from "react-router";

function PaymentError() {
  const navigate = useNavigate();

  return (
    <div className={styles.modal}>
      <div className={styles.modalContenedor}>
        <div className={styles.text}>
          <p className={styles.description}>
          Error in the donation process
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

export default PaymentError;
