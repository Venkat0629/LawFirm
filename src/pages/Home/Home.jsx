import React from "react";
import Hero from "../../components/Hero/Hero";
import Attorneys from "../../components/Attorneys/Attorneys";
import PracticeAreas from "../../components/Areas/Areas";
import About from "../../components/About/About";
import styles from "./Home.module.css";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className={styles.wrapper}>
        <section id="home">
          <Hero className={styles.hero} />
        </section>
        <section id="attorneys">
          <Attorneys />
        </section>
        <section id="practiceAreas">
          <PracticeAreas />
        </section>
        <section id="about">
          <About />
          <Subscribe />
        </section>
      </div>
      <Footer />
    </>
  );
}
