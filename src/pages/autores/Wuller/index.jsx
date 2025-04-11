import "./styles.css";
import foto from "../Wuller/img/euminerva.jpeg";
import { ArrowRight } from "@mui/icons-material";

export default function Wuller() {
    return (
        <div>
            <div className="curriculo-container">
                <div className="perfil">
                    <img src={foto} width="100px" alt="Minha Foto" className="foto-perfil" />
                    <h1>Wuller Barros</h1>
                </div>
                <p>Estagiario de Suporte Tecnico</p>
               

                <div className="sobre-mim">
                    <h2>Sobre Mim</h2>
                    <p>
                        Formado em Tecnico de Informatica, estagiario de hardware,estudante de analise e desenvolvimento de sistemas.
                    </p>
                </div>
                
            </div>


        </div>
    )
}