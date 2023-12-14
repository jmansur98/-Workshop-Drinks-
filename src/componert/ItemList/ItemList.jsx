import React from 'react';
import './itemList.css';
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
