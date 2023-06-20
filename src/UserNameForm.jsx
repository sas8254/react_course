import { useState } from "react";
export default function UserNameForm() {
  const [username, setUsername] = useState("timmy");
  const updateUserName = (evt) => {
    setUsername(evt.target.value);
  };
  return (
    <form>
      <label htmlFor="username">Enter the username </label>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={updateUserName}
        id="username"
      ></input>
      <button>Submit</button>
    </form>
  );
}
