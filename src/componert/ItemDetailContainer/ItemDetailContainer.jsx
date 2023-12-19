import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/client';
import "./ItemDetailContainer.css"
import {  useCart } from '../CartContext/CartContext';  
import { useNavigate } from 'react-router-dom'; 

const ItemDetailContainer = () => {
  const location = useLocation();
  const { id } = useParams();
  const [product, setProduct] = useState(location.state);
  const [quantity, setQuantity] = useState(0); 
  const [loading, setLoading] = useState(!location.state);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 
  const { addToCart } = useCart();  

  useEffect(() => {
    if (!location.state) {
      setLoading(true);
      const fetchProduct = async () => {
        try {
          const productDoc = doc(db, 'productos', id);
          const productSnapshot = await getDoc(productDoc);

          if (productSnapshot.exists()) {
            const selectedProduct = {
              id: productSnapshot.id,
              ...productSnapshot.data(),
            };
            setProduct(selectedProduct);
          } 
          else {
            console.error('Error fetching product:', error);
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
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0 && product && product.stock !== undefined) {
    
      addToCart(product, quantity);
      navigate('/carrito');
    }
  };
  

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (  
    <div className="ItemDetailContainer">
      {product ? (
        <>
          <h2>{product.name}</h2>
          <img src={product.img} alt={product.name} />
          <p>Precio: ${product.price}</p>
          <p>Stock: {product.stock}</p>
          <div>
            <button onClick={handleDecrement}>-</button>
            <span className='QuantityTwo'>{quantity}</span>
            <button onClick={handleIncrement}>+</button>
          </div>
          <p className='prevTotalPrice'>Precio total: ${product.price * quantity}</p>
            <button onClick={handleAddToCart}>
              Agregar al carrito
            </button>
        </>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer