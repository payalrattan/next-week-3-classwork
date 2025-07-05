"use client";
import { useState } from "react";
export const PracticeCounter = ({ count, countup, countdown, resetcount }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={countup}>+</button>
      <button onClick={countdown}>-</button>
      <button onClick={resetcount}>reset</button>
    </div>
  );
};
