import React from "react";
import "./Cart.css";
import { Card } from "@mui/material";
// import product_card from "../catalog/product_data";
import logo from "./product.png";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <Container className="container">
      <Row>
        <hr></hr>
        <Col>
          {" "}
          <img className="comp" src={logo} alt="comp" />
        </Col>
        <Col>
          <div>
            <h2>Product Name</h2>
            {/* <Card.Meta>{props.product.price.formatted_with_symbol}</Card.Meta> */}
          </div>
        </Col>{" "}
        <Col>
          <h2>Description</h2>
        </Col>
        <Col>
          <h2>Quantity</h2>
        </Col>
        <hr></hr>
      </Row>
      <Row>
        <hr></hr>
        <Col>
          {" "}
          <img className="comp" src={logo} alt="comp" />
        </Col>
        <Col>
          <div>
            <h2>Product Name</h2>
            {/* <Card.Meta>{props.product.price.formatted_with_symbol}</Card.Meta> */}
          </div>
        </Col>{" "}
        <Col>
          <h2>Description</h2>
        </Col>
        <Col>
          <h2>Quantity</h2>
        </Col>
        <hr></hr>
      </Row>
      <Row>
        <Col className="col-auto">
          <Link className="checkout" to="/">
            Checkout
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
