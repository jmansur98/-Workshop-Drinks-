import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, name, img, price, stock }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <article className='CardItem'>
      <header className='Header'>
        <h2 className='ItemHeader'>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className='ItemImg' />
      </picture>
      <section>
        <p className='Info'>
          Precio: $ {price}
        </p>
        <p className='Info'>
          Stock: {stock}
        </p>
      </section>
      <footer className='ItemFooter'>
        <button className='Option' onClick={handleDecrement}>-</button>
        <span className='Quantity'>{quantity}</span>
        <button className='Option' onClick={handleIncrement}>+</button>
        <Link to={`/item/${id}`}>
          <button className='Option'>
            Ver Detalle
          </button>
        </Link>
      </footer>
    </article>
  );
};

export default Item;
