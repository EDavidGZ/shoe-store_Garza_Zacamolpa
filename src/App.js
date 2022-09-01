import './App.css';
import NavBar from './components/nav/NavBar';
import { BrowserRouter as Router } from "react-router-dom"
import { DataProvider } from "./context/Dataprovider"
import Paginas from './components/Paginas';
import Carrito from './components/carrito/Carrito';
import 'boxicons';

function App() {



  return (
    <DataProvider>

      <div className="App">
        <Router>
          <NavBar />
          <Carrito />
          <Paginas />
          
        </Router>

      </div>
    </DataProvider>

  );
}

export default App;
