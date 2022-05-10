import React, { useEffect, useState } from "react";
import { Container, Box, Button } from "@mui/material";
import { useParams } from "react-router";
import axios from "axios";

function ProductPage() {
  const [product, setProduct] = useState([]);

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
    <Container>
      <Box>
        <h1>{product.name}</h1>
        <img
          src={product.image ? product.image : "../../images/product.png"}
          alt={product.name}
        />
        <p>{product.name}</p>
        <p>Price: $ {product.price}</p>
      </Box>
      <Button variant="contained">Add to Cart</Button>
    </Container>
  );
}

export default ProductPage;
