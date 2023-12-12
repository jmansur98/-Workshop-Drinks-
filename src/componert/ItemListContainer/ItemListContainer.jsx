import { useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/client';

const ItemListContainer = ({ greeting, product}) => {
        useEffect(() => {
            const productosRef = collection(db, 'productos');


            getDocs(productosRef)
            
            .then((snapshot) => {
                const productsData = snapshot.docs.map((doc) => ({
                id: doc.id,...doc.data(),
                }));
        
                console.log('Productos desde Firebase:', productsData);
            })
            .catch((error) => {
                console.error('Error al obtener datos de Firebase:', error);
            });
        }, []);

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={product} />
        </div>
    );
};

export default ItemListContainer
