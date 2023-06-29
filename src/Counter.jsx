import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  useEffect(function myEffect() {
    console.log("My Effect was called.");
  });
  let increaseCount = () => {
    setCount((c) => {
      return c + 1;
    });
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>+1</button>
    </div>
  );
}
