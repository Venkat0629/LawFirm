import React from "react";
import styles from "./Areas.module.css";
import business1 from "../../assets/practice areas/business1.png";
import business2 from "../../assets/practice areas/busniess2.png";
import partnership from "../../assets/practice areas/partnership.png";
import realestate from "../../assets/practice areas/realestate.png";
import elderabuse from "../../assets/practice areas/elderabuse.png";
import landlorddisputes from "../../assets/practice areas/landlorddisputes.png";

export default function Areas() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Area of Practices</h1>
      <div className={styles.imagewrapper}>
        <div
          className={`${styles.imagebox} ${styles.type1}`}
          style={{ backgroundImage: `url(${business1})` }}
        >
          BUSINESS LAW
        </div>
        <div
          className={`${styles.imagebox} ${styles.type2}`}
          style={{ backgroundImage: `url(${partnership})` }}
        >
          Partnership LAW
        </div>
        <div
          className={`${styles.imagebox} ${styles.type2}`}
          style={{ backgroundImage: `url(${realestate})` }}
        >
          REAL ESTATE LAW
        </div>
        <div
          className={`${styles.imagebox} ${styles.type1}`}
          style={{ backgroundImage: `url(${business2})` }}
        >
          BUSINESS LAW
        </div>
        <div
          className={`${styles.imagebox} ${styles.type1}`}
          style={{ backgroundImage: `url(${landlorddisputes})` }}
        >
          LANDLORD DISPUTES
        </div>
        <div
          className={`${styles.imagebox} ${styles.type2}`}
          style={{ backgroundImage: `url(${elderabuse})` }}
        >
          ELDER ABUSE
        </div>
      </div>
    </div>
  );
}
