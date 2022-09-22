import React, { useState, useEffect, createContext} from 'react'
import Item from '../Item'
import { getProducts } from '../utils/firebase';

export const CartContext = createContext();

export const DataProvider = (props) => {
    const [productos, setProductos] = useState ([])
    const [menu, setMenu] = useState(false)
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cartValor, setCartValor] = useState(0)
    const [car, setCar] = useState(false)

    
    // const producto = Item.items;

    // const productoModificar = producto

    // function consultarPromesa(confirmar) {
    //     return new Promise((res, rej) => {
    //       if (confirmar) {
    //         res( setProductos(producto))
    //       } else {
    //         rej(setProductos([]))
    //       }
    //     }) 
    //   }
    
    async function conslutarDB () {
        const producto = await getProducts()
        const theItems = producto.docs.map(producto => producto.data())
        console.log(theItems)
        setProductos(theItems)
    }
    const productoModificar = productos



    useEffect(() =>{
        // setTimeout(()=>{
        //     consultarPromesa(true)

        // },2000)
        conslutarDB()
        
    }, [])
/*============================ Function to add product  =====================================================*/
    const addCarrito = (id, valor) => {
        const check = carrito.every(item => {
            return item.id !== id;
        })
        if(check){
            const data = productoModificar.filter(producto => {
                return producto.id === id;
            })
            // data[0].cantidad = valor;
            let productInfo = data
            productInfo[0].cantidad = valor
            // console.log('esta es data',data)
            console.log('This is my product',productos)
            console.log('This is my productInfo',productInfo)
            setCarrito([...carrito, ...productInfo]);
        }else {
            const data = productoModificar.filter(producto => {
                return producto.id === id;
            })
            data[0].cantidad += valor;
            data[0].price += data[0].price;

        }
    }
    // useEffect(() => {
    //     const dataCarrito =JSON.parse(localStorage.getItem('dataCarrito'))
    //     if(dataCarrito) {
    //         setCarrito(dataCarrito)
    //     }
    // }, [])
/*============================ Function to total the product  =====================================================*/
    useEffect(() =>{
        const getTotal = ()=> {
            const res = carrito.reduce((prev, item) =>{
                return prev + (item.price * item.cantidad);
            }, 0)
            setTotal(res)
        }
        const valorTotal = ()=> {
            const cartv = carrito.reduce((prev, item) =>{
                return prev +  item.cantidad;
            }, 0)
            setCartValor(cartv)
        }
        valorTotal()
        getTotal()
    }, [carrito])
    /*============================ Function to remove products  =====================================================*/
    const removeProducto = id => {
        if (window.confirm('¿Quieres eliminar el producto?')) {
            let productosEliminar = carrito.filter(item => item.id !== id )
            console.log(productosEliminar)
            setCarrito(productosEliminar);
        }

    }
    const remove = () => {
        if (window.confirm('¿Quieres eliminar todos los producto?')) {
            setCarrito([])
        }
    }
    /*=============================================================================*/


    useEffect(() => {
        localStorage.setItem('dataCarrito', JSON.stringify(carrito))
    }, [carrito])
    

    const value = {
        productos: [productos],
        menu: [menu, setMenu],
        addCarrito: addCarrito,
        carrito: [carrito, setCarrito],
        total: [total, setTotal],
        removeProducto: removeProducto,
        remove: remove,
        cartValor: [cartValor],
        car: [car]
    }

    return (
        <CartContext.Provider value={value} >
            {props.children}
        </CartContext.Provider>
    )

}