import React, { useState } from "react";
import { useCartContext } from "../../hooks/CartContext";
import CartProduct from "./CartProduct";
import "./ShoppingCart.css";
import { Box, Button, Drawer } from "@mui/material";

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartContext = useCartContext();
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
      <Button onClick={() => setIsOpen(true)} aria-label="Cart Button">
        Cart
      </Button>
      <Drawer aria-label="Cart Area" anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box width="30em" role="presentation">
          {cartProducts}
          {cartProducts.length !== 0 ? (
            <>
              <p className="total-paragraph">Total Items: {cartContext.getTotalCount()}</p>
              <p className="price-paragraph">Total Price: ${cartContext.getTotalPrice()}</p>
            </>
          ) : null}
        </Box>
      </Drawer>
    </div>
  );
};

// const ShoppingCart = () => {
//   const cartContext = useCartContext();
//   const count = cartContext.getTotalCount();
//   const cartProducts = cartContext.getCart().map((item) => {
//     return (
//       <CartProduct
//         key={item.id}
//         productData={item}
//         subtractButton={cartContext.decrementProduct}
//         addButton={cartContext.incrementProduct}
//         removeButton={cartContext.removeFromCart}
//       />
//     );
//   });
//   return (
//     <div className="cart-container">
//       <div className="cart-icon">
//         <div className="shopping-cart">
//           <div className="cart-quantity">{count}</div>
//         </div>
//       </div>
//       {cartProducts.length !== 0 ? (
//         <div className="cart-product-window">
//           {cartProducts}
//           <p>Total: ${cartContext.getTotalPrice()}</p>
//         </div>
//       ) : null}
//     </div>
//   );
// };

export default ShoppingCart;
