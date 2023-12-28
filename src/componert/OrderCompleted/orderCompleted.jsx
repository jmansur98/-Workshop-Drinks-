import React from 'react';
import './orderCompleted.css';
import { useLocation } from 'react-router-dom';

const OrderCompleted = () => {
  const { state } = useLocation();
  const orderDetails = state && state.orderDetails;

  return (
    <div className="order-completed-container">
      <h2>¡Orden Completada!</h2>
      <p>¡Gracias por tu compra!</p>
      {orderDetails ? (
        <>
          <p>Número de Orden: {orderDetails.orderId}</p>
          <p>Total de la Compra: ${orderDetails.totalPrice}</p>
        </>
      ) : (
        <p>Error: Detalles de la orden no disponibles.</p>
      )}
    </div>
  );
};

export default OrderCompleted;
