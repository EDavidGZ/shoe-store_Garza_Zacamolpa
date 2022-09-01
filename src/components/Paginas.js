import React from 'react'
import { Routes, Route } from "react-router-dom";
import ItemList from './Item/ItemList';
import ItemDetail from './Item/ItemDetail'
import Inicio from './inicio/Inicio'

const Paginas = () => {
  return (
    <section>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/producto" element={<ItemList />}/>
            <Route path="/producto/:id" element={<ItemDetail />}/>
        </Routes>
    </section>
    )
}

export default Paginas