import {Button} from "@mui/material";
import foto from "./img/foto.jpg";
import "./styles.css";


export default function Feitoza() {
    return (
        <div>
            <Button>Instagram</Button>

            <img width="100px" src={foto}/>


            Ola, eu sou <span className="nome">Fulano</span>
        </div>
    )
}