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
    { id: 1, name: "Danial Def", cases: 301, image: danial },
    { id: 2, name: "Sanfole", cases: 805, image: sanfole },
    { id: 3, name: "Cesforila", cases: 407, image: cesforila },
    { id: 4, name: "Colleen", cases: 180, image: colleen },
    { id: 5, name: "Haldone", cases: 212, image: haldone },
    { id: 6, name: "Nik Jeo", cases: 350, image: nik },
  ];
  return (
    <>
      {data.map((member) => (
        <div className={styles.teammember} key={member.id}>
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
