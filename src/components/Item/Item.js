import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


 const cargarProducto = (props)=>{ 
        return (<>
            <Card.Text> $ {props.precio} </Card.Text>
            <Card.Text> Descripción: {props.descripcion} </Card.Text>
            <Card.Text> Stock: {props.stock} </Card.Text>
            </>

        )
    }



function Item(props) {
   

    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.imagen} />
          <Card.Body>
            <Card.Title>{props.nombre}</Card.Title>
            <Card.Text> $ {props.precio} </Card.Text>
            <Card.Text> Descripción: {props.descripcion} </Card.Text>
            <Card.Text> Stock: {props.stock} </Card.Text>
                <Button onClick={cargarProducto} variant="primary">Comprar</Button>
         </Card.Body>
    </Card>
    )

    

}

export default Item;
