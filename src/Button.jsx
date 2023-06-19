import "./Button.css";

export default function Button({ clickFunk, label = "Click Me!" }) {
  return (
    <button className="Button" onClick={clickFunk}>
      {label}
    </button>
  );
}
