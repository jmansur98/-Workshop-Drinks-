import { useCart } from "../componert/CartContext/CartContext";
import { Link } from 'react-router-dom';
import "../App.css"

const Carrito = () => {
  const { cart, removerFromCart } = useCart();

  return (
    <div className="carrito-container">
      <h2>Carrito</h2>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={index} className="producto-seleccionado">
            <h3>Producto Seleccionado</h3>
            <div className="info-producto">
            <p>Nombre: {item.product.name}</p>
            <p>Precio: ${item.product.price}</p>
            <p>Cantidad: {item.quantity}</p>
          </div>
            <button
              className="boton-eliminar"
              onClick={() => removerFromCart (item.product.id)} >
              X
            </button>
          </div>

        ))
      ) : (
        <div className="carrito-vacio">
          <p>No hay productos en el carrito.</p>
          <p className="mensaje">Oops, parece que tu carrito está vacío.</p>
          <Link to="/">
            <button className="boton-volver">Volver a productos</button>
          </Link>
        </div>        
      )}
    </div>
  );
};

export default Carrito;