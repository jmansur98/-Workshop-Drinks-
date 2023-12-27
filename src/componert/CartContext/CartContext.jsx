import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
   const removerFromCart = (productId) => {
    setCart ((prevCart) => prevCart.filter ((item) => item.product.id !== productId));
  };

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.product.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item 
        );
      } else {
        return [...prevCart, { product, quantity }];
      }
    });
  };
  

  
  return (
    <CartContext.Provider value={{ cart, addToCart, removerFromCart}}>
      {children}
    </CartContext.Provider>
  );
};