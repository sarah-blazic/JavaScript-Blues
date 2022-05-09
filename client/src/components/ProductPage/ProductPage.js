import React, { useState, useEffect } from "react";
import "./ProductPage.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link, useParams } from "react-router-dom";
import logo from "./product.png";
import { getProduct } from "../../services/productService";
import axios from "axios";

function ProductPage() {
  // var product = getProduct({id})
  // console.log("prod", product.name)
  // async function addToCart
  return (
    <Card className="card" sx={{ maxWidth: 1500 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="30%"
        image={logo}
        alt="product image goes here"
        className="mainImg"
      />
      <h2>
        {/* {id} */}
        </h2>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="name">
          {/* {product.name} */}name
        </Typography>
        <Typography variant="body2" color="text.secondary" className="description">
          product description goes here
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions className="addToCart">
      <Button size="small" color="primary" >
        {/* this button will trigger the add to cart function
        which will create a new order with an api call and take in the product id
        from the route params to add the item to the order*/}
        add to cart
      </Button>
    </CardActions>
  </Card>
  );
}

export default ProductPage;
