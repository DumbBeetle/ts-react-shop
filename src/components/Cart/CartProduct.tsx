import React from "react";
import { FetchedData } from "../../interfece/ProductInterface";
import "./CartProduct.css";

interface Product {
  id: number;
  title: string;
  image: string;
  quantity: number;
  price: number;
}

interface ProductData extends FetchedData {
  quantity: number;
}

interface Props {
  productData: ProductData;
  subtractButton: (id: number) => void;
  addButton: (item: FetchedData) => void;
  removeButton: (id: number) => void;
}

const CartProduct = (props: Props) => {
  const { id, title, image, quantity, price } = props.productData;
  return (
    <section className="cart-product">
      <img src={image} alt="" />
      <p>{title}</p>
      <div>
        <button className="button-increment" onClick={() => props.addButton(props.productData)}>
          +
        </button>
        <p>{quantity}</p>
        <button className="button-decrement" onClick={() => props.subtractButton(id)}>
          -
        </button>
        <button className="button-decrement" onClick={() => props.removeButton(id)}>
          remove
        </button>
      </div>
      <p>{(price * quantity).toFixed(2)}</p>
    </section>
  );
};
export default CartProduct;
