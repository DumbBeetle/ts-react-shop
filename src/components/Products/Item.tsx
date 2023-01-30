import React from "react";
import "./item.css";
import { useCartContext } from "../../hooks/CartContext";
import { Link } from "react-router-dom";

type ItemProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const Item = (props: ItemProps) => {
  const cartContext = useCartContext();
  const { id, title, price, image } = props;
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
            <button onClick={() => cartContext.incrementProduct(id)} className="add-to-cart">
              Add to Cart
            </button>
          ) : (
            <>
              <button className="button-increment" onClick={() => cartContext.incrementProduct(id)}>
                +
              </button>
              <p>In cart: {quantity}</p>
              <button className="button-decrement" onClick={() => cartContext.decrementProduct(id)}>
                -
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
