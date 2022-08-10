import Item from "../Item/Item";
import './ItemDetails.css'


function ItemDetails ({producto}) {
    return (
        <div className="itemDetails">
         {producto.map(prod =>{ 
            return (
                    <div key={prod.id}>
                <Item  
                    imagen={prod.img}
                    nombre={prod.nombre}
                    precio={prod.precio}
                    descripcion={prod.descrip}
                    stock={prod.stock} /> 
                    </div>
            )})}    
    </div> 
)
    
}

export default ItemDetails;