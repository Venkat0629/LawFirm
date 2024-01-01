import styles from "./Silder.module.css";
import ArrowIcon from "@mui/icons-material/EastRounded";

export default function Slider({ type }) {
  switch (type) {
    case "left": {
      return (
        <div className={`${styles.arrow} ${styles.left}`}>
          <ArrowIcon className={styles.icon} />
        </div>
      );
    }
    case "right": {
      return (
        <div className={`${styles.arrow}`}>
          <ArrowIcon className={styles.icon} />
        </div>
      );
    }
    default: {
      return <></>;
    }
  }
}
