import React from 'react';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const NavBar = ({ cartCount }) => {

  return (
    <header>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/productos">Productos</Link>
          </li>
          <li className="nav-item cart">
            <Link to="/carrito">
              <AddShoppingCartIcon />
              <span>{cartCount}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;