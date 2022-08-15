import React, {useContext} from "react";

const ThemeContext = React.createContext();

function CartContext () {
    const probando = useContext (ThemeContext)
    return <p> Probando: {probando}</p>
}
