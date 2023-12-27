import React from 'react';
import '../OrderCompleted/OrderCompleted.css'

const OrderCompleted = ({ orderDetails }) => {

    return (
      <div className="order-completed-container">
        <h2>¡Orden Completada!</h2>
        <p>¡Gracias por tu compra!</p>
        <p>Número de Orden: {orderDetails.orderId}</p>
        <p>Total de la Compra: ${orderDetails.totalPrice}</p>
      </div>
    );
  };
  
  export default OrderCompleted;