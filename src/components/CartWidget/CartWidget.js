import React, {useContext} from 'react';
import Carrito from '../Image/carrito.png'
import './CartWidget.css'
import {CartContext} from '../../Context/CartContext'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';



function CartWidget ({producto}) {

    let carro = []

    return (
        <div>
        <img src={Carrito} className="Carrito" alt="carrito" width="50px" height="50px" />
        <Badge bg="danger">{carro.length}</Badge>{' '}
        
            {/* return (
                    <div className="listadoCarrito" key={prod.id}>
                        <ListGroup as="ol" numbered>
                            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold"></div>
                                                       
                                </div>
                                    <Badge bg="primary" pill>  </Badge>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>


    )
})} */}
</div> 
)
}

export default CartWidget;