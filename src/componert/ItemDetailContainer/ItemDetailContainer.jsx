import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getProductById } from '../../asyncmocks';

const ItemDetailContainer = () => {
  const location = useLocation();
  const { id } = useParams();
  const [product, setProduct] = useState(location.state);
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(!location.state);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!location.state) {
      setLoading(true);
      const fetchProduct = async () => {
        try {
          const selectedProduct = await getProductById(parseInt(id, 10));
          if (selectedProduct) {
            setProduct(selectedProduct);
          } else {
            console.error('Product not found');
            setError('Producto no encontrado');
          }
        } catch (error) {
          console.error('Error fetching product:', error);
          setError('Error al obtener el producto');
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [id, location.state]);

  const handleIncrement = () => {
    if (product && quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (  
    <div>
      {product ? (
        <>
          <h2>{product.name}</h2>
          <p>Precio: ${product.price}</p>
          <p>Stock: {product.stock}</p>
          <p>Descripción: {product.description}</p>
          <p>Contador: {quantity}</p>
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
        </>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;