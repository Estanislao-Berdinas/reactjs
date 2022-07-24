import Carrito from '../Image/carrito.png'
import './CartWidget.css'

function CartWidget () {

    return (
        <div>
        <img src={Carrito} className="Carrito" alt="carrito" width="50px" height="50px" />
        </div>
    )
}

export default CartWidget;