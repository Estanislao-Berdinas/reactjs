import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext"
import ItemCarro from "../ItemCarro/ItemCarro";


const Carro = () => {
    const {carro, precioTotal} = useCartContext();

    if (carro.length === 0) {
        return(
        <>
            <p>No agregaste nada al carrito</p>
            <Link to='/'>Volver al Catálogo</Link>
        </>
        )
    }

        return(
        <>
            {
                carro.map(producto =><ItemCarro key={producto.id} producto={producto}/>)
            }
            <p> Precio total = {precioTotal()}</p>
        </>
        )
    
    
}

export default Carro;