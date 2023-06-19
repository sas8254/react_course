import "./App.css";
import Dice from "./Dice";
import LuckeyN from "./LuckyN";

function App() {
  return (
    <div>
      <LuckeyN numDice={2} goal={7} />
      <LuckeyN numDice={3} goal={11} />
    </div>
  );
}

export default App;
