import React from "react";
import styles from "./Navigations.module.css";

export default function NavBar() {
  return (
    <div className={styles.navigations}>
      <p>Home</p>
      <p>Attorneys</p>
      <p>Practice Areas</p>
      <p>About Us</p>
    </div>
  );
}
