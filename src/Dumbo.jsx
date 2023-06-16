import { useState } from "react";
function GenerateGameBoard() {
  console.log("making");
  return Array(5000);
}
export default function () {
  const [board, setBoard] = useState(GenerateGameBoard);
  return (
    <button onClick={() => setBoard("hi")}>Click me to change state</button>
  );
}
