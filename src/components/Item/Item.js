import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

 const cargarProducto = (props)=>{ 
        return ( console.log (props.id)

        )
    }



function Item(props) {
   

    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.imagen} />
          <Card.Body>
            <Card.Title>{props.nombre}</Card.Title>
            {/* <Card.Text> $ {props.precio} </Card.Text>
            <Card.Text> Descripción: {props.descripcion} </Card.Text>
            <Card.Text> Stock disponible (en cantidad): {props.stock} </Card.Text> */}
                <Link to={`/detalles/${props.nombre}`}><Button variant="primary">Ver mas información del producto</Button></Link>
         </Card.Body>
    </Card>
    )

    

}

export default Item;
