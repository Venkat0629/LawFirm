import React, { useState } from "react";
import styles from "./Contact.module.css";
import Accordion from "./Accordian/Accordian";

export default function Contact() {
  const [user, setUser] = useState({});
  const handleEmailChange = (e) => {
    setUser({ email: e.target.value }, ...user);
  };
  const handleNameChange = (e) => {
    setUser({ name: e.target.value }, ...user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>FAQ</h1>
      <div className={styles.accordionwrapper}>
        <p className={styles.text}>
          If you have additional questions or need further assistance, please
          don't hesitate to reach out to our dedicated team. We're here to
          provide the support and guidance you need.
        </p>
        <div className={styles.accordion}>
          <Accordion />
        </div>
      </div>
      <div className={styles.letterwrapper}>
        <h1 className={styles.lettertitle}>Subscribe Our Newsletter</h1>
        <form className={styles.inputwrapper} onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Name"
            className={styles.name}
            value={user.name}
            onChange={(e) => handleNameChange(e)}
          />
          <input
            type="text"
            placeholder="Enter your Email"
            className={styles.email}
            value={user.email}
            onChange={(e) => handleEmailChange(e)}
          />
          <button className={styles.button}>SEND</button>
        </form>
      </div>
    </div>
  );
}
