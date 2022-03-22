import React from 'react'
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar () {
    return(
        //JSX
        <header className='main-header'>
            <div className='container-logo'>
            <img 
                src="logo.png" 
                className="img-header"
            />
            </div>
            <div className='title-header'>Polaroid</div>
            <ul className='navbar'>
            <li><Button className="custom-btn" variant="secondary">Home</Button></li>
                <li><Button variant="secondary">Productos</Button></li>
                <li><Button variant="secondary">Nosotros</Button></li>
                <li><Button variant="secondary">Contacto</Button></li>
                <CartWidget />
            </ul>  
        </header>
        );
      }
      export default NavBar;
