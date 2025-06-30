"use client"
import { Counter } from "@/components/counter/Counter";
import { useState } from "react";
import { Form } from "@/components/form/Form";
import { ToDo } from "@/components/ToDo/ToDo";
import { DataFetcher } from "@/components/dataFetcher/DataFetcher";
export default function Home() {
  const [count, setCount] = useState(1);
  const countHandler = () => {
    setCount(count + 1);
  }
  const countdownHandler = () => {
    setCount(count - 1);
  }
  return (

    <div >
      <Form />
      <Counter count={count} countHandler={countHandler} countdownHandler={countdownHandler} />
      <ToDo />
      <DataFetcher />
    </div>
  );
}
