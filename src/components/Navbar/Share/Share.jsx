import React from "react";
import styles from "./Share.module.css";
import { ReactComponent as Instagram } from "../../../assets/Instagram.svg";
import { ReactComponent as Twitter } from "../../../assets/twitter.svg";
import { ReactComponent as Facebook } from "../../../assets/facebook.svg";
import { ReactComponent as Pinterest } from "../../../assets/pinterest.svg";
import { Link } from "react-router-dom";

export default function Share() {
  return (
    <div className={styles.share}>
      <Link to="/">
        <Instagram />
      </Link>
      <Link to="/">
        <Facebook />
      </Link>
      <Link to="/">
        <Twitter />
      </Link>
      <Link to="/">
        <Pinterest />
      </Link>
    </div>
  );
}
