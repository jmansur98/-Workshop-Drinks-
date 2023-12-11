import React from 'react';

const ItemDetail = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <p>Descripción: {product.description}</p>

    </div>
  );
};

export default ItemDetail;
