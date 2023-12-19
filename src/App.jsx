import React, { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './componert/NavBar/NavBar';
import './App.css';
import ItemListContainer from './componert/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componert/ItemDetailContainer/ItemDetailContainer';
import Carrito from './pages/carrito';  
import { CartProvider } from '../src/componert/CartContext/CartContext';

function App() {
  const [product] = useState([]);

  return (
    <Router>
      <CartProvider>
        <div className="App">
          <NavBar />
          <div className='content-container'>
            <Routes>
              <Route path="/" element={<ItemListContainer product={product} greeting={'NUESTROS MEJORES PRODUCTOS'} />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<Carrito />} /> 
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
          </div>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
