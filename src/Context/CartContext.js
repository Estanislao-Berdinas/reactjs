import React, { useState, useContext } from 'react';
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [carro, setCarro] = useState([]);

    console.log (carro)

    const sumaCarro = (producto, cantidadToAdd) => {
        if (productoCarro(producto.id)) {
            setCarro(carro.map(prod => {
                return( prod.id === producto.id ? {cantidadToAdd: prod.cantidadToAdd + cantidadToAdd} : prod)
            }));
        }else{
            setCarro([...carro, {...producto, cantidadToAdd}]);
        }}
   
    const borraCarro = () => setCarro ([]);

    const productoCarro = (id) => carro.find(product =>product.id === id) ? true : false;

    const borraProducto = (id) => setCarro(carro.filter(product => product.id !== id));

    const precioTotal = () => {
        return carro.reduce ((prev,act) => prev + act.cantidadToAdd * act.precio,0);
        
     }

    const productosTotal = () => carro.reduce ((sumados, productoElegido) => sumados + productoElegido.cantidadToAdd, 0);
   

    return (
        <CartContext.Provider value={{sumaCarro, borraCarro, productoCarro, borraProducto, precioTotal, productosTotal, carro
        }}> {children} </CartContext.Provider>
    )
}

export default CartProvider;
    

