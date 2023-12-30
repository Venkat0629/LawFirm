import React from "react";
import styles from "./Attorney.module.css";
import { Chip } from "@mui/material";
import { ReactComponent as CardIcon } from "../../assets/card.svg";

export default function Attorney() {
  const handleChipClick = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>Let’s Introduce Ourself</h1>
        <hr className={styles.separater} />
        <div className={styles.titlewrapper}>
          <h3 className={styles.subtitle}>Criminal Lawyer</h3>
          <p className={styles.text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exercitation.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <h1 className={styles.title}>Why Choose us?</h1>
        <div className={styles.cardwrapper}>
          <div className={styles.card}>
            <CardIcon className={styles.cardicon} />
            <h3>98% Success Rate</h3>
            <p className={styles.cardtext}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <Chip
              label="Read More"
              onClick={handleChipClick}
              className={styles.chip}
            />
          </div>
          <div className={styles.card}>
            <CardIcon className={styles.cardicon} />
            <h3>100% Success Rate</h3>
            <p className={styles.cardtext}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <Chip
              label="Read More"
              onClick={handleChipClick}
              className={styles.chip}
            />
          </div>
          <div className={styles.card}>
            <CardIcon className={styles.cardicon} />
            <h3>98% Success Rate</h3>
            <p className={styles.cardtext}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <Chip
              label="Read More"
              onClick={handleChipClick}
              className={styles.chip}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
