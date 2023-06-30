import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  function handlechange(e) {
    setName(e.target.value);
  }
  useEffect(
    function myEffect() {
      console.log("My Effect was called.");
    },
    [count, name]
  );
  let increaseCount = () => {
    setCount((c) => {
      return c + 1;
    });
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>+1</button>
      <p>Name: {name}</p>
      <input value={name} onChange={handlechange} type="text"></input>
    </div>
  );
}
