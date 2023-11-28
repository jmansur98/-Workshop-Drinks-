import React from 'react';
import { Link } from 'react-router-dom';
import './itemList.css'
import Item from '../Item/item'; 

const ItemList = ({ products }) => {
    return (
      <div className='ListGrup'>
        {products.map(prod => (
          <div key={prod.id}>
            <Item {...prod} />
          </div>
        ))}
      </div>
    );
  };
export default ItemList;
