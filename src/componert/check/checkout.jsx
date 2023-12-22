import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext/CartContext';
import "./checkout.css";

const Checkout = () => {
    const navigate = useNavigate();
    const { cart } = useCart();
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
    });
  
    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handlePlaceOrder = () => {
      // Implement logic to place the order using formData and cart items
      // ...
  
      // Clear the cart after placing the order
      // ...
  
      // Redirect to a thank you page or homepage
      navigate('/');
    };
  
    return (
      <div className="checkout-container">
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
          <button type="button" onClick={handlePlaceOrder}>
            Confirmar Pedido
          </button>
        </form>
      </div>
    );
  };
  
  export default Checkout;