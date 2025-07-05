"use client";
import { useEffect, useState } from "react";

const formatTime = (date) => {
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${hour}:${minutes}:${seconds}`;
};

export const Clock = () => {
  const [time, setTime] = useState("");

  const clockHandler = () => {
    setTime(formatTime(new Date()));
    setTimeout(clockHandler, 1000);
  };

  useEffect(() => {
    clockHandler();
    return () => clearInterval(clockHandler, 3000);
  }, []);

  return (
    <div>
      <h2>Current Time</h2>
      <p>{time}</p>
    </div>
  );
};
