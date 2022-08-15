import Item from "../Item/Item";
import './ItemDetails.css'
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount/ItemCount";
import { useState } from 'react';
import { Link } from "react-router-dom";



function ItemDetails ({producto}) {

    const [productoAgregadoAlCarrito, setproductoAgregadoAlCarrito] = useState(false);
    const onAdd = (cantidadToAdd) => {

        
        console.log(
            cantidadToAdd
        );
        setproductoAgregadoAlCarrito(true);
    };


    return (
        <div className="itemDetails">
         {producto.map(prod =>{ 
            return (
                    <div className="itemM" key={prod.id}>
                        <div className="noVer"> 
                        <Item  
                        imagen={prod.img}
                        nombre={prod.nombre}
                        /> 
                        <br/>
                        </div>
                     <Card>
                        <Card.Body className="tarjeta">
                            <Card.Text className="tipo-letra"> Precio: $ {prod.precio} </Card.Text>
                            <Card.Text className="tipo-letra"> Descripción: {prod.descrip} </Card.Text>
                            <Card.Text className="tipo-letra"> Stock disponible: {prod.stock} </Card.Text>
                            <p></p>
                        </Card.Body>
                    </Card>
                    <br/><br/>
                    {productoAgregadoAlCarrito ? <Link to={`/cart`} >Producto agregado con éxito, chequeá tu carrito!</Link> : (
                        <div className="agregarCarrito"> 
                        <ItemCount
                        agregarAlCarrito={onAdd}
                        stock={prod.stock}
                        />
                        </div>
            )}
                    </div>
                                   
                        
            )})}    
         
        </div> 
    
    

)
    
}

export default ItemDetails;


