import { ToDo } from "@/components/ToDo/ToDo";
import styles from "./TodoPage.module.css";

export default function ToDoPage() {
  return (
    <div className={styles.todoContainer}>
      <h1 className={styles.todoTitle}>ToDo List</h1>
      <div>
        <ToDo
          listClassName={styles.todoList}
          itemClassName={styles.todoItem}
        />
      </div>
    </div>
  );
}
