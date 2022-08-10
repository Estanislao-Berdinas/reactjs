import { ProductosId } from '../Data/Data'
import { useEffect, useState } from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import { useParams } from 'react-router-dom'

function ItemDetailsContainer () {
    const [producto, setProducto] = useState([]);
    const { ProductoId } = useParams ();
    
    useEffect (()=>{
        ProductosId (ProductoId)
        .then((dato)=> setProducto(dato))
        .catch(err=> console.log (err))
        
    }, [ProductoId])

    return (
        <>
        <h1>Información del Producto</h1>
        <ItemDetails producto={producto}/>
        </>

    )
  

}

export default ItemDetailsContainer;