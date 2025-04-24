import foto from "./img/iasmin.png";
import "./styles.scss";
import foto from "./img/iasmin.png"
import {Card} from "@mui/material";
import "./styles.css";


export default function Iasmin() {
    return (
        <div className="pages-iasmin">
            <div className="perfil">
                <div>
                    Olá, me chamo <br/>
                    <span className="white">Iasmin Oliveira e Sena</span>
                </div>
                <div>
                    <img  width= "100px" src={foto}/>
                </div>
                <div>
                    <img  width= "100px" src={foto}/>
                </div>
            </div>
            <div>
                <div className="sobre_mim">
                    <h3>Sobre mim</h3>
                    <p>
                    Tenho 25 anos, sou estudante de Sistema e Mídias Digitais, na UFC. Gosto de jogar vôlei, true crime, quebra-cabeças e jogar no PC. 
                    </p>
                </div>

                <div>
                    <h3>Serviços</h3>
                    <div className="conteiner">
                        <div className="card mb-4">
                            <h5>Analista de testes</h5>
                            <p>
                                - Escrita de casos de teste <br/>
                                - Testes de usabilidade <br/>
                                - Análise de requisitos <br/>
                                - Desenvolvimento de um plano de teste </p>
                        </div>
                        <div className="card mb-4">
                            <h5> Desenvolvedora Full Stack</h5>
                            <p>
                                - Criação de site responsivo <br/>
                                - HTML, CSS e JavaScript <br/>
                                - Otimização de desempenho e acessibilidade de sites
                            </p>
                        </div>
                    </div>    
                    <div className="conteiner">
                        <div className="card">
                            <h5>Design UX</h5>
                            <p>
                                - Pesquisa e análise das necessidades de UI <br/>
                                - Wireframing e prototipagem <br/>
                                - Testes e interações com o usuário para melhorar a experiência geral
                            </p>
                        </div>
                        <div className="card">
                            <h5>Suporte Técnico</h5>
                            <p>
                                - Diagnóstico e solução de problemas
                                - Python, SQL, JD Edwards
                                - Implementação de práticas de backup e recuperação de dados
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3>Contatos</h3>
                    <div className="contatos">
                        <div className="card_contatos">
                            <a href="https://github.com/iasminolisena">GitHub</a>
                        </div>
                        <div className="card_contatos">
                            <a href="https://www.instagram.com/iasminolisena/">Instagram</a>
                        </div>
                        <div className="card_contatos">
                            <a href="https://www.linkedin.com/in/iasmin-oliveira-e-sena-945882200/">LinkedIn</a>
                        </div>
                    </div>
                </div>

                <h3>About Me</h3>
                <p>
                I love mixing graphic design with front-end to build beautiful, practical, and user-friendly interfaces. With a solid background in design and dev, I focus on the details to make everything smooth and intuitive. I'm always keeping up with trends and enjoy turning ideas into creative, functional projects.
                </p>

                <div>
                    <h3>Services</h3>
                    <div className="conteiner">
                        <div className="card">
                            <h5>Test analyst</h5>
                            <p>
                                - Test case writing <br/>
                                - Usability testing <br/>
                                - Requirements analysis <br/>
                                - Develop a test plan</p>
                        </div>
                        <div className="card">
                            <h5>Full Stack developer</h5>
                            <p>
                                - Creation of responsive website <br/>
                                - HTML, CSS e JavaScript <br/>
                                - Website performance & accessibility optimization
                            </p>
                        </div>
                        <div className="card">
                            <h5>User experience (UX) design</h5>
                            <p>
                                - UI needs research and analysis <br/>
                                - Wireframing & prototyping <br/>
                                - User testing & interations to improve overall experience
                            </p>
                        </div>
                        <div className="card">
                            <h5>Technical support</h5>
                            <p>
                                - Diagnosis and troubleshooting
                                - Python, SQL, JD Edwards
                                - Implement data backup and recovery practices
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3>Contatos</h3>
                    <div>
                        <div>
                            <h5>GitHub</h5>
                            <a href=""></a>
                        </div>
                        <div>
                            <h5>Instagram</h5>
                            <a href=""></a>
                        </div>
                        <div>
                            <h5>LinkedIn</h5>
                            <a href=""></a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}