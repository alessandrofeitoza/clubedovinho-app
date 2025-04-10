import { DaviComponent } from "./components/davi";
import Cadastro from "./pages/Cadastro";
import Listar from "./pages/Listar";

import { 
  BrowserRouter, 
  Route,
  Routes
} from "react-router-dom";
import Rachel from "./pages/autores/Rachel";
import Mario from "./pages/autores/Mario";
import Isabele from "./pages/autores/Isabele";
import Eduardo from "./pages/autores/Eduardo";
import Thiago from "./pages/autores/Thiago";
import Joao from "./pages/autores/Joao";
import Saulo from "./pages/autores/Saulo";
import Julio from "./pages/autores/Julio";
import Jorge from "./pages/autores/Jorge";
import Levy from "./pages/autores/Levy";
import Iasmin from "./pages/autores/Iasmin";
import Wuller from "./pages/autores/Wuller";
import Johnatan from "./pages/autores/Johnatan";
import Feitoza from "./pages/autores/Feitoza";
import Ronney from "./pages/autores/Ronney";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<h1>Ola mundo</h1>}/>
        <Route path="/autores/rachel" element={<Rachel/>}/>
        <Route path="/autores/isabele" element={<Isabele/>}/>
        <Route path="/autores/mario" element={<Mario/>}/>
        <Route path="/autores/thiago" element={<Thiago/>}/>
        <Route path="/autores/eduardo" element={<Eduardo/>}/>
        <Route path="/autores/saulo" element={<Saulo/>}/>
        <Route path="/autores/joao" element={<Joao/>}/>
        <Route path="/autores/julio" element={<Julio/>}/>
        <Route path="/autores/johnatan" element={<Johnatan/>}/>
        <Route path="/autores/jorge" element={<Jorge/>}/>
        <Route path="/autores/levy" element={<Levy/>}/>
        <Route path="/autores/iasmin" element={<Iasmin/>}/>
        <Route path="/autores/wuller" element={<Wuller/>}/>
        <Route path="/autores/ronney" element={<Ronney/>}/>
        <Route path="/autores/feitoza" element={<Feitoza/>}/>

        <Route path="/*" element={<h1>Erro 404: pagina nao encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  )
}