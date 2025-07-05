import { SimpleForm } from "@/components/form/SimpleForm";
import styles from "./SimpleFormPage.module.css";

export default function FormPage() {
  return (
    <div className={styles.simpleFormContainer}>
      <h1 className={styles.simpleFormTitle}>Simple Form</h1>
      <SimpleForm/>
    </div>
  );
}
