import Item from "../Item/Item";
import './ItemDetails.css'
import Card from 'react-bootstrap/Card';


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
                     <Card>
                        <Card.Body>
                            <Card.Text className="tipo-letra"> Precio: $ {prod.precio} </Card.Text>
                            <Card.Text className="tipo-letra"> Descripción: {prod.descrip} </Card.Text>
                            <Card.Text className="tipo-letra"> Stock disponible: {prod.stock} </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
            )})}    
    </div> 
)
    
}

export default ItemDetails;