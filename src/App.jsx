import React, { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemCount from './componert/ItemCount/ItemCount';
import NavBar from './componert/NavBar/NavBar';
import './App.css';
import ItemListContainer from './componert/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componert/ItemDetailContainer/ItemDetailContainer';
import Productos from './pages/productos';
import Usuario from './pages/usuario';
import { CartProvider } from '../src/componert/CartContext/CartContext';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [product] = useState([]);


  const handleAddToCart = (count) => {
    if (count > 0) {
      setCartItems([...cartItems, { product, quantity: count }]);
    }
  };

  return (
    <Router>
<CartProvider>
        <div className="App">
  <NavBar cartCount={cartItems.length} />
          <div className='content-container'>
            <Routes>
              <Route path="/" element={<ItemListContainer product={product} greeting={'Bienvenido'} />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/usuario" element={<Usuario />} />
              <Route path="/carrito" element={<ItemCount initial={0} stock={10} onAdd={handleAddToCart} />} />
            </Routes>
          </div>
        </div>
        </CartProvider>
    </Router>
  );
}

export default App;
