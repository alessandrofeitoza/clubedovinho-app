import foto from "./img/foto-edu-comprimida.jpg";
import "./styles.scss";

export default function Eduardo() {
    return (
        <div className="page-eduardo">
            <div className="container">
                <img src={foto} alt="José Eduardo" className="profile-photo" />

                <h1>José Eduardo</h1>
                <h2>Desenvolvedor Júnior</h2>

                <div className="section">
                    <h3>Linguagens:</h3>
                    <ul className="skills">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>JSX</li>
                        <li>PHP</li>
                        <li>NODEJS</li>
                    </ul>
                </div>

                <div className="section">
                    <h3>Meus Projetos:</h3>
                    <div className="projects">
                        <a href="https://github.com/JoseEduardo-max/clubedovinho-front.git" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#722F37"><path d="M320-120v-80h120v-164q-86-14-143-80t-57-156v-240h480v240q0 90-57 156t-143 80v164h120v80H320Zm160-320q56 0 98-34t56-86H326q14 52 56 86t98 34ZM320-640h320v-120H320v120Zm160 200Z" /></svg> Clube do Vinho Front
                        </a> <br />
                        <a href="https://JoseEduardo-max.github.io" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#008000"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" /></svg> Portfólio Pessoal
                        </a> <br />
                        <a href="https://github.com/JoseEduardo-max/brasasdoforro-site.git" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B22222"><path d="M240-400q0 52 21 98.5t60 81.5q-1-5-1-9v-9q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60v9q0 4-1 9 39-35 60-81.5t21-98.5q0-50-18.5-94.5T648-574q-20 13-42 19.5t-45 6.5q-62 0-107.5-41T401-690q-39 33-69 68.5t-50.5 72Q261-513 250.5-475T240-400Zm240 52-57 56q-11 11-17 25t-6 29q0 32 23.5 55t56.5 23q33 0 56.5-23t23.5-55q0-16-6-29.5T537-292l-57-56Zm0-492v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T622-658l18-22q74 42 117 117t43 163q0 134-93 227T480-80q-134 0-227-93t-93-227q0-129 86.5-245T480-840Z" /></svg> Site Brasas do Forror
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
