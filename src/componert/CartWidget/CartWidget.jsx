import React from 'react';
import cart from './assets/cart-ico.png';
import { useCart } from '../CartContext/CartContext'; 


const CartWidget = () => {
  const { cartCount } = useCart(); 

  return (
    <div>
      <img src={cart} alt="cart-widget" />
      {cartCount}
      
    </div>
  );
};

export default CartWidget;
