import { useState } from 'react';


// hooks

function Contador () {
    const [contador, setContador] = useState (0);

    function agregarAlContador () {
        setContador (contador + 1);
        console.log(contador);
    }
    return (
        <div>
            <p>
                {contador}
            </p>
            <br />
            <button onClick={agregarAlContador}>Agregar al contador 1</button>
        </div>
    )
}

export default Contador;