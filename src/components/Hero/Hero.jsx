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
          No man is above the law and no man is below it: nor do we ask any
          man's permission when we ask him to obey it. It is not wisdom but
          Authority that makes a law. At his best, man is the noblest of all
          animals; separated from law and justice he is the worst.
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
