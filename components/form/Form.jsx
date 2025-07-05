import { useState } from "react";
export const SimpleForm = ({
  formClassName = "",
  inputClassName = "",
  textareaClassName = "",
  buttonClassName = "",
  resultClassName = "",
}) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setForm({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={formClassName}>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          className={inputClassName}
        />
        <input
          type="email"
          placeholder="Enter your E-mail"
          name="email"
          className={inputClassName}
        />
        <textarea
          placeholder="Enter your message"
          name="message"
          className={textareaClassName}
        />
        <button type="submit" className={buttonClassName}>
          Submit
        </button>
      </form>
      <div className={resultClassName}>
        <p>Name: {form.name}</p>
        <p>Email: {form.email}</p>
        <p>Message: {form.message}</p>
      </div>
    </div>
  );
};
