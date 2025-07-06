import { useState } from "react";
export const Form = () => {
  const [details, setDetails] = useState({ userName: "", age: 0, dob: "" });
  const submitHandler = (formData) => {
    setDetails({
      userName: formData.get("userName"),
      age: formData.get("age"),
      dob: formData.get("dob")
    });
  };

  return (
    <div>
      <p>UserName is : {details.userName}</p>
      <p>user age is : {details.age}</p>
      <p>DOB is : {details.dob}</p>
      <form action={submitHandler}>
        <input type="text" name="userName" placeholder="Enter username" />
        <input type="number" name="age" placeholder="Enter age" />
        <input type="date" name="dob" placeholder="Enter DOB" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
