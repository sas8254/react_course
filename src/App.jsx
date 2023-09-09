import "./App.css";
import React from "react";

function App() {
  let [count, setCount] = React.useState(0);
  const handleClick = (e) => {
    setCount(() => {
      return count + 1;
    });
  };
  return (
    <div>
      <p id="counter">{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default App;
