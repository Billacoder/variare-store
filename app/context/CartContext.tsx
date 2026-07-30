"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  size?: string;
};

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string, size?: string) => void;
  increaseQuantity: (id: string, size?: string) => void;
  decreaseQuantity: (id: string, size?: string) => void;
  updateItemSize: (
    id: string,
    oldSize: string | undefined,
    newSize: string
  ) => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(product: Omit<CartItem, "quantity">) {
    setCart((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          item.size === product.size
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id &&
          item.size === product.size
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(id: string, size?: string) {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(item.id === id && item.size === size)
      )
    );
  }

  function increaseQuantity(id: string, size?: string) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function decreaseQuantity(id: string, size?: string) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.size === size
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function updateItemSize(
    id: string,
    oldSize: string | undefined,
    newSize: string
  ) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.size === oldSize
          ? {
              ...item,
              size: newSize,
            }
          : item
      )
    );
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        updateItemSize,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}