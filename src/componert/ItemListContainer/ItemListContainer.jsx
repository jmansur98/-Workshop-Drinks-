import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/client';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]); //estado que almacenará la lista de productos que se mostrarán
  const [selectedCategory, setSelectedCategory] = useState(""); // estado que almacena la categoría seleccionada

  const { category } = useParams(); // obtiene la categoría desde los parámetros de la URL

  useEffect(() => {
    const productosRef = collection(db, 'productos');
    const categoryFilter = selectedCategory ? where('category', '==', selectedCategory) : null; // filtrar por categoría si hay una seleccionada

    const productosQuery = categoryFilter ? query(productosRef, categoryFilter) : productosRef;

    getDocs(productosQuery)   // consulta (productosQuery) que puede incluir un filtro por categoría.
      .then((snapshot) => {
        const productsData = snapshot.docs.map((doc) => ({
          id: doc.id, ...doc.data(),
        }));
        console.log('Productos desde Firebase:', productsData);
        setProductos(productsData);
      })
      .catch((error) => {
        console.error('Error al obtener datos de Firebase:', error);
      });
     },
   [selectedCategory]); // actualizar productos cuando cambie la categoría seleccionada


  useEffect(() => {
    // seleccionar la categoría desde los parámetros de la URL (useEffect para inicializar la categoría desde la URL)
    setSelectedCategory(category || "");
  }, [category]);

  return (
    <div>
      <h1>{greeting}</h1>
      <div>
        <label>Filtrar por categoría:</label>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>  {/*permite al usuario elegir una categoría al seleccionar una categoría  se actualiza el estado selectedCategory, lo que desencadena el efecto para obtener productos*/}
          <option value="">Todas las categorías</option>
          <option value="Clásico">Clásico</option>
          <option value="Premium">Premium</option>
          <option value="Lujo">Lujo</option>
        </select>
      </div>
      <ItemList products={productos} />
    </div>
  );
};

export default ItemListContainer;
