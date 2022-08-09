import Item from "../Item/Item";


function ItemDetails ({producto}) {
    return (
        <div className="itemList">
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