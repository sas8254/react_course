import { useState } from "react";
import "./ColorBox.css";
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
export default function ColorBox({ colors }) {
  const [color, setColor] = useState(random(colors));
  const changeColor = () => {
    setColor(random(colors));
  };

  return (
    <div
      onClick={changeColor}
      style={{ backgroundColor: color }}
      className="ColorBox"
    ></div>
  );
}
