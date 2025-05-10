import foto from "./img/iasmin.png"
import "./styles.scss";
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

                        <div className="card">
                            <h5>Analista de testes</h5>
                            <p>
                                - Escrita de casos de teste <br/>
                                - Testes de usabilidade <br/>
                                - Análise de requisitos <br/>
                                - Desenvolvimento de um plano de teste </p>
                        </div>
                        <div className="card">
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

            </div>

        </div>
    )
}