import React from "react";
import "./item.css";
import { useCartContext } from "../../hooks/CartContext";
import { Link } from "react-router-dom";

type ItemProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

const Item = (props: ItemProps) => {
  const cartContext = useCartContext();
  const {
    id,
    title,
    price,
    description,
    category,
    image,
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
            <button
              onClick={() => cartContext.addItem(props.item)}
              className="add-to-cart"
            >
              Add to Cart
            </button>
          ) : (
            <>
              <button
                className="button-increment"
                onClick={() => cartContext.incrementProduct(props.item.id)}
              >
                +
              </button>
              <p>In cart: {quantity}</p>
              <button
                className="button-decrement"
                onClick={() => cartContext.decrementProduct(props.item.id)}
              >
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
