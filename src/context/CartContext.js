import React, { useState, useEffect, createContext} from 'react'
import Item from '../Item'

export const CartContext = createContext();

export const DataProvider = (props) => {
    const [productos, setProductos] = useState ([])
    const [menu, setMenu] = useState(false)
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cartValor, setCartValor] = useState(0)
    const [car, setCar] = useState(false)

    
    const producto = Item.items;
    
    function consultarPromesa(confirmar) {
        return new Promise((res, rej) => {
          if (confirmar) {
            res( setProductos(producto))
          } else {
            rej(setProductos([]))
          }
        }) 
      }


    useEffect(() =>{
        setTimeout(()=>{
            consultarPromesa(true)

        },2000)

        
    }, [])
/*============================ Function to add product  =====================================================*/
    const addCarrito = (id, valor) => {
        const check = carrito.every(item => {
            return item.id !== id;
        })
        if(check){
            const data = productos.filter(producto => {
                return producto.id === id;
            })
            data[0].cantidad = valor;
            setCarrito([...carrito, ...data]);
        }else {
            const data = productos.filter(producto => {
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
            carrito.forEach((item, index) => {
                if (item.id === id) {
                    item.cantidad = 1;
                    carrito.splice(index, 1);
                }
            })
            setCarrito([...carrito]);
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