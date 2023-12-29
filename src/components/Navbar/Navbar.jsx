import React from "react";
import styles from "./Navbar.module.css";
import Button from "./Button/Button";
import Logo from "./Logo/Logo";
import FirmLogo from "../../assets/logo.svg";
import Navigations from "./Navigations/Navigations";
import { Link } from "react-router-dom";
import Share from "./Share/Share";

export default function NavBar({ props }) {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <Logo props={FirmLogo} />
      </Link>
      <Navigations />
      {props ? <Share /> : <Button>Contact Now</Button>}
    </div>
  );
}
