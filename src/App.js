import './App.css';
import NavBar from './components/nav/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DataProvider } from "./context/Dataprovider"
import Carrito from './components/carrito/Carrito';
import ItemList from './components/Item/ItemList';
import ItemDetail from './components/Item/ItemDetail'
import Inicio from './components/inicio/Inicio'

import 'boxicons';

function App() {



  return (
    <DataProvider>

      <div className="App">
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/producto" element={<ItemList />} />
            <Route path="/producto/:id" element={<ItemDetail />} />
          </Routes>
        </BrowserRouter >

      </div>
    </DataProvider>

  );
}

export default App;
