import {productos, productoCategoria} from '../Data/Data'
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom'
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';


function ItemListContainer ({item}) {
    const [producto, setProducto] = useState([]);
    const { categoriaId } = useParams();

 
    
    useEffect (()=>{

        const queryDB = getFirestore();
        const queryCollection = collection (queryDB, 'productos')
        if (categoriaId) { 
            const queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
            getDocs(queryFilter)
            .then(res => setProducto(res.docs.map(producto => ({ id: producto.id, ...producto.data()}))))        
        } else {
            getDocs(queryCollection)
            .then(res => setProducto(res.docs.map(producto => ({ id: producto.id, ...producto.data()}))))        
            
    }
    }, [categoriaId])

    return (
        <div className='cajaProductos'>
        <ItemList producto={producto} />
        </div>

    )
  

}

export default ItemListContainer;