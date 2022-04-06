import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ListProducts from '../ListProducts/ListProducts'
import React,{ useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount'

export default function ItemDetail({ data }) {
    const { title, price, stock, image } = data

    return(
        <div className="card-item">
            <img src={`./${image}`} alt={image} />
            
            <div className='container-card-data'>
                <h2>{title}</h2>
                <p>Precio : $ {price}</p>
                <p>ESPECIFICACIONES:
                Disfruta y comparte tus mejores fotos al momento con esta cámara instantánea de Kodak. Disponible en dos acabados, esta compacta de bolsillo cuenta con un sensor de imagen y produce impresiones en papel Zink adhesivo
                No olvides comprar papel Kodak Zink para tu Printomatic</p>
                <ItemCount stock={stock}/>
                <br/>
                <Button variant="outlined" className="buttonCard">COMPRAR</Button>
                
            </div>
        </div>
    )
}
