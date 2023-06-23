import { useState } from "react";

export default function ShoppingListForm({ submitAction }) {
  const [formData, setFormData] = useState({ product: "", quantity: "" });
  const handleChange = (evt) => {
    return setFormData((currData) => {
      return {
        ...currData,
        [evt.target.name]: [evt.target.value],
      };
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submitAction(formData);
    setFormData({ product: "", quantity: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="product">Product Name</label>
      <input
        id="product"
        placeholder="Product Name"
        name="product"
        type="text"
        onChange={handleChange}
        value={formData.product}
      />
      <label htmlFor="quantity">Quantity</label>
      <input
        id="quantity"
        placeholder="Quantity"
        name="quantity"
        type="number"
        onChange={handleChange}
        value={formData.quantity}
      />
      <button>Add Item</button>
    </form>
  );
}
