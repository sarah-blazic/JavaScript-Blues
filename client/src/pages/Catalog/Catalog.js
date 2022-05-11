import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
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
      <Box sx={{mt : 2}}>
        <SearchBar onAdd={onAdd}/>
      </Box>
      <Divider sx={{my : 2}} />
      <Typography gutterBottom variant="h2" component="div" align="center">
        All Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((item) => (
          <Grid item sx={4}>
            <ProductCard
              onAdd={onAdd}
              item={item}
              key={item.id}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Catalog;