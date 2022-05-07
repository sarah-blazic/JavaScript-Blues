import React, { useState } from 'react';
import "../../pages/Catalog/Catalog.css";
import "./ProductCard.css";

const ProductCard = (props) => {
    const [favorited, setFavorited] = useState(0);

    function onClick () {
      setFavorited((favorited == 1) ? 0 : 1);
      if (favorited == 1) {
        document.getElementById("click" + props.id).classList.remove("active");
        setTimeout(function () {
          document.getElementById("click" + props.id).classList.remove("active-2");
        }, 30);
        document.getElementById("click" + props.id).classList.remove("active-3");
        setTimeout(function() {
          document.getElementById("star" + props.id).classList.remove("fa-star");
          document.getElementById("star" + props.id).classList.add("fa-star-o");
        }, 15);
      }
      else {
        document.getElementById("click" + props.id).classList.add("active");
        document.getElementById("click" + props.id).classList.add("active-2");
        setTimeout(function() {
          document.getElementById("star" + props.id).classList.add('fa-star');
          document.getElementById("star" + props.id).classList.remove('fa-star-o');
        }, 150);
        setTimeout(function() {
          document.getElementById("click" + props.id).classList.add("active-3");
        }, 150);
      }
    }

    return (<div className="card" key={props.id}>
    <div className="card_img">
      <img src={props.logo} />
    </div>
    <div className="card_header">
      <h2>{props.product_name}</h2>
      <p>{props.description}</p>
      <p className="price">
        {props.price}
        <span>{props.currency}</span>
      </p>
      <div className="pc-block">
        <div className="pbtn">Add to cart</div>
        <div className="click" onClick={() => onClick()} id={"click" + props.id}>
          <span className="fa fa-star-o" id={"star" + props.id}></span>
          <div className="ring"></div>
          <div className="ring2"></div>
        </div>
      </div>
    </div>
  </div>);
};

export default ProductCard;