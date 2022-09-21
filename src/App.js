import NavBar from './components/nav/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DataProvider } from "./context/CartContext"
import Carrito from './components/carrito/Carrito';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/Item/ItemDetailContainer'
import Inicio from './components/inicio/Inicio'
import Cart from './components/Item/Cart'
import 'boxicons';

function App() {



  return (
    <DataProvider>

      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Carrito />

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/producto" element={<ItemListContainer />} />
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Cart />} />
          </Routes>
        </BrowserRouter >

      </div>
    </DataProvider>

  );
}

export default App;
