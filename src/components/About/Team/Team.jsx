import React from "react";
import styles from "./Team.module.css";
import cesforila from "../../../assets/team/cesforila.png";
import colleen from "../../../assets/team/colleen.png";
import danial from "../../../assets/team/danial.png";
import haldone from "../../../assets/team/haldone.png";
import nik from "../../../assets/team/nik.png";
import sanfole from "../../../assets/team/sanfole.png";

export default function Team() {
  const data = [
    { name: "Danial Def", cases: 301, image: danial },
    { name: "Sanfole", cases: 805, image: sanfole },
    { name: "Cesforila", cases: 407, image: cesforila },
    { name: "Colleen", cases: 180, image: colleen },
    { name: "Haldone", cases: 212, image: haldone },
    { name: "Nik Jeo", cases: 350, image: nik },
  ];
  return (
    <>
      {data.map((member) => (
        <div className={styles.teammember}>
          <img src={member.image} alt={member.name} />
          <div className={styles.content}>
            <h3 className={styles.title}>{member.name}</h3>
            <p className={styles.cases}>{`${member.cases} Cases`}</p>
          </div>
        </div>
      ))}
    </>
  );
}
