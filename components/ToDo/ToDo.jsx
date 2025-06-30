"use client";
import { useState } from "react";

export const ToDo = () => {
  const [todos, setTodos] = useState([]);

  const submitHandler = (formData) => {
    const newItemInput = formData.get("newItem");
    setTodos([...todos, newItemInput]);
  };
  return (
    <div>
      <form action={submitHandler}>
        <input type="text" name="newItem" placeholder="Add new item" />
        <button type="submit"> add item</button>
         <ol>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ol>
      </form>
      <p>Number of items: {todos.length}</p>
     
    </div>
  );
};
