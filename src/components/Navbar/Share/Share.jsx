import React from "react";
import styles from "./Share.module.css";
import { ReactComponent as Instagram } from "../../../assets/share/Instagram.svg";
import { ReactComponent as Twitter } from "../../../assets/share/twitter.svg";
import { ReactComponent as Facebook } from "../../../assets/share/facebook.svg";
import { ReactComponent as Pinterest } from "../../../assets/share/pinterest.svg";
import { Link } from "react-router-dom";

export default function Share() {
  return (
    <div className={styles.share}>
      <Link to="https://www.instagram.com">
        <Instagram />
      </Link>
      <Link to="https://www.facebook.com">
        <Facebook />
      </Link>
      <Link to="https://twitter.com">
        <Twitter />
      </Link>
      <Link to="https://in.pinterest.com">
        <Pinterest />
      </Link>
    </div>
  );
}
