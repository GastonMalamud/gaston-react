import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import mockProductos from '../Utils/productsMock'

const DetailPage = () => {
    const { id, category } = useParams()
    const [product, setProduct] = useState({})

    useEffect( () => {
        filterProductById(mockProductos, id)
    }, [id])

    const filterProductById = (array , id) => {
        return array.map( (product) => {
            if(product.id == id) {
                return setProduct(product)
            }
        })
    }
    
    return(
        <Container className='container-general'> 
            <div className='container-detail'>
            <div className='container-detail__img'>
                <img src={`../${product.image}`} alt="jean" />
            </div>
            <div className='container-detail__info'>
                <h3 className='info__title'>{product.title}</h3>
                <p className='info__text'>$ {product.price}</p>
                <p className='info__subtitle'>DETALLE</p>
                <p className='info__text detail__text'>Disfruta y comparte tus mejores fotos al momento con esta cámara instantánea de Kodak. Disponible en dos acabados, esta compacta de bolsillo cuenta con un sensor de imagen y produce impresiones en papel Zink adhesivo.No olvides comprar papel Kodak Zink para tu Printomatic</p>
                <Button className='detail__btn-buy'>COMPRAR</Button>
            </div>
            </div>
        </Container>
    )
}

export default DetailPage