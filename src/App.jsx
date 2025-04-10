import Cadastro from "./pages/Cadastro";
import Listar from "./pages/Listar";
import Isabele from "./pages/Pagina-Isabele";

import { 
  BrowserRouter, 
  Route,
  Routes
} from "react-router-dom";
import Isabele from "./pages/Pagina-Isabele";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Ola mundo</h1>}/>
        <Route path="/listar" element={<Listar/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/isabele" element={<Isabele/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}