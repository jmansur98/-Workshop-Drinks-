import { useEffect, useState } from 'react'
import { getproducts } from '../../asyncmocks'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
    const [product, setproducts] = useState ([])

    useEffect (()=> {
        getproducts ()
        .then(Response => {
            setproducts(Response)
        })
        .catch(Error => {
             console.error();
        })
    }, [])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={product} />
        </div>
    )
}

export default ItemListContainer
