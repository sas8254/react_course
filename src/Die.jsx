import "./Die.css";
export default function Die({ val, color }) {
  return (
    <div style={{ backgroundColor: color }} className="Die">
      {val}
    </div>
  );
}
