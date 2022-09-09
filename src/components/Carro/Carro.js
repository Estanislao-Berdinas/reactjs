import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext"
import ItemCarro from "../ItemCarro/ItemCarro";


const Carro = () => {
    const {carro, precioTotal} = useCartContext();

        const orden = {
            comprador:{
                nombre: 'Tani Berdiñas',
                mail: 'tani@gmail.com',
                telefono: '23456789',
                direccion: 'tandil'
                    },
            items: carro.map(producto=>({id: producto.id, nombre: producto.nombre, precio: producto.precio})),
            total: precioTotal(),

        }
        
        const generaCompra = () => {
                const DB = getFirestore()
                const ordenesCollection = collection(DB, 'ordenes');
                addDoc(ordenesCollection, orden)
                .then (({id})=> console.log (id))
                
        }
        
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
            <Button onClick={generaCompra()}> Generar compra </Button>
        </>
        )
    
    
}

export default Carro;