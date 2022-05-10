import React, { useState } from 'react';
import "../../pages/Catalog/Catalog.css";
import "./ProductCard.css";

const ProductCard = (props) => {
  const {onAdd, item, cartItems} = props;
  console.log(cartItems.map((x)=> x.qty));

  return (<div className="card">
  <div className="card_img">
    <img src={item.thumb} />
  </div>
  <div className="card_header">
    <h2>{item.product_name}</h2>
    <p>{item.description}</p>
    <p className="price">
      {item.price}
      <span>{item.currency}</span>
    </p>
    <div className="pc-block">
      <div className="pbtn" onClick={() => onAdd(item)}>Add to cart</div>
      <div className="click">
        <span className="fa fa-star-o" id={"star" + item.id}></span>
        <div className="ring"></div>
        <div className="ring2"></div>
        <div>{cartItems.map((x)=> x.qty)}</div>
      </div>
    </div>
  </div>
</div>);
};

export default ProductCard;