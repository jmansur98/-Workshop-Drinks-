import React, { useState } from 'react';
import './Item.css'
import ItemList from '../ItemList/ItemList'

const Item =({id, name,img, price, stock}) => {
const [quantity, setQuantity] = useState(0);

const handleIncrement = () => {
    if (quantity < stock) {
        setQuantity(quantity + 1);
    }
};
const handleDecrement = () => {
    if (quantity > 0){
        setQuantity(quantity -1);
    }
};
    return( 
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>{name}</h2>
            </header>
            <picture>
                <img src= {img} alt= {name} className='ItemImg'/>
            </picture>
            <section>
                <p className='Info'>
                    precio: $ {price}
                </p>
                <p className='Info'>
                    Stock: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
            <button className='Option' onClick={handleDecrement}>-</button>
            <span className='Quantity'>{quantity}</span>

        <button className='Option' onClick={handleIncrement}>+</button>


                <button className='Option'>Ver Detalle</button>
            </footer>
        </article>

    )
}
export default Item;
