import productos from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ItemListContainer.css'

function ItemListContainer (item) {
    const [producto, setProducto]=useState([]);

    useEffect (()=>{
        productos
        .then((dato)=> setProducto(dato))
        .catch(err=> console.log (err))
    }, [])

    return (
        <div className='cajaProductos'>

        {
            producto.map(prod=> <Card key={prod.id} style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={prod.img} />
                                        <Card.Body>
                                            <Card.Title>{prod.nombre}</Card.Title>
                                                <Card.Text> $ {prod.precio} </Card.Text>
                                                <Button variant="primary">Comprar</Button>
                                        </Card.Body>
                                </Card>  )
        }


        </div>

    )

  

}

export default ItemListContainer;