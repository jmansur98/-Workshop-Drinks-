import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count] = useState(initial);


  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div className="ItemCount">
      <button onClick={handleAddToCart}>
  {count > 0 ? `Ir al carrito (${count})` : 'Finalizar Compra'}
</button>
    </div>
  );
};

export default ItemCount;
