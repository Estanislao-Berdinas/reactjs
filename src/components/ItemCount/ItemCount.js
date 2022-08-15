import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './ItemCount.css';

function ItemCount ({agregarAlCarrito, stock}) {

    const [contador, setContador] = useState (1);

    const onAdd = () => {
      agregarAlCarrito(contador)
    }
      
    const sumaContador = () => {
       if (contador < stock) {
        setContador(contador + 1);
       }
        
    }

    const restaContador = () => {
        if (contador > 1) {
          setContador (contador - 1);
          }
    }
    
    return (
      
                
    <div className='caja'>
      <div className='boton'>
        <Button onClick={restaContador} variant="primary" size="sm">
          -
        </Button>
        {contador}        
        <Button onClick={sumaContador} variant="primary" size="sm">
          +
        </Button>
        </div>
        <br/>
        <div className='carrito'>
        <Button onClick={onAdd}  variant="primary" size="lg">
          Agregar al Carrito 
        </Button>
        </div>
        
    </div>
)
}

export default ItemCount ;