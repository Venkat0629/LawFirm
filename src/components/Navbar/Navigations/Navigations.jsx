import React from "react";
import styles from "./Navigations.module.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={styles.navigations}>
      <Link to="/" className={styles.text}>
        Home
      </Link>
      <Link to="/" className={styles.text}>
        Attorneys
      </Link>
      <Link to="/" className={styles.text}>
        Practice Areas
      </Link>
      <Link to="/" className={styles.text}>
        About Us
      </Link>
    </div>
  );
}
