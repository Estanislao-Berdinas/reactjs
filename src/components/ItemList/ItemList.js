import Item from "../Item/Item";
import './ItemList.css'

function ItemList ({producto}) {
    return (
        <div className="itemList">
         {producto.map(prod =>{ 
            return (
                    <div key={prod.id}>
                <Item  
                    imagen={prod.img}
                    nombre={prod.nombre}
                    precio={prod.precio} /> 
                    </div>
            )})}    
    </div> 
)
    
}

export default ItemList;