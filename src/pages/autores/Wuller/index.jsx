import "./styles.scss";
import foto from "../Wuller/img/euminerva.jpeg";
import { ArrowRight } from "@mui/icons-material";

export default function Wuller() {
    return (
        <div className="page-Wuller">
            <div className="curriculo-container">
                <div className="perfil">
                    <img src={foto} width="100px" alt="Minha Foto" className="foto-perfil" />
                    <h1 className="eu">Wüller Barros</h1>
                </div>
                <p className="cargo">Estagiario de Suporte Tecnico</p>
               

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