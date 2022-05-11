import React from 'react';
import ProductCard from "../ProductCard/ProductCard"
export default function ResultListComponent({ items, onAdd }) {

  return (
    <div className="main_content">
      {items.map((item) => (
        <ProductCard
        onAdd={onAdd}
        item={item}
        key={item.id}
      />
      ))}
    </div>
  );
}