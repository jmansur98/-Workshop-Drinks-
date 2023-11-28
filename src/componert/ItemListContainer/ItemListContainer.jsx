import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting, product}) => {


    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={product} />
        </div>
    )
}

export default ItemListContainer
