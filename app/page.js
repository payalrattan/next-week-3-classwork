"use client"
import { Counter } from "@/components/counter/Counter";
import { useState } from "react";
import { SimpleForm } from "@/components/form/SimpleForm";
import { ToDo } from "@/components/ToDo/ToDo";
import { DataFetcher } from "@/components/dataFetcher/DataFetcher";
import { Clock } from "@/components/Clock/Clock";
import { PracticeCounter } from "@/components/practice/practiceCounter";
import styles from "./page.module.css";

export default function Home() {
  const [count, setCount] = useState(1);
  const countHandler = () => {
    setCount(count + 1);
  }
  const countdownHandler = () => {
    setCount(count - 1);
  }


  const [anotherCount, setAnotherCount] = useState(0)
  const countUp = () => {
    setAnotherCount(anotherCount + 2);
  }
  const countDown = () => {
    setAnotherCount(anotherCount - 2)
  }
  const resetCount = () => {
    setAnotherCount(0);
  }
  return (
    <div className={styles.container}>
      <h1>React-Week-3</h1>
      <hr />
      <h1>Clock Component</h1>
      <div className={styles.section}>
        <Clock />
      </div>
      <hr />
      <h1>Counter Component</h1>
      <div className={styles.section}>
        <Counter count={count} countHandler={countHandler} countdownHandler={countdownHandler} />
      </div>
      <hr />
      <h1>counterPractice</h1>
      <div className={styles.section}>
        <PracticeCounter count={anotherCount} countup={countUp} countdown={countDown} resetcount={resetCount} />
      </div>
      <hr />
      <h1>ToDo Component</h1>
      <div className={styles.section}>
        <ToDo />
      </div>
      <hr />
      <h1>Data Fetcher Component</h1>
      <p>Fetches data from an API and displays it</p>
      <div className={styles.section}>
        <DataFetcher />
      </div>
      <hr />
      <h1>Simple Form Component</h1>
      <div className={styles.section}>
        <SimpleForm />
    </div>
    </div>
  );
}

