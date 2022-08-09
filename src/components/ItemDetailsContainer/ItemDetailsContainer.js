import productos from '../Data/Data'
import { useEffect, useState } from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';

function ItemDetailsContainer () {
    const [producto, setProducto] = useState([]);
    
    useEffect (()=>{
        productos
        .then((dato)=> setProducto(dato))
        .catch(err=> console.log (err))
        
    }, [])

    return (
        <div className='cajaProductos'>
        <ItemDetails producto={producto} />
        </div>

    )
  

}

export default ItemDetailsContainer;