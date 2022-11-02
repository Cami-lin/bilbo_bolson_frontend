import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./Banner";
import Acceder from "./clientes/Acceder";
import Header from "./Header";
import NuevaPeticion from "./peticiones/NuevaPeticion";
import TipoPeticiones from "./peticiones/TipoPeticiones";

function App() {
  return (
    <div className="App">
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Banner/>} exact></Route>
            <Route path="/peticiones/TipoPeticiones.js" element={<TipoPeticiones/>} exact></Route>
            <Route path="/peticiones/NuevaPeticion.js" element = {<NuevaPeticion/>} exact></Route>
            <Route path="/clientes/Acceder.js" element={<Acceder/>} exact ></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
