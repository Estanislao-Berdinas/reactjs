import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './ItemCount.css';

function ItemCount () {

    const [contador, setContador] = useState (1);

    const stock = 5;

     function sumaContador () {
        setContador (contador + 1);
        
    }

    function restaContador () {
        setContador (contador - 1);
           
        }

    function alerta () {
        alert('Producto agregado');
        
    }
    
    return (
                
    <div className='caja'>
    <h2> Huerteros a comprar</h2> 
        <div className='boton'>
        <Button onClick={restaContador} variant="primary" size="sm">
          -
        </Button>
        
        <p> {contador < 1 ? null : contador > stock ? null : contador} </p>
        <Button onClick={sumaContador} variant="primary" size="sm">
          +
        </Button>
        </div>
       
        <div className='carrito'>
        <Button onClick={alerta}  variant="primary" size="lg">
          Agregar al Carrito 
        </Button>
        </div>
        
    </div>
)
}

export default ItemCount;