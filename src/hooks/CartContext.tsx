import { createContext, ReactNode, useContext, useState } from "react";

type CartProviderProps = {
  children: ReactNode;
};
type Context = {
  incrementProduct: (id: number) => void;
  decrementProduct: (id: number) => void;
  getTotalCount: () => number;
  getTotalPrice: () => string;
  getProductQuantity: (id: number) => number;
  removeFromCart: (id: number) => void;
};

interface Product {
  id: number;
  quantity: number;
  price: number;
}

const CartContext = createContext({} as Context);

export function useCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  function incrementProduct(id: number) {
    setCartProducts((currentProducts: Product[]) => {
      if (currentProducts.find((product: Product) => product.id === id) == undefined) {
        return [...currentProducts];
      }
      return currentProducts.map((product: Product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
    });
  }

  function decrementProduct(id: number) {
    setCartProducts((currentProducts: Product[]) => {
      if (currentProducts.find((product: Product) => product.id === id)?.quantity === 1) {
        return currentProducts.filter((product: Product) => product.id !== id);
      }
      return currentProducts.map((product: Product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
    });
  }

  function getTotalCount() {
    return cartProducts.reduce((quantity: number, product: Product) => product.quantity + quantity, 0);
  }

  function getTotalPrice() {
    return cartProducts
      .reduce((price: number, product: Product) => product.price * product.quantity + price, 0)
      .toFixed(2);
  }

  function getProductQuantity(id: number): number {
    return cartProducts.find((product: Product) => product.id === id)?.quantity || 0;
  }

  function removeFromCart(id: number) {
    return setCartProducts((currentCart: Product[]) => {
      return currentCart.filter((product: Product) => product.id !== id);
    });
  }

  return (
    <CartContext.Provider
      value={{
        incrementProduct,
        decrementProduct,
        getProductQuantity,
        getTotalCount,
        getTotalPrice,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
