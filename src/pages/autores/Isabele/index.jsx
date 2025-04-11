import {Button, CardContent, Icon} from "@mui/material";
import {ArrowRight} from "@mui/icons-material";
import minhaFotoDeMim from "./img/foto.jfif";

import "./styles.scss";


export default function Isabele() {
    return (
        
        <div className="page-isabele">
            
            <Button color="error" variant="contained">
                Portfolie<ArrowRight/>
            </Button>
            <br>
            </br>

            <img width="100px" src={minhaFotoDeMim}/>

            <br>
            </br>

           <h1>Isabele</h1>
           <a>Professora e Enfermeira</a>
           <p>Português/Língua de Sinais</p> <span className="nome"></span>
        
        </div>  
        
    )
}