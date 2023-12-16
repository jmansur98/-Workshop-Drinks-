import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [stock, setStock] = useState({});

  const addToCart = ({ product, quantity }) => {
    const productId = product.id;
    
    console.log('Cantidad a agregar al carrito:', quantity)

    if (stock[productId] >= quantity) {
      setCartCount((prevCount) => prevCount + quantity);
      setStock((prevStock) => ({
        ...prevStock,
        [productId]: prevStock[productId] - quantity,
      }));
    } 
  };

  const updateStock = (productId, quantity) => {
    setStock((prevStock) => ({
      ...prevStock,
      [productId]: (prevStock[productId] || 0) + quantity,
    }));
  };

  const clearCart = () => {
    setCartCount(0);
    setStock({});
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart, updateStock, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};