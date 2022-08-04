import data from "../Item/Item"
 
     
    const productos = new Promise ((resolve, reject) => {
        let pedido=true
        if (pedido) {
            setTimeout(()=> {
                resolve (data)
            }, 2000)
        }
        else {
            reject(console.log ("No hay pedido"))
        }
    
    })


export default productos;