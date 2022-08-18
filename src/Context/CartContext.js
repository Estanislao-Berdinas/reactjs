import { useState, createContext } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [carro, setCarro] = useState([]);

    const sumaCarro = (product) => {
       setCarro ([...carro, product]);
    }

    return (
        <CartContext.Provider value= {{carro, sumaCarro}}> {children} </CartContext.Provider>
    )
}

export default CartContextProvider;
    

