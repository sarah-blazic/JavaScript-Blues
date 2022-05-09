import React from "react";
import product_card from "./product_data";
import "./Catalog.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getProducts } from "../../services/productService";

async function Catalog() {
  var products = await getProducts()
  console.log("prods here",products)
  const listItems = products.map((item) => (
    <ProductCard key={item.id} id={item.id} logo={item.thumb} product_name={item.product_name} description={item.description} price={item.price} currency={item.currency} />
  ));
  return <div className="main_content">{listItems}</div>;
}
export default Catalog;
