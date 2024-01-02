import React from "react";
import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";

export default function Button({ children }) {
  const navigate = useNavigate();
  const handleButton = (e) => {
    navigate("/");
  };
  return (
    <button className={styles.button} onClick={handleButton}>
      {children}
    </button>
  );
}
