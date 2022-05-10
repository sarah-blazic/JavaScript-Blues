import React from 'react';
import ProductCard from "../ProductCard/ProductCard"
export default function ResultListComponent({ items }) {

  return (
    <div className="main_content">
      {items.map((item) => (
        <ProductCard
        item={item}
        key={item.id}
      />
      ))}
    </div>
  );
}