import {Button} from "@mui/material";
import foto from "./img/foto.jpg";
import "./styles.scss";


export default function Feitoza() {
    return (
        <div className="page-feitoza">
            <Button>Instagram</Button>

            <img width="100px" src={foto}/>

            <div className="meus-botoes">
                <button>Teste1</button>
                <button>Teste2</button>
                <button>Teste3</button>
            </div>

            <button>Teste 4</button>

            Ola, eu sou <span className="nome">Fulano</span>
        </div>
    )
}