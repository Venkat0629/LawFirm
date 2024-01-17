import React from "react";
import styles from "./Contact.module.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LanguageIcon from "@mui/icons-material/Language";

export default function Contact() {
  const [user, setUser] = useState({ submit: false });
  const handleChange = (e) => {
    switch (e.target.id) {
      case "name": {
        setUser({ ...user, name: e.target.value });
        break;
      }
      case "email": {
        setUser({ ...user, email: e.target.value });
        break;
      }
      case "subject": {
        setUser({ ...user, subject: e.target.value });
        break;
      }
      case "message": {
        setUser({ ...user, message: e.target.value });
        break;
      }
      default: {
        setUser({ ...user });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.email && user.subject && user.message)
      setUser({ ...user, submit: true });
    else alert("Please Fill All Mandatory Fields");
  };

  return user.submit ? (
    <div className={styles.thankswrapper}>
      <h1 className={styles.title}>Thanks You! {user.name}</h1>
      <h4 className={styles.text}>Our Team will reach out to you shortly.</h4>
    </div>
  ) : (
    <div className={styles.wrapper}>
      <div className={styles.formwrapper}>
        <h1 className={styles.title}>Write us</h1>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <TextField
            id="name"
            label="Name"
            variant="standard"
            value={user.name}
            onChange={handleChange}
            InputLabelProps={{
              style: { color: "grey" },
            }}
            InputProps={{
              style: { color: "white" },
            }}
          />
          <TextField
            id="email"
            label="Email"
            variant="standard"
            value={user.email}
            onChange={handleChange}
            InputLabelProps={{
              style: { color: "grey" },
            }}
            InputProps={{
              style: { color: "white" },
            }}
          />
          <TextField
            id="subject"
            label="Subject"
            variant="standard"
            value={user.subject}
            onChange={handleChange}
            InputLabelProps={{
              style: { color: "grey" },
            }}
            InputProps={{
              style: { color: "white" },
            }}
          />
          <TextField
            id="message"
            label="Message"
            value={user.message}
            variant="standard"
            multiline
            rows={4}
            onChange={handleChange}
            InputLabelProps={{
              style: { color: "grey" },
            }}
            InputProps={{
              style: { color: "white" },
            }}
          />
          <button className={styles.button}>Send Message</button>
        </form>
      </div>
      <div className={styles.contactwrapper}>
        <h1 className={styles.title}>Contact information</h1>
        <h4 className={styles.text}>
          We're open for any suggestion or just to have a chat
        </h4>
        <div className={styles.contact}>
          <div className={styles.contentwrapper}>
            <div className={styles.label}>
              <LocationOnIcon />
              <p>Address: </p>
            </div>
            <p className={styles.text}>
              198 West 21th Street, Suite 721 New York NY 10016
            </p>
          </div>
          <div className={styles.contentwrapper}>
            <div className={styles.label}>
              <CallIcon />
              <p>Phone:</p>
            </div>
            <p className={styles.text}>+ 1235 2355 98</p>
          </div>
          <div className={styles.contentwrapper}>
            <div className={styles.label}>
              <AlternateEmailIcon />
              <p>Email: </p>
            </div>
            <p className={styles.text}>support@igstudio.com</p>
          </div>
          <div className={styles.contentwrapper}>
            <div className={styles.label}>
              <LanguageIcon />
              <p>Website: </p>
            </div>
            <p className={styles.text}>igStudio.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
