import React, {useState, useEffect} from 'react'
import ListProducts from "../ListProducts/ListProducts";
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const mockProductos = [{
        title : 'Kodak Printomatic',
        id: 1,
        price: 13999,
        image: '1.jpg',
        stock: 3
    },
]
const [products, setProducts] = useState([])

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
}

export default ItemDetailContainer;
