import React, { useState, useEffect, createContext } from 'react'
import Item from '../Item'
import { getProducts } from '../utils/firebase';

export const CartContext = createContext();

export const DataProvider = (props) => {
    const [productos, setProductos] = useState([])
    const [menu, setMenu] = useState(false)
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cartValor, setCartValor] = useState(0)
    const [car, setCar] = useState(false)
    const productoModificar = productos



    async function conslutarDB() {
        const producto = await getProducts()
        const theItems = producto.docs.map(producto => producto.data())
        const theKeys = producto.docs.map(producto => producto._key.path.segments[6])
        theItems.map((item, index) => {
            item.id = theKeys[index]
        })

        setProductos(theItems)
    }
    useEffect(() => {
        conslutarDB()

    }, [])
    /*============================ Function to add product  =====================================================*/
    const addCarrito = (id, valor) => {
        const check = carrito.every(item => {
            return item.id !== id;
        })
        if (check) {
            const data = productoModificar.find(element => element.id === id);
            let producto = {
                id: data.id,
                title: data.title,
                price: data.price,
                image: data.image,
                category: data.category,
                cantidad: valor
            }
            setCarrito([...carrito, producto]);
        } else {
            const data = carrito.filter(producto => {
                return producto.id === id;
            })
            data[0].cantidad += valor;
            data[0].price += data[0].price;

        }
    }
    /*============================ Function to total the product  =====================================================*/
    useEffect(() => {
        const getTotal = () => {
            const res = carrito.reduce((prev, item) => {
                return prev + (item.price * item.cantidad);
            }, 0)
            setTotal(res)
        }
        const valorTotal = () => {
            const cartv = carrito.reduce((prev, item) => {
                return prev + item.cantidad;
            }, 0)
            setCartValor(cartv)
        }
        valorTotal()
        getTotal()
    }, [carrito])
    /*============================ Function to remove products  =====================================================*/
    const removeProducto = id => {
        if (window.confirm('¿Quieres eliminar el producto?')) {
            let productosEliminar = carrito.filter(item => item.id !== id)
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