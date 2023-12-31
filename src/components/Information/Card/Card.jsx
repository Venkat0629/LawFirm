import React from "react";
import styles from "./Card.module.css";

export default function Card({ cardData }) {
  return (
    <div className={styles.card}>
      <img
        src={cardData.image}
        alt={cardData.name}
        className={styles.cardicon}
      />
      <h4 className={styles.cardtitle}>{cardData.name}</h4>
      <p className={styles.subtitle}>{`Ceo of ${cardData.company}`}</p>
      <p className={styles.cardtext}>{cardData.message}</p>
    </div>
  );
}
