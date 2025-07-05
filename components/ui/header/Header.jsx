import Link from "next/link";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/clock" className={styles.link}>Clock</Link>
      <Link href="/simple-form" className={styles.link}>Simple Form</Link>
      <Link href="/counter" className={styles.link}>Counter</Link>
      <Link href="/todo" className={styles.link}>ToDo</Link>
      <Link href="/data-fetcher" className={styles.link}>Data Fetcher</Link>
    </nav>
  );
};
