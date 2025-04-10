import {Button} from "@mui/material";
import minhaFotoDeMim from "./img/foto.jfif";
import "./styles.css";

export default function Isabele() {
    return (
        <div>
            <Button color="error" variant="contained">Instagram</Button>

            <img width="100px" src={minhaFotoDeMim}/>
            <br>
            </br>

            Ola, eu sou <span className="nome">Isabele</span>
        </div>  
        
        
    )
}