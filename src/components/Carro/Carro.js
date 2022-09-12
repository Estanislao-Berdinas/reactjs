import { doc, setDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext"
import ItemCarro from "../ItemCarro/ItemCarro";


const Carro = () => {
    const {carro, precioTotal, borraCarro} = useCartContext();

    
    const crearOrden = () => {

        let nombre = document.getElementById('inputNombre').value;
        let email = document.getElementById('inputEmail').value;
        let numero = document.getElementById('inputNumero').value;

        const itemsFB = carro.map(producto => ({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: producto.cantidadToAdd

        }));

        let orden = {
            comprador: {
                nombre: nombre,
                email: email,
                numero: numero
            },
            total: precioTotal(),
            items: itemsFB,
            fecha: serverTimestamp()
        }

        console.log(orden);
        
        const generaCompra = async () => {
            const DB = getFirestore ();
            const ordenesCollection = doc(collection(DB, 'ordenes'));
            await setDoc(ordenesCollection, orden);
            return ordenesCollection;
        }

        generaCompra()
        .then(result => alert('Tu compra ha sido confirmada, por favor guardá el código del ticket generado. \n\nOrden ID: ' + result.id ))
        .catch(err => console.log(err)); 
        // (cambiar alert por modal bootsrap) 
    
  
          
        borraCarro();
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
        <form className='checkout'>

            <label className='checkoutLabel'>
            Nombre: <br/>
            <input id='inputNombre' type="text"></input>
            </label>

            <label className='checkoutLabel'>
            Email: <br/>
            <input id='inputEmail' type="email"></input>
            </label>

            <label className='checkoutLabel'>
            Numero: <br/>
            <input id='inputNumero' type="tel"></input>
            </label>
            </form>

            {
                carro.map(producto =><ItemCarro key={producto.id} producto={producto}/>)
            }
            <p> Precio total = {precioTotal()}</p>
            <Button onClick={crearOrden}> Generar compra </Button>
            
        </>
        )
    
    
}

export default Carro;