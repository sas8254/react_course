import "./App.css";
import { sum } from "./utils";
import LuckeyN from "./LuckyN";

function allSame(dice) {
  return dice.every((v) => v === dice[0]);
}

function lessThan7(dice) {
  return sum(dice) < 7;
}

function App() {
  return (
    <div>
      <LuckeyN numDice={2} winCheck={lessThan7} title="Roll Less than seven" />
      <LuckeyN numDice={3} winCheck={allSame} title="Roll the same number" />
    </div>
  );
}

export default App;
