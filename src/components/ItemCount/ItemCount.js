import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import './ItemCount.css';
import { CartContext } from '../../Context/CartContext';
import { productos } from '../Data/Data';

function ItemCount ({agregarAlCarrito, stock}) {

    const [contador, setContador] = useState (1);

     const { sumaCarro } = useContext (CartContext)

    // tareas para continuar -> crear carro, con modales sumas y restas
    // terminar de aplicar propiedades prolijas al css y darle mejor formato
    // agregar en itemdetails un boton para volver luego de agregarlo al carrito y otro aca para volver al catalogo principal

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
        <Button onClick={()=> {
          onAdd()
          sumaCarro({...productos,contador})
          setContador()

        }}  variant="primary" size="lg">
          Agregar al Carrito 
        </Button>
        </div>
        
    </div>
)
}

export default ItemCount ;