import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, name, img, price, stock, category }) => {
  return (
    <article className='CardItem'>
      <header className='Header'>
        <h2 className='ItemHeader'>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className='ItemImg' />
      </picture>
      <section>
        <p className='Info'>
          Precio: $ {price}
        </p>
        <p className='Info'>
          Stock: {stock}
        </p>
        <p className='categoryFilters'>Categoria: {category}</p>
      </section>
      <footer className='ItemFooter'>
        <Link to={`/item/${id}`} state={{ id, name, price, stock, img }}>
          <button className='Option'>
            Ver Detalle
          </button>
        </Link>
      </footer>
    </article>
  );
};
 
export default Item;