import React, { useState, useContext } from 'react';
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [carro, setCarro] = useState([]);

    const productoCarro = (id) => carro.find(product =>product.id === id) ? true : false;

    const sumaCarro = ({producto, cantidad}) => {
        if (productoCarro(producto.id)) {
            setCarro(carro.map(product => {
                return( product.id === producto.id ? {...product, cantidad: product.cantidad + cantidad} : product)
            }));
        }else{
            setCarro([...carro, {...producto, cantidad}]);
        }}
    //    setCarro ([...carro, producto]);
    // }

    const borraCarro = () => setCarro ([]);

    
    
    const borraProducto = (id) => setCarro(carro.filter(product => product.id !== id));

    

    return (
        <CartContext.Provider value={{sumaCarro, borraCarro, productoCarro, borraProducto}}> {children} </CartContext.Provider>
    )
}

export default CartProvider;
    

