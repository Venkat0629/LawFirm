import React from "react";
import styles from "./Attorneys.module.css";
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
            Our team consist of seasoned legal professionals with over 15 years
            of experience in Criminal Law and graduates of Harvard Law School,
            comprehensive understanding of the law with a track record of
            successful case resolutions.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <h1 className={`${styles.title} ${styles.nowrap}`}>Why Choose us?</h1>
        <div className={styles.cardwrapper}>
          <div className={styles.card}>
            <CardIcon className={styles.cardicon} />
            <h4 className={styles.cardtitle}>98% Success Rate</h4>
            <p className={styles.cardtext}>
              Your success is our priority, backed by a perfect track record,
              making us your trusted partner for legal matters.
            </p>
            <Chip
              label="Read More"
              onClick={handleChipClick}
              className={styles.chip}
            />
          </div>
          <div className={styles.card}>
            <CardIcon className={styles.cardicon} />
            <h4 className={styles.cardtitle}>100% Success Rate</h4>
            <p className={styles.cardtext}>
              Count on us for a 100% success rate, ensuring reliable legal
              representation and unwavering dedication to securing favorable
              outcomes.
            </p>
            <Chip
              label="Read More"
              onClick={handleChipClick}
              className={styles.chip}
            />
          </div>
          <div className={styles.card}>
            <CardIcon className={styles.cardicon} />
            <h4 className={styles.cardtitle}>98% Success Rate</h4>
            <p className={styles.cardtext}>
              Choose us for a history of success. Our 98% success rate reflects
              unwavering commitment to achieving favorable results in every
              case.
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
