import React from "react";
import styles from "./Footer.module.css";
import NavBar from "../Navbar/Navbar";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <NavBar props={true} />
      <div className={styles.wrapper}>
        <div className={styles.rights}>
          <p>© 2020 Acme. All right reserved.</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
}
