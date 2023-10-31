import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const NavBar = () => {
    return (
   
  <header>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#">Inicio</a></li>
                    <li className="nav-item"><a href="#">Acerca</a></li>
                    <li className="nav-item"><a href="#">Servicios</a></li>
                    <li className="nav-item"><a href="#">Contacto</a></li>
                    <li className="nav-item cart">
                        <a href="#">
                            <AddShoppingCartIcon />
                            <span>0</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>


  )
}
export default NavBar