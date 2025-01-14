import { collection, getDocs } from 'firebase/firestore';
import {DB} from './DataFirebase';

export const productos = new Promise ((resolve, reject) => {
    const colRef = collection(DB,'productos');
    getDocs(colRef).then((snapshot) => {
        
        const productosConFormato = snapshot.docs.map((rawDoc) => {
            return {
                id: rawDoc.id,
                ...rawDoc.data()
            }

        });

        resolve(productosConFormato);

    }, (error) => {
        reject('Error al intentar traer los docs: ', error);
    });
});

export const productoCategoria = (categoriaId) => {
    return new Promise ((resolve,reject) => {
        setTimeout (() => {
            resolve(data.filter(dato=> dato.categoria === categoriaId))
        },500)
        }
)}

export const ProductosId = (ProductoId) => {
    return new Promise ((resolve,reject) => {
        setTimeout (() => {
            resolve(data.find(dato=> dato.nombre === ProductoId))
        },500)
    })
}

    

const data = [{
        "id": "0",
        "nombre": "Huertero",
        "img": "../Image/ofertas1.jpeg",
        "precio": 5000,
        "stock": 6,
        "descrip": "Excelente para exteriores",
        "categoria": "ofertas"
    },
    
    {
        "id": "1",
        "nombre": "Macetero",
        "img": "../Image/ofertas3.jpeg",
        "precio": 3000,
        "stock": 4,
        "descrip": "Decorá tu espacio",
        "categoria": "ofertas"
    },
    
    {
        "id": "2",
        "nombre": "Portafoco",
        "img": "../Image/ofertas5.jpeg",
        "precio": 2500,
        "stock": 8,
        "descrip":"Renová tu iluminación",
        "categoria": "ofertas"
    },
    
    {
        "id": "3",
        "nombre": "Tabla",
        "img": "../Image/categoriahogar2.jpeg",
        "precio": 2000,
        "stock": 10,
        "descrip": "Ideal para tus asados",
        "categoria": "hogar"
    },
    
    {
        "id": "4",
        "nombre": "Mesa",
        "img": "../Image/novedades1.jpeg",
        "precio": 8000,
        "stock": 2,
        "descrip":"Aggiorná tu comedor",
        "categoria": "hogar"
    },
    
    {
        "id": "5",
        "nombre": "Espejo",
        "img": "../Image/categoriadeco3.jpeg" ,
        "precio": 3200,
        "stock": 1,
        "descrip": "Disfruta tu habitación",
        "categoria": "deco"
        
    },

    {
        "id": "6",
        "nombre": "Mesita Ratona",
        "img": "../Image/categoriahogar1.jpeg" ,
        "precio": 4000,
        "stock": 2,
        "descrip": "Embellecé el living",
        "categoria": "hogar"
        
    },
    
    {
        "id": "7",
        "nombre": "Perchero",
        "img": "../Image/categoriadeco1.jpeg" ,
        "precio": 3800,
        "stock": 5,
        "descrip":"Estilo Nórdico",
        "categoria": "deco"
        
    },
    
    {
        "id": "8",
        "nombre": "Baúl",
        "img": "../Image/novedades4.jpeg" ,
        "precio": 3400,
        "stock": 3,
        "descrip": "Optimizá tus lugares",
        "categoria": "deco"
        
    }
    ]
    


