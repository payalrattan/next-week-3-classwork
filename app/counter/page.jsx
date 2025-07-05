"use client";
import { useState } from "react";
import { Counter } from "@/components/counter/Counter";
import styles from "./CounterPage.module.css";

export default function CounterPage() {
  const [count, setCount] = useState(1);

  const countHandler = () => {
    setCount(count + 1);
  };
  const countdownHandler = () => {
    setCount(count - 1);
  };

  return (
    <div className={styles.counterContainer}>
      <h1 className={styles.counterTitle}>Counter</h1>
      <Counter
        count={count}
        countHandler={countHandler}
        countdownHandler={countdownHandler}
      />
    </div>
  );
}
