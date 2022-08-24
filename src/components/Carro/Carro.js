import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { productos } from '../Data/Data';

function Carro () {
    return (
    <div className="listadoCarrito" key={productos.id}>
        <ListGroup as="ol" numbered>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{productos.nombre}</div>
                                       
                </div>
                    <Badge bg="primary" pill> {productos.id} </Badge>
            </ListGroup.Item>
        </ListGroup>
    </div>
    )
}

export default Carro();