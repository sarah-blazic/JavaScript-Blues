import React, { useState, useEffect } from "react";
import "./Catalog.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from '@mui/material/Divider';
import axios from "axios";

function Catalog({onAdd}) {


  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get("/api/products/").catch((e) => {
        console.log(e);
      });
      console.log("res", response.data)
      return setProducts(response.data);
    }
    getProducts();
  }, []);

  return (
    <Container maxwidth="lg">
      <Box sx={{my : "5rem"}}>
        <SearchBar onAdd={onAdd}/>
      </Box>
      <Divider sx={{my : "2rem"}} />
      <h2>All products</h2>
      <div className="main_content">
        {products.map((item) => (
          <ProductCard
            onAdd={onAdd}
            item={item}
            key={item.id}
          />
        ))}
      </div>
    </Container>
  );
}

export default Catalog;