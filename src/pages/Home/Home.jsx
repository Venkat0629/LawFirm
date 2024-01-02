import React from "react";
import Hero from "../../components/Hero/Hero";
import Attorneys from "../../components/Attorneys/Attorneys";
import PracticeAreas from "../../components/Areas/Areas";
import About from "../../components/About/About";
import styles from "./Home.module.css";
import Contact from "../../components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className={styles.wrapper}>
        <Attorneys />
        <PracticeAreas />
        <About />
        <Contact />
      </div>
    </>
  );
}
