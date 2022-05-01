import "../../pages/Catalog/Catalog.css";

const ProductCard = (props) => {
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
      <div className="pbtn">Add to cart</div>
    </div>
  </div>);
};

export default ProductCard;