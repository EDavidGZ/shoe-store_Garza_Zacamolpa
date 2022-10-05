import NavBar from './components/nav/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DataProvider } from "./context/CartContext"
import Menu from './components/Menu/Menu';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetail from './components/Item/ItemDetail'
import Inicio from './components/inicio/Inicio'
import Cart from './components/Item/Cart'
import Busqueda from './components/Item/Busqueda';
import 'boxicons';
import Footer from './components/footer/Footer';
import Hombre from './components/Item/Hombre';
import Mujer from './components/Item/Mujer';
function App() {



  return (
    <DataProvider>

      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Menu />

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/producto" element={<ItemListContainer />} />
            <Route path="/producto/:id" element={<ItemDetail />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/busqueda" element={<Busqueda />} />
            <Route path="/hombre" element={<Hombre />} />
            <Route path="/mujer" element={<Mujer />} />
          </Routes>
          
          <Footer />
        </BrowserRouter >

      </div>
    </DataProvider>

  );
}

export default App;
