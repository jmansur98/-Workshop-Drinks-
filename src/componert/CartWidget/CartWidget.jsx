import React from 'react';
import { useCart } from '../CartContext/CartContext'; 

const CartWidget = () => {
  const { cart } = useCart(); 

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <span className="cart-count">{cartCount}</span>
    </div>
  );
};

export default CartWidget;
