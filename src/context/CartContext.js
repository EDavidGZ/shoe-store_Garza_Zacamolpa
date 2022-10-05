import React, { useState, useEffect, createContext } from 'react'
import { getProducts, updateStock } from '../utils/firebase';
import Swal from 'sweetalert2'

export const CartContext = createContext();

export const DataProvider = (props) => {
    const [productos, setProductos] = useState([])
    const [tablaUsuarios, setTablaUsuarios] = useState([])
    const [menu, setMenu] = useState(false)
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cartValor, setCartValor] = useState(0)
    const [car, setCar] = useState(false)
    const productoModificar = productos
    const [usuarios, setUsuarios] = useState([])
    const [hombre, setHombre] = useState([])
    const [mujer, setMujer] = useState([])




    async function conslutarDB() {
        const producto = await getProducts()
        const theItems = producto.docs.map(producto => producto.data())
        const theKeys = producto.docs.map(producto => producto._key.path.segments[6])
        theItems.map((item, index) => {
            item.id = theKeys[index]
        })
        setProductos(theItems)
        setTablaUsuarios(theItems)
    }
    useEffect(() => {
        conslutarDB()

    }, [])
    /*============================ Function to serch  =====================================================*/
    const filtrar = (terminoBusqueda) => {
        const resultadosBusqueda = tablaUsuarios.filter((elemento) => {
            if (elemento.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }
        });
        setUsuarios(resultadosBusqueda);
    }
    const filtrarPorHombre = () => {
        const resultadoGenero = tablaUsuarios.filter(elemento => {
            if (elemento.genero == 'hombre') {
                return elemento;
            }
        });
        setHombre(resultadoGenero);

    } 
     const filtrarPorMujer = () => {
         const resultadoGenero = tablaUsuarios.filter((elemento) => {
             if (elemento.genero == 'mujer') {
                 return elemento;
                }
            });
            setMujer(resultadoGenero);
        }

    useEffect(() => {
        filtrarPorHombre()
        filtrarPorMujer()
    },[tablaUsuarios])
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
            Swal.fire({
                title: 'El producto se grego a la cesta con exito',
                width: 600,
                padding: '3em',
                color: '#716add',
                background: '#fff url(/images/trees.png)',
                icon: 'success',
                showConfirmButton: false,
                backdrop: `
                rgba(0,0,123,0.4)
                url("https://media.tenor.com/xzjlrhYq_lQAAAAj/cat-nyan-cat.gif")
                left top
                no-repeat
                `,
                timer: 1500
              })
            setCarrito([...carrito, producto]);
        } else {
            const data = carrito.filter(producto => {
                return producto.id === id;
            })
            Swal.fire({
                title: 'El producto se grego a la cesta con exito',
                width: 600,
                padding: '3em',
                color: '#716add',
                background: '#fff url(/images/trees.png)',
                icon: 'success',
                showConfirmButton: false,
                backdrop: `
                rgba(0,0,123,0.4)
                url("https://media.tenor.com/xzjlrhYq_lQAAAAj/cat-nyan-cat.gif")
                left top
                no-repeat
                `,
                timer: 1500
              })

            data[0].cantidad += valor;
            data[0].price += data[0].price;

        }
    }
    /*============================ Function to total the product  =====================================================*/
    // console.log(carrito)
    function actualizarTodo() {
        carrito.map(carUpdate => {
            productos.map(cxa => {
                if (cxa.id == carUpdate.id) {
                    let resta = cxa.cantidad - carUpdate.cantidad
                    console.log(resta)
                    Swal.fire({
                        title: 'La compra se realizo con exito',
                        width: 600,
                        padding: '3em',
                        color: '#716add',
                        background: '#fff url(/images/trees.png)',
                        icon: 'success',
                        showConfirmButton: false,
                        backdrop: `
                        rgba(0,0,123,0.4)
                        `,
                        timer: 1500
                      })
                            conslutarDB()
                    return updateStock(carUpdate.id, resta)
                }
            })
            setCarrito([])
        })
    }

    /*=================================================================================*/
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
                return prev + item.cantidad ;
            }, 0)
            console.log(cartv)
            setCartValor(cartv)
        }
        valorTotal()
        getTotal()
        // GuardarEnStorage("datosDeStorage", carrito);

    }, [carrito, cartValor])
    /*============================ Function to remove products  =====================================================*/
   const confirmarRemove = (id) => {
       Swal.fire({
           title: 'Estas seguro de eliminar el producto?',
           icon: 'warning',
           showCancelButton: true,
           confirmButtonColor: '#3085d6',
           cancelButtonColor: '#d33',
           confirmButtonText: 'Si, eliminar'
         }).then((result) => {
           if (result.isConfirmed) {
            removeProducto(id)
             Swal.fire(
               'Se ha eliminado con exito!',
               '',
               'success'
             )
           }
         })

   }
   
   const remove = () => {
       Swal.fire({
           title: 'Estas seguro de eliminar todos los productos?',
           icon: 'warning',
           showCancelButton: true,
           confirmButtonColor: '#3085d6',
           cancelButtonColor: '#d33',
           confirmButtonText: 'Si, eliminar'
         }).then((result) => {
           if (result.isConfirmed) {
            setCarrito([])
             Swal.fire(
               'Se eliminaron con exito!',
               '',
               'success'
             )
           }
         })

   }
    const removeProducto = (id) => {
            let productosEliminar = carrito.filter(item => item.id !== id)
            console.log(productosEliminar)
            setCarrito(productosEliminar);
        

    }

    /*=============================================================================*/
    // const GuardarEnStorage = (clave, elemento) => {

      
    //     //conseguir elementos
    
    //     let elementos = JSON.parse(localStorage.getItem(clave));
    //     //comprobar si son array
    //     if(Array.isArray(elementos)) {
    //         //añadir a array
    //         elementos.push(elemento);
    //     }else {
    //       //crear array
    //       elementos = [elemento];
    //     }
        
        
    //     //guardar en el local
    //     localStorage.setItem(clave, JSON.stringify(elementos))
    //     console.log(elementos);
        
    //     //devolver objeto
    //     return elemento;
    
    //   }
    useEffect(() => {
        const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'));
        if(dataCarrito){
            setCarrito(dataCarrito);
        }
    }, [])

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
        confirmarRemove: confirmarRemove,
        remove: remove,
        cartValor: [cartValor],
        car: [car],
        hombre: [hombre],
        mujer: [mujer],
        actualizarTodo: actualizarTodo,
        tablaUsuarios: [tablaUsuarios, setTablaUsuarios],
        filtrar: filtrar,
        usuarios: [usuarios],
    }

    return (
        <CartContext.Provider value={value} >
            {props.children}
        </CartContext.Provider>
    )

}