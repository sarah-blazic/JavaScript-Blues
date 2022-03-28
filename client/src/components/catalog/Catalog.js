import React from "react";
import product_card from "./product_data";
import "./catalog.css";
import logo from "./product.png";

function Catalog() {
  const listItems = product_card.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={logo} />
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <p className="price">
          {item.price}
          <span>{item.currency}</span>
        </p>
        <div className="pbtn">Add to cart</div>
      </div>
    </div>
  ));
  return <div className="main_content">{listItems}</div>;
}
export default Catalog;
