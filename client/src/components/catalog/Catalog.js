import React from "react";
import product_card from "./product_data";
import "./catalog.css";
import logo from "./product.png";
import { Route } from "react-router";
import { Link } from "react-router-dom";

// function routeButton(){
//   const listItems = product_card.map((item) => {

//   }
// }
function Catalog() {
  const listItems = product_card.map((item) => (
    <div className="card" key={item.id}>
      <Link className="link" to={item.url}>
        <div className="card_img">
          <img src={logo} alt="a computer" />
        </div>
        <div className="card_header">
          <h2>{item.product_name}</h2>
          <p>{item.description}</p>
          <p className="price">
            {item.price}
            <span>{item.currency}</span>
          </p>
          <Link className="pbtn" to="/home">Add to cart</Link>
        </div>{" "}
      </Link>
    </div>
  ));
  return <div className="main_content">{listItems}</div>;
}
export default Catalog;
