import "./styles.scss";  

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import eu from "./img/eu.png";
import img from "./img/front-end.png";
export default function Levy() {
    return (
        <div className="page-levy">
        <div className="background">
            <p>Um pouco sobre mim</p>

            <h1>Quem sou eu?</h1>

            <div className="content">
                <img src={eu} alt="" />

                <p>Olá, me chamo Levy, tenho 20 anos. Sou estudante de programação e gosto de quebrar a cabeça com códigos.</p>
            </div>

            <div className="container">
                <div className="me">
                    <img src={img} alt="" />

                    <h3>GITHUB</h3>

                    <a href="https://github.com/levyzowisk">Mais</a>

                </div>

                <div className="me">
                    <img src={img} alt="" />

                    <h3>LINKEDIN</h3>

                    <a href="https://www.linkedin.com/in/levy-sousa-8005791b5/">Mais</a>
                </div>

                <div className="me">
                    <img src={img} alt="" />

                    <h3>INSTAGRAM</h3>

                    <a href="https://www.instagram.com/levy._sousa/">Mais</a>
                </div>

            </div>
        </div>
        </div>

    )
}