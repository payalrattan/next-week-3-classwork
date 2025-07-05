import { Clock } from "@/components/Clock/Clock";
import styles from "./ClockPage.module.css";

export default function ClockPage() {
  return (
    <div className={styles.clockContainer}>
      <h1 className={styles.clockTitle}>Clock</h1>
      <Clock />
    </div>
  );
}
