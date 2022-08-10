import Item from "../Item/Item";
import './ItemDetails.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';


function ItemDetails ({producto}) {
    return (
        <div className="itemDetails">
         {producto.map(prod =>{ 
            return (
                    <div className="itemM" key={prod.id}>
                    <Item  
                    imagen={prod.img}
                    nombre={prod.nombre}
                     /> 
                     <br/>
                     <Card>
                        <Card.Body className="tarjeta">
                            <Card.Text className="tipo-letra"> Precio: $ {prod.precio} </Card.Text>
                            <Card.Text className="tipo-letra"> Descripción: {prod.descrip} </Card.Text>
                            <Card.Text className="tipo-letra"> Stock disponible: {prod.stock} </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                                   
                        
            )})}    
         <>
         <Link to='/'><Button variant="primary">Volver a Inicio</Button></Link>
         </>   
        </div> 
    
    

)
    
}

export default ItemDetails;


