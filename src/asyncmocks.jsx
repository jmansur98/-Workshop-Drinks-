const products = [
    {
      id: 1,
      category: 'Premium',
      name: 'Grey Goose',
      stock: 15,
      price: 39.99,
      description: 'Descripción del Grey Goose...',
      img: 'https://www.vinoscutanda.com/22534-large_default/grey-goose.jpg'
    },
    {
      id: 2,
      category: 'Clásico',
      name: 'Absolut',
      stock: 25,
      price: 19.99,
      img: 'https://licotecaonline.com/1678-large_default/vodka-absolut.jpg'
    },
    {
      id: 3,
      category: 'Clásico',
      name: 'Macallan',
      stock: 12,
      price: 29.99,
      img: 'https://cdn.idealo.com/folder/Product/201786/7/201786715/s11_produktbild_gross/the-macallan-12-years-double-cask.jpg'
    },
    {
      id: 4,
      category: 'Premium',
      name: 'Martini',
      stock: 2,
      price: 89.99,
      img: 'https://www.viguisa.es/1289-large_default/martini-blanco.jpg'
    },
    {
      id: 5,
      category: 'Premium',
      name: 'Hendrick',
      stock: 6,
      price: 69.99,
      img: 'https://cdnx.jumpseller.com/piscoboubarroeta/image/20355952/resize/480/480?1646418754'
    },
    {
      id: 6,
      category: 'Lujo',
      name: 'Veuve Clicquot',
      stock: 4,
      price: 79.99,
      img: 'https://www.vinatis.es/42223-detail_default/champagne-veuve-clicquot-brut-carte-jaune-media-botella-375-ml.png'
    },   
    {
      id: 7,
      category: 'Lujo',
      name: 'Fernet Branca',
      stock: 4,
      price: 69.99,
      img: 'https://www.premiumdrink.es/ficheros/productos/fernet-branca..jpg'
    },   
    {
      id: 8,
      category: 'Lujo',
      name: 'BullDog',
      stock: 4,
      price: 49.99,
      img: 'https://www.compraonline.alcampo.es/images-v3/37ea0506-72ec-4543-93c8-a77bb916ec12/7127b29c-ac07-42c0-b20e-42a789d06c1f/500x500.jpg'
    },   
    {
      id: 9,
      category: 'Lujo',
      name: 'Tanqueray',
      stock: 4,
      price: 19.99,
      img: 'https://static.carrefour.es/hd_510x_/img_pim_food/000325_00_1.jpg'
    },
    {
      id: 10,
      category: 'Lujo',
      name: 'Olave',
      stock: 4,
      price: 99.99,
      img: 'https://sabority.com/pub/media/catalog/product/cache/45adf4645d19e41f6607ac1f431b78b8/o/l/olave-vermut-reserva.jpg'
    },    
  ];
  
export const getproducts =
 () => {
    return new Promise ((resolve)=> {
       setTimeout( ()=> {
        resolve (products)
       }, 500) 
    })
}