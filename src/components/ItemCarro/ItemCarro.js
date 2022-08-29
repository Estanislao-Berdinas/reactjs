import './ItemCarro.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useCartContext } from '../../Context/CartContext';

const ItemCarro = ({producto}) => {
    const {borraProducto} = useCartContext();
    return (
        <div className='ItemCarro'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={producto.img} />
                        <Card.Body>
                            <Card.Title>Nombre: {producto.nombre}</Card.Title>
                            <Card.Title>Cantidad: {producto.cantidadToAdd}</Card.Title>
                            <Card.Title>Precio: ${producto.precio}</Card.Title>
                            <Card.Title>Subtotal: ${producto.cantidadToAdd * producto.precio}</Card.Title>
                            <Button variant="secondary" onClick={()=> borraProducto (producto.id)}>Eliminar</Button>
                            
                        </Card.Body>
                </Card>


        </div>
    )
}

export default ItemCarro;