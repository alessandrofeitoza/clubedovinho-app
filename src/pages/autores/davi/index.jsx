import daviFoto from "./assets/imgs/davi-perfil.webp";
import instagramIcon from "./assets/icons/insta-icon.png";
import githubIcon from "./assets/icons/github-icon.png";
import "./styles.scss";


export default function Davi() {
  return (
    <>
      <div className="pageDavi">
        <h1>Davi Sousa Alves</h1>
        <img
          className="fotoDePerfil"
          src={daviFoto}
          alt="minha foto de perfil"
        />
        <nav>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/daviiisousa19/"
                target="_blank"
              >
                <img
                  loading="lazy"
                  className="instIcon"
                  src={instagramIcon}
                  alt="icone do insta"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/daviiisousa" target="_blank">
                <img src={githubIcon} alt="icone gitHub" loading="lazy" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
