import Concept from "./Concept";

export default function Concepts({ concepts }) {
  return (
    <div id="concepts">
      {concepts.map((concept) => {
        return <Concept concept={concept} />;
      })}
    </div>
  );
}
