const products = [
    {
      id: 1,
      category: 'Premium',
      name: 'Grey Goose',
      stock: 15,
      price: 39.99,
      img: 'https://www.vinoscutanda.com/22534-large_default/grey-goose.jpg'
    },
    {
      id: 2,
      category: 'Clásico',
      name: 'Absolut',
      stock: 25,
      price: 19.99,
      img: 'https://supertiendascomunal.com/8453-large_default/vodka-absolut-350-ml.jpg'
    },
    {
      id: 3,
      category: 'Lujo',
      name: 'Snow Leopard',
      stock: 12,
      price: 59.99,
      img: 'https://www.comprar-bebidas.com/media/catalog/product/cache/5/small_image/350x466/9df78eab33525d08d6e5fb8d27136e95/v/o/xvodka_snow_leopard_70cl.jpg.pagespeed.ic.Mfnx5NGRre.jpg'
    }
  ];
  
export const getproducts = () => {
    return new Promise ((resolve)=> {
       setTimeout( ()=> {
        resolve (products)
       }, 500) 
    })
}