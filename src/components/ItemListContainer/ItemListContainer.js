import {productos, productoCategoria} from '../Data/Data'
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom'

function ItemListContainer ({item}) {
    const [producto, setProducto] = useState([]);
    const { categoriaId } = useParams()
    
    useEffect (()=>{
                
        if (categoriaId) { productoCategoria (categoriaId)
            .then((dato)=> setProducto(dato))
            .catch(err=> console.log (err))}
        else {
        productos
        .then((dato)=> setProducto(dato))
        .catch(err=> console.log (err))
    }
    }, [categoriaId])

    return (
        <div className='cajaProductos'>
        <ItemList producto={producto} />
        </div>

    )
  

}

export default ItemListContainer;