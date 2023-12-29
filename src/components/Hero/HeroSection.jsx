import React from "react";
import styles from "./HeroSection.module.css";
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
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
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
