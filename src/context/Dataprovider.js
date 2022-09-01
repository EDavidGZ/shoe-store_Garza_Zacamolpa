import React, { useState, useEffect, createContext} from 'react'
import Item from '../Item'

export const DataContext = createContext();

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

    const addCarrito = (id) => {
        const check = carrito.every(item => {
            return item.id !== id;
        })
        if(check){
            const data = productos.filter(producto => {
                return producto.id === id;
            })
            setCarrito([...carrito, ...data]);
        }else {
            alert('El producto ya ha sido añadido al carrito')
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
        <DataContext.Provider value={value} >
            {props.children}
        </DataContext.Provider>
    )

}