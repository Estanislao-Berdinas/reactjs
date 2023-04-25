import { useEffect, useState } from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import { useParams } from 'react-router-dom'
import {getFirestore, doc, getDoc} from 'firebase/firestore';

function ItemDetailsContainer () {
    const [producto, setProducto] = useState([]);
    const {ProductoId} = useParams ();
    
    useEffect (()=>{
        const consultaDB = getFirestore()
        const consultaElement = doc(consultaDB, 'productos', ProductoId)
        getDoc(consultaElement)
        .then(res => setProducto({id: res.id, ...res.data()}))
        
    // eslint-disable-next-line react-hooks/exhaustive-deps 
    }
    ,[]) 

    return (
        <>
        <h1>Información del Producto</h1>
        <ItemDetails producto={producto}/>
        </>

    )
  

}

export default ItemDetailsContainer;