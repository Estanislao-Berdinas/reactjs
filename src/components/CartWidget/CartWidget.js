import Carrito from '../Image/carrito.png'
import './CartWidget.css'
import Badge from 'react-bootstrap/Badge';
import { useCartContext } from '../../Context/CartContext';
import {Link} from 'react-router-dom'


function CartWidget ({producto}) {

    const {productosTotal} = useCartContext();
    return (
        <div>
        <Link to='/carro'> <img src={Carrito} className="Carrito" alt="carrito" width="50px" height="50px" />
        </Link>
        <Badge bg="danger">{productosTotal () || '0'} </Badge>{' '}
        </div> 
)
}

export default CartWidget;