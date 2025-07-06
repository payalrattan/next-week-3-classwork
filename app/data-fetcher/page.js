import { DataFetcher } from "@/components/dataFetcher/DataFetcher";
import styles from "./DataFetcherPage.module.css";

export default function DataFetcherPage() {
  return (
    <div className={styles.dataFetcherContainer}>
      <h1 className={styles.dataFetcherTitle}>Fetching People Details...</h1>
      <DataFetcher />
    </div>
  );
}
