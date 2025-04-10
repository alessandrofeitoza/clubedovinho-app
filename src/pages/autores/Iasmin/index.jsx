import foto from "./img/iasmin.png"
import "./styles.css";


export default function Iasmin() {
    return (
        <div>
            <div className="perfil">
                <div>
                    <img  width= "100px" src={foto}/>
                </div>
                <div>
                    Hi, my name is <br/>
                    <span className="white">Iasmin Oliveira e Sena</span>
                </div>
            </div>
            <div>
                <h3>About Me</h3>
                <p>
                I love mixing graphic design with front-end to build beautiful, practical, and user-friendly interfaces. With a solid background in design and dev, I focus on the details to make everything smooth and intuitive. I'm always keeping up with trends and enjoy turning ideas into creative, functional projects.
                </p>
            </div>

        </div>
    )
}