import { doc, setDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext"
import ItemCarro from "../ItemCarro/ItemCarro";
import './Carro.css';


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
         {
                carro.map(producto =><ItemCarro key={producto.id} producto={producto}/>)
            }

    <Form className="formulario">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingresá email" id="inputEmail" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control type="name" placeholder="Nombre" id="inputNombre" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridPhone">
        <Form.Label>Teléfono de Contacto</Form.Label>
        <Form.Control placeholder="Ingresa tu teléfono" id="inputNumero" />
      </Form.Group>
    <Button variant="secondary" type="#">
       Precio total = {precioTotal()}
      </Button>

      <Button onClick={crearOrden} variant="primary" type="submit">
        Generar Compra
      </Button>
    </Form>
            
        </>
        )
    
    
}

export default Carro;