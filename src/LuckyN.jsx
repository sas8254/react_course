import { useState } from "react";
import { getRolls } from "./utils";
import Dice from "./Dice";
import Button from "./Button";

export default function LuckeyN({ numDice, winCheck, title = "Game" }) {
  const [dice, setDice] = useState(getRolls(numDice));
  const isWinner = winCheck(dice);
  function roll() {
    setDice(getRolls(numDice));
  }

  return (
    <main>
      <h1>Lucky {title}</h1>
      {isWinner && <h2> "You have won!"</h2>}
      <Dice dice={dice} />
      <button onClick={roll}>Roll Again!</button>
      <Button clickFunk={roll} label="Reroll" />
    </main>
  );
}
