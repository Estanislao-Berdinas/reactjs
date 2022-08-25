import React, { useState, useContext } from 'react';
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [carro, setCarro] = useState([]);

    

    const sumaCarro = (producto, cantidadToAdd) => {
        if (productoCarro(producto.id)) {
            setCarro(carro.map(prod => {
                return( prod.id === producto.id ? {...prod, cantidadToAdd: prod.cantidad + cantidadToAdd} : prod)
            }));
        }else{
            setCarro([...carro, {...producto, cantidadToAdd}]);
        }}
   
    const borraCarro = () => setCarro ([]);

    const productoCarro = (id) => carro.find(product =>product.id === id) ? true : false;

    const borraProducto = (id) => setCarro(carro.filter(product => product.id !== id));
   

    return (
        <CartContext.Provider value={{sumaCarro, borraCarro, productoCarro, borraProducto}}> {children} </CartContext.Provider>
    )
}

export default CartProvider;
    

