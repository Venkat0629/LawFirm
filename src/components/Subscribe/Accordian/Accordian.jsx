import React from "react";
import styles from "./Accordian.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ReactComponent as Plus } from "../../../assets/plus.svg";
import { useState } from "react";

export default function BasicAccordion() {
  const [state, setState] = useState({
    panel1: false,
    panel2: false,
    panel3: false,
    panel4: false,
  });
  const handleAccordian = (panel) => {
    setState((prevState) => ({
      ...prevState,
      [panel]: !prevState[panel],
    }));
  };
  return (
    <div>
      <Accordion
        className={styles.accordain}
        expanded={state.panel1}
        onChange={() => handleAccordian("panel1")}
      >
        <AccordionSummary expandIcon={!state.panel1 && <Plus />}>
          <h4 className={styles.title}>How much is my case worth?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.content}>
            If you've been involved in an accident or sustained an injury, it's
            crucial to file a personal injury report. This document serves as a
            formal record of the incident, including details about what
            happened, when it occurred, and any injuries sustained. Filing a
            timely and accurate report can strengthen your case and help ensure
            you receive fair compensation.
          </p>
        </AccordionDetails>
      </Accordion>
      <hr className={styles.separater} />
      <Accordion
        className={styles.accordain}
        expanded={state.panel2}
        onChange={() => handleAccordian("panel2")}
      >
        <AccordionSummary expandIcon={!state.panel2 && <Plus />}>
          <h4 className={styles.title}>How much is my case worth?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.content}>
            The value of your case depends on various factors, including the
            extent of your injuries, medical expenses, lost wages, and the
            impact on your quality of life. Our experienced legal team will
            assess these elements, gather relevant evidence, and consult with
            experts if needed to provide an accurate estimate of your case's
            worth. Every case is unique, and we strive to secure the maximum
            compensation for our clients.
          </p>
        </AccordionDetails>
      </Accordion>
      <hr className={styles.separater} />
      <Accordion
        className={styles.accordain}
        expanded={state.panel3}
        onChange={() => handleAccordian("panel3")}
      >
        <AccordionSummary expandIcon={!state.panel3 && <Plus />}>
          <h4 className={styles.title}>
            What should I do right after car accidect?
          </h4>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.content}>
            In the aftermath of a car accident, your priority should be ensuring
            safety and seeking medical attention for any injuries. Once
            immediate concerns are addressed, take photographs of the accident
            scene, exchange contact information with the other parties involved,
            and gather witness statements if possible. Report the incident to
            the police and notify your insurance company promptly. Lastly,
            consult with our legal team to guide you through the next steps and
            protect your rights.
          </p>
        </AccordionDetails>
      </Accordion>
      <hr className={styles.separater} />
      <Accordion
        className={styles.accordain}
        expanded={state.panel4}
        onChange={() => handleAccordian("panel4")}
      >
        <AccordionSummary expandIcon={!state.panel4 && <Plus />}>
          <h4 className={styles.title}>How much is my case worth?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.content}>
            Determining the value of your case involves a thorough evaluation of
            the damages you've suffered. This includes medical bills, property
            damage, lost wages, pain and suffering, and more. Our attorneys will
            carefully review your case, consult with experts, and leverage their
            experience to provide an accurate assessment. We are committed to
            maximizing the compensation you deserve for the challenges you've
            faced due to the incident.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
