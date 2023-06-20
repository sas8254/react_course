import { useState } from "react";
export default function SignUpForm() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const updateFirstName = (evt) => {
    setFirstName(evt.target.value);
  };
  const updateLastName = (evt) => {
    setLastName(evt.target.value);
  };
  return (
    <form>
      <label htmlFor="firstname">First Name </label>
      <input
        type="text"
        placeholder="First Name"
        value={firstname}
        onChange={updateFirstName}
        id="firstname"
      ></input>
      <label htmlFor="lastname">Last Name </label>
      <input
        type="text"
        placeholder="First Name"
        value={lastname}
        onChange={updateLastName}
        id="lastname"
      ></input>
      <button>Submit</button>
    </form>
  );
}
