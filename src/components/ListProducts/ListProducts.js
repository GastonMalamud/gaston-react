import Card from '../Card/Card'
import React, {useState, useEffect} from 'react'
import './ListProducts.css'

const ListProducts = () => {
    const mockProductos = [{
        title : 'Kodak Printomatic',
        id: 1,
        price: 13999,
        image: '1.jpg',
        stock: 3
    },
    {
        title : 'Kodak Mini Shot Retro',
        id: 2,
        price: 8799,
        image: '2.jpg',
        stock: 4  
    },
    {
        title : 'Kodak Smile Classic',
        id: 3,
        price: 9999,
        image: '3.jpg',
        stock: 7  
    },
    {
        title : 'Kodak Mini Shot',
        id: 3,
        price: 11999,
        image: '4.jpg',
        stock: 5  
    }
]
const [products, setProducts] = useState([])

const itemProducts = () => {
    return new Promise((resolve, reject) => {
         return resolve(mockProductos)
     })
 }
 useEffect(() => {
    itemProducts().then((data) => {
        setProducts(data)
    })
}, [])

return(
    <div className="container-cards">
        <h2> Productos en Oferta</h2>
        {products.map( ( product ) => {
            const {id} = product

            return(
                <Card data={product} key={id}/>
            )
        })}
    </div>
) 
}


export default ListProducts;