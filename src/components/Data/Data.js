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

const data = [{
        "id": 1,
        "nombre": "Huertero",
        "img": "../Image/ofertas1.jpeg",
        "precio": 5000
    },
    
    {
        "id": 2,
        "nombre": "Macetero",
        "img": "../Image/ofertas3.jpeg",
        "precio": 3000
    },
    
    {
        "id": 3,
        "nombre": "Portafoco",
        "img": "../Image/ofertas5.jpeg",
        "precio": 2500
    },
    
    {
        "id": 4,
        "nombre": "Tabla",
        "img": "../Image/categoriahogar2.jpeg",
        "precio": 2000
    },
    
    {
        "id": 5,
        "nombre": "Mesa",
        "img": "../Image/novedades1.jpeg",
        "precio": 8000
    },
    
    {
        "id": 6,
        "nombre": "Espejo",
        "img": "../Image/categoriadeco3.jpeg" ,
        "precio": 3200
        
    }
    ]
    

export default productos;
