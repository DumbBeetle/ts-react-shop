import React from "react";
import { useCartContext } from "../../hooks/CartContext";
import { Link } from "react-router-dom";
import { FetchedData } from "../../interfece/ProductInterface";
import "./Item.css";

const Item = (props: FetchedData) => {
  const cartContext = useCartContext();
  const {
    id,
    title,
    price,
    image,
    description,
    category,
    rating: { rate, count },
  } = props;
  const quantity = cartContext.getProductQuantity(id);
  return (
    <div className="product-card">
      <div className="product-image">
        <Link to={`/products/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>${price}</h6>
        <div className="buttons">
          {quantity === 0 ? (
            <button onClick={() => cartContext.incrementProduct(props)} className="add-to-cart">
              Add to Cart
            </button>
          ) : (
            <>
              <button className="button-increment" onClick={() => cartContext.incrementProduct(props)}>
                +
              </button>
              <p>In cart: {quantity}</p>
              <button className="button-decrement" onClick={() => cartContext.decrementProduct(id)}>
                -
              </button>
              <button className="button-remove" onClick={() => cartContext.removeFromCart(id)}>
                remove
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
