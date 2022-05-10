import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  const { onAdd, item } = props;
  return (
    <div className="card">
      <div className="card_img">
        <img src={"../../images/" + item.image} alt={item.name}/>
      </div>
      <div className="card_header">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p className="price">${item.price}</p>
        <div className="pc-block">
          <div className="pbtn" onClick={() => onAdd(item)}>
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
