import React, { useEffect } from 'react';
import { useCart } from "../componert/CartContext/CartContext";

const Carrito = () => {
  const { selectedProduct } = useCart();

  useEffect(() => {
    console.log("producto seleccionado", selectedProduct);
  }, [selectedProduct]);

  return (
    <div>
      <h2>Carrito</h2>  
      {selectedProduct && (
        <div>
          <h3>Producto Seleccionado</h3>
          <p>Nombre: {selectedProduct.name}</p>
          <p>Precio: ${selectedProduct.price}</p>
          <p>Cantidad: {selectedProduct.quantity}</p>
        </div>
      )}
    </div>
  );
};

export default Carrito;
