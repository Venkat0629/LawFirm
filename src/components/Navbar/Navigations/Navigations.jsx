import React from "react";
import styles from "./Navigations.module.css";
import { Link } from "react-scroll";

export default function NavBar() {
  return (
    <div className={styles.navigations}>
      <Link to="home" smooth={true} duration={500} className={styles.text}>
        Home
      </Link>
      <Link to="attorneys" smooth={true} duration={500} className={styles.text}>
        Attorneys
      </Link>
      <Link to="practiceAreas" smooth={true} duration={500} className={styles.text}>
        Practice Areas
      </Link>
      <Link to="about" smooth={true} duration={500} className={styles.text}>
        About Us
      </Link>
    </div>
  );
}
