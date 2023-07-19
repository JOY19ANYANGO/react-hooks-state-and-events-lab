import React, { useState } from "react";

function Item({ name, category }) {
  // Define a state variable for className
  const [className, setClassName] = useState("");

  // Function to update className when "Add to Cart" button is clicked
  function changeClassName() {
    // Update the className to "in-cart"
    const updatedClassName = "in-cart";
    setClassName(updatedClassName);
  }

  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={changeClassName}>
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
