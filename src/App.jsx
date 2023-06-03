import "./App.css";
import ShoppingList from "./ShoppingList";

const data = [
  { id: 1, item: "eggs", quantity: 12, completed: false },
  { id: 2, item: "milk", quantity: 12, completed: true },
  { id: 3, item: "fruits", quantity: 3, completed: false },
  { id: 4, item: "carrot", quantity: 4, completed: true },
];

function App() {
  return (
    <div>
      <ShoppingList items={data} />
    </div>
  );
}

export default App;
