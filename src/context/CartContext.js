import React, { useState, useEffect, createContext} from 'react'
import Item from '../Item'

export const CartContext = createContext();

export const DataProvider = (props) => {
    const [productos, setProductos] = useState ([])
    const [menu, setMenu] = useState(false)
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    
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

    const addCarrito = (id, valor) => {
        const check = carrito.every(item => {
            return item.id !== id;
        })
        if(check){
            const data = productos.filter(producto => {
                return producto.id === id;
            })
            data[0].cantidad = valor;
            console.log(data);
            setCarrito([...carrito, ...data]);
        }else {
            const data = productos.filter(producto => {
                return producto.id === id;
            })
            data[0].cantidad += valor;
            data[0].price += data[0].price;

        }
    }
    useEffect(() => {
        const dataCarrito =JSON.parse(localStorage.getItem('dataCarrito'))
        if(dataCarrito) {
            setCarrito(dataCarrito)
        }
    }, [])

    useEffect(() =>{
        const getTotal = ()=> {
            const res = carrito.reduce((prev, item) =>{
                return prev + (item.price * item.cantidad);
            }, 0)
            setTotal(res)
        }

        getTotal()
    }, [carrito])

    useEffect(() => {
        localStorage.setItem('dataCarrito', JSON.stringify(carrito))
    }, [carrito])
    

    const value = {
        productos: [productos],
        menu: [menu, setMenu],
        addCarrito: addCarrito,
        carrito: [carrito, setCarrito],
        total: [total, setTotal]
    }

    return (
        <CartContext.Provider value={value} >
            {props.children}
        </CartContext.Provider>
    )

}