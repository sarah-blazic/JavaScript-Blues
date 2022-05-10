import React, { useState, useEffect } from "react";
import "./Catalog.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import axios from "axios";

function Catalog(props) {
  const { onAdd, cartItems } = props;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get("/api/products/").catch((e) => {
        console.log(e);
      });
      setProducts(response.data);
    }
    getProducts();
  }, []);

  return (
    <div className="main_content">
      {products.map((item) => (
        <ProductCard
          onAdd={onAdd}
          cartItems={cartItems}
          item={item}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default Catalog;
