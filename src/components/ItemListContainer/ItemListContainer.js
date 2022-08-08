import productos from '../Data/Data'
import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

function ItemListContainer ({data}) {
    const [producto, setProducto] = useState([]);
    
    useEffect (()=>{
        productos
        .then((dato)=> setProducto(dato))
        .catch(err=> console.log (err))
        
    }, [])

    return (
        <div className='cajaProductos'>
        <ItemList producto={producto} />
        </div>

    )
  

}

export default ItemListContainer;