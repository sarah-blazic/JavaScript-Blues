import React from "react";
import product_card from "./product_data";
import "./Catalog.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import axios from "axios";

function Catalog(props) {
  //const products = axios.get("/api/products");
   const {onAdd, cartItems} = props;
  const listItems = product_card.map((item) => (
    <ProductCard onAdd={onAdd} cartItems={cartItems} item={item} key={item.id}/>
  ));
  return<div>
   <div className="main_content">{listItems}</div>;
   <div>adsfasdfasdfasdfasdfasdfasdfasdfadsfasdfasdf</div>
   </div>
  
}
export default Catalog;
