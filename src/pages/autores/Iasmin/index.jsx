import foto from "./img/iasmin.png"
import "./styles.css";


export default function Iasmin() {
    return (
        <div>
            <div className="perfil">
                <div>
                    Hi, my name is <br/>
                    <span className="white">Iasmin Oliveira e Sena</span>
                </div>
                <div>
                    <img  width= "100px" src={foto}/>
                </div>
            </div>
            <div>
                <div className="sobre_mim">
                    <h3>About Me</h3>
                    <p>
                    I love mixing graphic design with front-end to build beautiful, practical, and user-friendly interfaces. With a solid background in design and dev, I focus on the details to make everything smooth and intuitive. I'm always keeping up with trends and enjoy turning ideas into creative, functional projects.
                    </p>
                </div>

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
                    <h3>Contact me</h3>
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