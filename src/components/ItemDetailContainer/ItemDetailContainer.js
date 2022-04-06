import React, {useState, useEffect} from 'react'
import ListProducts from "../ListProducts/ListProducts";
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
const [dataproducts, setProducts] = useState({})

    const mockProductos = {
        title : 'Kodak Printomatic',
        id: 1,
        price: 13999,
        image: '1.jpg',
        stock: 3
    }


const getItem = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            return resolve (mockProductos)
        }, 2000);
    });
}
useEffect(() => {
   getItem().then((data) => {
       setProducts(data)
   })
}, [])
console.log(mockProductos);

return(
        <ItemDetail data={dataproducts}/>

) 
}

export default ItemDetailContainer;
