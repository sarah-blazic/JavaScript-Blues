import React from "react";
import "./ProductPage.css";
import product_card from "../Catalog/product_data";
import { Link } from "react-router-dom";
import logo from "./product.png";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "../Button";

function ProductPage() {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col className="name"><Row><h1>Product name</h1></Row><Row><h2>Description</h2></Row></Col>
        <Col></Col>
      </Row>
      <Row>
      <Col></Col>
        <Col className="imgCol">
          <img src={logo} alt="a computer" className="logo"></img>
        </Col>
        <Col></Col>
      </Row>
      <Row>
      <Col className="btnCol"><Button className='add'><Link to='/cart'>Add To Cart</Link></Button></Col>
      </Row>
    </Container>
  );
}

export default ProductPage;
