import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById  } from '../../main'



const ItemDetailContainer = ({item}) => {
  console.log('entra', item)
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  console.log('product state:', product)
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const selectedProduct = await getProductById(id);
        console.log('selected product:', selectedProduct)          
  
        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          console.error('Product not found');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
  
    fetchProduct();
  }, [id]);
  

  const handleIncrement = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
console.log(product)

  return (  
    <div>
    <h2>{product.name}</h2>
    <p>Precio: ${product.price}</p>
    <p>Stock: {product.stock}</p>
    <p>Descripción: {product.description}</p>
    <p>Contador: {quantity}</p>
    <button onClick={handleDecrement}>-</button>
    <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default ItemDetailContainer;