import React,{ useState, useEffect } from 'react'
import './Card.css'
import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount'
import { Link, useNavigate } from 'react-router-dom'

export default function Card({ data }) {
    const navigate = useNavigate();
    const { title, price, stock, image } = data
    const [ count, setCount ] = useState(1)
    const [ countTest, setCountTest ] = useState(1)
    //const [ ]

    // useEffect( () => {
    //     console.log("SOLO MONTAJE")
    // },[] )

    // useEffect( () => {
    //     console.log("Siempre que entre en fase ACTUALIZACION")
    // })

    // useEffect( () => {
    //     console.log("SOLO CUANDO CAMBIE COUNT")
    // },[count] )

    // useEffect( () => {
    //     return () => {
    //         console.log("FASE DE DESMONTAJE")
    //     }
    // })
    useEffect( () => {
        console.log("useEffect")
        const onScrollWindow = () => {
            if(window.scrollY > 100 ){
                console.log("Scroll mayor a 100")
            }
        }
        window.addEventListener("scroll", onScrollWindow)
        
        return () => {
            window.removeEventListener("scroll", onScrollWindow)
        }
        
    }, [])

    const addStock = () => {
        setCount(count + 1)
    }
    const removeStock = () => {
        setCountTest(countTest - 1)
    }

    return(
        <div className="card-item">
            <img src={`./${image}`} alt={image} />
            
            <div className='container-card-data'>
                <h2>{title}</h2>
                <p>Precio : $ {price}</p>
                <ItemCount stock={stock}/>
                <br/>
                <Button variant="outlined" className="buttonCard">agregar al carrito</Button>
                
            </div>
        </div>
    )
}