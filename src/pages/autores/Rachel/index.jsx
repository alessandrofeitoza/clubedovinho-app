import gatinho from "./img/gatinho.jpg";
import { ChevronLeft } from "@mui/icons-material";
import { Settings } from "@mui/icons-material";
import { Button } from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import "./styles.scss";

export default function Rachel() {
    return (
        <div className="page-rachel">
            <div  className="icons">
                <ChevronLeft/>
                <Settings/>
            </div>

            <div>
                <img width="80px" className="imagem" src={gatinho}/>
            </div>

            <h2 className="titulo">Rachel Rocha</h2>
            <h3 className="subtitulo">Fisioterapeuta</h3>



           <div className="barra">

            <Button>Following</Button>
            <AddCircle className="addcircle"/>
            <Button>Followers</Button>

           </div>

           <div className="conteudo">
            
           </div>

        </div>

        
    )


    
}