import Card from '../Card/Card'
import './ListProducts.css'

const ListProducts = ({children}) => {

    return(
        <div className="container-cards">
            <h2> {children} </h2>

            <Card title='Kodak Printomatic' price={200} img='1.jpg'/>
            <Card title='Kodak Mini Shot Retro' price={100} img='2.jpg'/>
            <Card title='Kodak Smile Classic' price={123} img='3.jpg'/>
            <Card title='Kodak Mini Shot' price={444} img='4.jpg'/>
        </div>
        
    ) 
}

export default ListProducts;