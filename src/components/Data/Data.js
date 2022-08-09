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
        "precio": 5000,
        "stock": 6,
        "descrip": "Excelente para exteriores"
    },
    
    {
        "id": 2,
        "nombre": "Macetero",
        "img": "../Image/ofertas3.jpeg",
        "precio": 3000,
        "stock": 4,
        "descrip": "Decorá tu espacio"
    },
    
    {
        "id": 3,
        "nombre": "Portafoco",
        "img": "../Image/ofertas5.jpeg",
        "precio": 2500,
        "stock": 8,
        "descrip":"Renová tu iluminación"
    },
    
    {
        "id": 4,
        "nombre": "Tabla",
        "img": "../Image/categoriahogar2.jpeg",
        "precio": 2000,
        "stock": 10,
        "descrip": "Ideal para tus asados"
    },
    
    {
        "id": 5,
        "nombre": "Mesa",
        "img": "../Image/novedades1.jpeg",
        "precio": 8000,
        "stock": 2,
        "descrip":"Aggiorná tu comedor"
    },
    
    {
        "id": 6,
        "nombre": "Espejo",
        "img": "../Image/categoriadeco3.jpeg" ,
        "precio": 3200,
        "stock": 1,
        "descrip": "Disfruta tu habitación"
        
    },

    {
        "codigo": 7,
        "nombre": "Mesita Ratona",
        "img": "../Image/categoriahogar1.jpeg" ,
        "precio": 4000,
        "stock": 2,
        "descrip": "Embellecé el living"
        
    },
    
    {
        "codigo": 8,
        "nombre": "Perchero",
        "img": "../Image/categoriadeco1.jpeg" ,
        "precio": 3800,
        "stock": 5,
        "descrip":"Estilo Nórdico"
        
    },
    
    {
        "codigo": 9,
        "nombre": "Baúl",
        "img": "../Image/novedades4.jpeg" ,
        "precio": 3400,
        "stock": 3,
        "descrip": "Optimizá tus lugares"
        
    }
    ]
    

export default productos;
