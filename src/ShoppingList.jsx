import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";

export default function ShoppingList() {
  const [items, setItems] = useState([
    { id: 1, product: "banana", quantity: 12 },
    { id: 2, product: "ice-cream", quantity: 1 },
  ]);

  const addItem = (item) => {
    return setItems((currItems) => {
      return [...currItems, { ...item, id: 9 }];
    });
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.product} - {item.quantity}
            </li>
          );
        })}
      </ul>
      <ShoppingListForm submitAction={addItem} />
    </div>
  );
}
