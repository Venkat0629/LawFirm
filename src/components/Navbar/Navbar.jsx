import React from "react";
import styles from "./Navbar.module.css";
import Button from "./Button/Button";
import Logo from "./Logo/Logo";
import FirmLogo from "../../assets/logo.svg";
import Navigations from "./Navigations/Navigations";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <a href="/">
        <Logo props={FirmLogo} />
      </a>
      <Navigations />
      <Button>Contact Now</Button>
    </div>
  );
}
