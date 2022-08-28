import Item from "../Item/Item";
import './ItemDetails.css'
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount/ItemCount";
import React, { useState} from 'react';
import { Link } from "react-router-dom";
import { useCartContext } from '../../Context/CartContext'

function ItemDetails ({producto}) {

    const [productoAgregadoAlCarrito, setproductoAgregadoAlCarrito] = useState(false);

    const {sumaCarro} = useCartContext();
    const onAdd = (cantidadToAdd) => {

        
        console.log(
            cantidadToAdd
        );
        setproductoAgregadoAlCarrito(true);
        sumaCarro(producto, cantidadToAdd);
        console.log(sumaCarro)
    };

   


    return (
        <div className="itemDetails">
         
               <div className="itemM" key={producto.id}>
                        <div className="noVer"> 
                        <Item  
                        imagen={producto.img}
                        nombre={producto.nombre}
                        /> 
                        <br/>
                        </div>
                     <Card>
                        <Card.Body className="tarjeta">
                            <Card.Text className="tipo-letra"> Precio: $ {producto.precio} </Card.Text>
                            <Card.Text className="tipo-letra"> Descripción: {producto.descrip} </Card.Text>
                            <Card.Text className="tipo-letra"> Stock disponible: {producto.stock} </Card.Text>
                            <p></p>
                        </Card.Body>
                    </Card>
                    <br/><br/>
                    {productoAgregadoAlCarrito ? <Link to={`/carro`} >Producto agregado con éxito, chequeá tu carrito!</Link> : (
                        <div className="agregarCarrito"> 
                        <ItemCount
                        agregarAlCarrito={onAdd}
                        stock={producto.stock}
                        />
                        </div>
            )}
                    </div>
                                   
                        
            
         
        </div> 
    
    

)
    
}

export default ItemDetails;


