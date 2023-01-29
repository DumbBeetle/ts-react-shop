import { createContext, ReactNode, useContext, useState } from "react";

type CartProviderProps = {
  children: ReactNode;
};
type Context = {
  decrementProduct: (id: number) => void;
  incrementProduct: (id: number) => void;
  getTotalCount: () => number;
  getTotalPrice: () => string;
  getProductQuantity: (id: number) => number;
  removeFromCart: (id: number) => void;
};

interface Product {
  id: number;
  quantity: number;
}

const CartContext = createContext({} as Context);

export function useCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
