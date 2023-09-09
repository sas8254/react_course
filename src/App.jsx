import "./App.css";
import React from "react";

function App() {
  const [isValid, setIsValid] = React.useState(false);
  const handleValid = (e) => {
    if (e.target.value.trim().length > 3) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  return (
    <form>
      <label>Your message</label>
      <input type="text" onChange={handleValid} />
      <p>{isValid ? "Valid message" : "Invalid message"}</p>
    </form>
  );
}

export default App;
