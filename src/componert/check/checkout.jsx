import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext/CartContext';
import OrderCompleted from '../OrderCompleted/orderCompleted';
import { v4 as uuidv4 } from 'uuid';
import './checkout.css';


const Checkout = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
  });
  const [orderDetails, setOrderDetails] = useState(null);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setIsFormComplete(Object.values(formData).every((field) => field.trim() !== ''));
  };

  const handlePlaceOrder = async () => {
    if (!isFormComplete) {
      alert('Por favor, complete todos los campos antes de confirmar el pedido.');
      return;
    }
  
    setIsLoading(true); 
  
    const generatedOrderId = uuidv4();
  
    const totalPrice = calculateTotalPrice(cart);
  
    const orderDetailsObject = {
      orderId: generatedOrderId,
      totalPrice,
    };
  
    await new Promise(resolve => setTimeout(resolve, 1500));
  
    setOrderDetails(orderDetailsObject);
  
    clearCart();
    setIsLoading(false); 
  
    navigate('/order-completed', { state: { orderDetails: orderDetailsObject } });
  };
  

  const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  return (
    <div className="checkout-container">
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        orderDetails ? (
          <OrderCompleted orderDetails={orderDetails} />
        ) : (
          <>
            <h2>Datos Usuario</h2>
            <form>
              <label>
                Nombre:
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Apellido:
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Mail:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Dirección:
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </label>
              <button
                type="button"
                onClick={handlePlaceOrder}
                disabled={!isFormComplete}
              >
                Confirmar Pedido
              </button>
            </form>
          </>
        )
      )}
    </div>
  );
};

export default Checkout;
