"use client";
import { useState } from "react";
export const SimpleForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const submitHandler = (formData) => {
    setForm({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });
  };

  return (
    <div>
      <p> Name is :---{form.name}</p>
      <p> email is :---{form.email}</p>
      <p> message is :---{form.message}</p>
      <form action={submitHandler}>
        <label>
          Name:
          <input type="text" placeholder="Enter your name" name="name" />
        </label>
        <br /><br />
        <label>
          Email:
          <input type="email" placeholder="Enter your E-mail" name="email" />
        </label>
        <br /><br />
        <label>
          Message:
          <textarea placeholder="Enter your message" name="message" />
        </label>
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
