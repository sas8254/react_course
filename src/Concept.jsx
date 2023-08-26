export default function Concept({ concept }) {
  return (
    <div className="concept">
      <img src={concept.image} alt={concept.title} />
      <h2>{concept.title}</h2>
      <p>{concept.description}</p>
    </div>
  );
}
