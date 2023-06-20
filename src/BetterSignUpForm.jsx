import { useState } from "react";
export default function BetterSignUpForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    password: "",
  });
  const handleChange = (evt) => {
    const changeField = evt.target.name;
    const newValue = evt.target.value;
    return setFormData((currData) => {
      return { ...currData, [changeField]: newValue };
    });
  };

  return (
    <form>
      <label htmlFor="firstname">First Name </label>
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstname}
        onChange={handleChange}
        id="firstname"
        name="firstname"
      ></input>
      <label htmlFor="lastname">Last Name </label>
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastname}
        onChange={handleChange}
        id="lastname"
        name="lastname"
      ></input>
      <label htmlFor="password">Last Name </label>
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        id="password"
        name="password"
      ></input>
      <button>Submit</button>
    </form>
  );
}
