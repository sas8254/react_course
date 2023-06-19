import { useState } from "react";
import { getRolls, sum } from "./utils";
import Dice from "./Dice";

export default function LuckeyN({ numDice, goal }) {
  const [dice, setDice] = useState(getRolls(numDice));
  const won = sum(dice) === goal;
  function roll() {
    setDice(getRolls(numDice));
  }

  return (
    <main>
      <h1>
        Lucky {goal} {won && "You have won!"}
      </h1>
      <Dice dice={dice} />
      <button onClick={roll}>Roll Again!</button>
    </main>
  );
}
