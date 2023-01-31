import React from "react";

interface Product {
  id: number;
  quantity: number;
  price: number;
}

interface Props {
  productData: Product;
  subtractButton: (id: number) => void;
  addButton: (id: number) => void;
}

const CartProduct = (props: Props) => {
  return <div></div>;
};

export default CartProduct;
