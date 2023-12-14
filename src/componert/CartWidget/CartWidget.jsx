// CartWidget.jsx
import React from 'react';
import cart from './assets/cart-ico.png';
import { useCart } from '../path-to-CartContext/CartContext'; // Ruta real hacia el contexto

const CartWidget = () => {
  const { cartCount } = useCart(); // Leemos la cantidad del carrito del contexto

  return (
    <div>
      <img src={cart} alt="cart-widget" />
      {cartCount}
    </div>
  );
};

export default CartWidget;
