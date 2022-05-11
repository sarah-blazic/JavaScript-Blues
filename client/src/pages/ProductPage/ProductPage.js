import React, { useEffect, useState } from "react";
import { Container, Box, Button } from "@mui/material";
import { useParams } from "react-router";
import axios from "axios";
import "./ProductPage.css";
import { addToCart } from "../../services/productService";

function ProductPage({onAdd}) {
  const [product, setProduct] = useState([]);
  const [order, setOrder] = useState()
  const { id } = useParams();
  console.log(useParams());
  useEffect(() => {
    async function getProduct() {
      const response = await axios.get(`/api/products/${id}`).catch((e) => {
        console.log(e);
      });
      console.log("res", response.data);
      return setProduct(response.data);
    }
    getProduct();
  }, []);
  
  return (
    <Container className="contain">
      <Box>
        <h1>{product.name}</h1>
        <img className="card_img"
          src={`../../images/${product.image}`}
          alt={product.name}
        />
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>Price: $ {product.price}</p>
      </Box>
      <p>{order}</p>
      <Button variant="contained" product ={product} onClick={() => onAdd(product)}>
        Add to Cart
      </Button>
    </Container>
  );
}

export default ProductPage;
