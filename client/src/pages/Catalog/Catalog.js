import React from "react";
import product_card from "./product_data";
import "./Catalog.css";
import logo from "./product.png";
import ProductCard from "../../components/ProductCard/ProductCard";

function Catalog() {
  const listItems = product_card.map((item) => (
    <ProductCard id={item.id} logo={logo} product_name={item.product_name} description={item.description} price={item.price} currency={item.currency} />
  ));
  return <div className="main_content">{listItems}</div>;
}
export default Catalog;
