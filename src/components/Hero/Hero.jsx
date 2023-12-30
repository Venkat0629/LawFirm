import React from "react";
import styles from "./Hero.module.css";
import { useState } from "react";
import { ReactComponent as Hero } from "../../assets/Hero.svg";
import { Chip } from "@mui/material";
import { ReactComponent as EmailIcon } from "../../assets/Message.svg";

export default function HeroSection() {
  const [value, setValue] = useState("");
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  const handleChipClick = (e) => {
    console.log("Let's Talk", e.target.value);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          You don’t have to <strong>Fight them Alone.</strong>
        </h1>
        <p className={styles.subtitle}>
          At <strong>IG STUDIO</strong>, we're your dedicated ally, providing
          unwavering support for confident navigation of legal challenges. We
          stand as the strength in your corner, fighting passionately for your
          rights and the best possible outcomes. Your victory is our mission —
          let's overcome legal hurdles together.
        </p>

        <div className={styles.emailwrapper}>
          <div className={styles.inputwrapper}>
            <EmailIcon className={styles.icon} />
            <input
              placeholder="Enter your email address"
              value={value}
              type="email"
              className={styles.input}
              onChange={handleEmailChange}
            />
          </div>

          <Chip
            label="Let's Talk"
            onClick={handleChipClick}
            className={styles.chip}
          />
        </div>
      </div>

      <Hero className={styles.heroimage} />
    </div>
  );
}
