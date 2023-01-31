import React from "react";
import { useCartContext } from "../../hooks/CartContext";
import CartProduct from "./CartProduct";

const ShoppingCart = () => {
  const cartContext = useCartContext();
  const count = cartContext.getTotalCount();
  const cartProducts = cartContext.getCart().map((item) => {
    return (
      <CartProduct
        key={item.id}
        productData={item}
        subtractButton={cartContext.decrementProduct}
        addButton={cartContext.incrementProduct}
        removeButton={cartContext.removeFromCart}
      />
    );
  });
  return (
    <div className="cart-container">
      <div className="cart-icon">
        <div className="shopping-cart">
          <div className="cart-quantity">{count}</div>
        </div>
      </div>
      {cartProducts.length !== 0 ? (
        <div className="cart-product-window">
          {cartProducts}
          <p>Total: ${cartContext.getTotalPrice()}</p>
        </div>
      ) : null}
    </div>
  );
};

export default ShoppingCart;
