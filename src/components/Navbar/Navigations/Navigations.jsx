import React from "react";
import styles from "./Navigations.module.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={styles.navigations}>
      <Link to="/" className={styles.text}>
        Home
      </Link>
      <Link to="/attorneys" className={styles.text}>
        Attorneys
      </Link>
      <Link to="/practices" className={styles.text}>
        Practice Areas
      </Link>
      <Link to="/about" className={styles.text}>
        About Us
      </Link>
    </div>
  );
}
