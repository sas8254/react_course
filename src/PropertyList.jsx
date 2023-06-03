import Property from "./Property";
import "./PropertyList.css";
function PropertyList({ Properties }) {
  return (
    <div className="PropertyList">
      {Properties.map((p) => {
        return <Property {...p} key={p.id} />;
      })}
    </div>
  );
}

export default PropertyList;
