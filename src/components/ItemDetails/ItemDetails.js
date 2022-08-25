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
                    {productoAgregadoAlCarrito ? <Link to={`/carro`} >Producto agregado con éxito, chequeá tu carrito!</Link> : (
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


