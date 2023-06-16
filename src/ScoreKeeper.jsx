import { useState } from "react";
function ScoreKeeper({ numPlayers = 3, target = 5 }) {
  const [scores, setScores] = useState(new Array(numPlayers).fill(0));
  const updateScore = (i) => {
    return setScores((OldScores) => {
      return OldScores.map((score, idx) => {
        if (i === idx) return score + 1;
        return score;
      });
    });
  };
  const reset = () => {
    setScores(new Array(numPlayers).fill(0));
  };
  return (
    <div>
      <h1>Score Keeper</h1>
      <ul>
        {scores.map((s, i) => {
          return (
            <li key={i}>
              Player {i + 1}: {s}{" "}
              <button onClick={() => updateScore(i)}>+1</button>
              {s === target && "Winner"}
            </li>
          );
        })}
      </ul>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default ScoreKeeper;
