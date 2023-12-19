import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un proveedor CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    cartCount: 0,
    stock: {},
    selectedProduct: null,
  });

  const addToCart = ({ product, quantity }) => {
    const productId = product.id;

    if (cart.stock[productId] >= quantity) {
      setCart((prevCart) => ({
        ...prevCart,
        cartCount: prevCart.cartCount + quantity,
        stock: {
          ...prevCart.stock,
          [productId]: prevCart.stock[productId] - quantity,
        },
        selectedProduct: {
          ...product,
          quantity,
        },
      }));
    }
  };

  const updateStock = (productId, quantity) => {
    setCart((prevCart) => ({
      ...prevCart,
      stock: {
        ...prevCart.stock,
        [productId]: (prevCart.stock[productId] || 0) + quantity,
      },
    }));
  };

  const clearCart = () => {
    setCart({
      cartCount: 0,
      stock: {},
      selectedProduct: null,
    });
  };

  return (
    <CartContext.Provider value={{ ...cart, addToCart, updateStock, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
