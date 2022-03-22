import './Card.css'
import Button from '@mui/material/Button';

export default function Card(props) {
    console.log("Precio:", props.price)
    console.log("Talle:", props.price)
    console.log("Titulo:", props.price)
    
    return(
        <div className="card-item">
            {console.log("console dentro de render")}
            <h2>{props.title}</h2>
            <img 
            src={props.img}
            className='imgCard'/>
            <p className="price">Precio : $ {props.price}</p>
            <Button variant="contained">Comprar</Button>
        </div>
    )
}