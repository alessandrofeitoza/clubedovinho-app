import Cadastro from "./pages/Cadastro";
import Listar from "./pages/Listar";

import { 
  BrowserRouter, 
  Route,
  Routes
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Ola mundo</h1>}/>
        <Route path="/listar" element={<Listar/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/mario" elemment={<Mario/>}/>
      </Routes>
    </BrowserRouter>
  )
}