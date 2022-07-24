import './ItemListContainer.css'

function ItemListContainer (greeting) {

    return (
    
   <div className="ItemList">
   <h1> Hola, {greeting.nombre} </h1>

   </div>
   )
}

export default ItemListContainer;