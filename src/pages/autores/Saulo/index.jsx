import "./styles.css";
import React from 'react';
import fotosaulo from "./img/perfil-saulo.jpg"
import { Link } from 'react-router-dom';


export default function Saulo() {
    return (
        <div>
            <img width="450px" src={fotosaulo} alt="" />

            <h1>Dj Saulo Torres</h1>
            <h1>


                Atuando desde 2011, Saulo se destaca por um repertório apurado e composto de versões e remixes exclusivos que passeiam por vários estilos de clássicos da música mundial, fazendo de seus sets uma grande viagem no tempo. Grandes versões e remakes de Deep House, Nu Disco e house caracterizam seus sets e somados ao seu feeling apurado, transformam o ambiente em cada apresentação.

                Sua vasta experiência já fez com que acumulasse apresentações no Festival Villa Mix, Reveillon Colosso Lake Lounge, Casacor Ceará, Camarote Mucuripe Fortal, Dragão Fashion e outros grandes eventos.
            </h1>

        <Link to="/https://soundcloud.com/djsaulotorres/recsession7djsaulotorres">
        <button className="meu-botao">Sound Clound Dj Saulo Torres</button>
      </Link>
        </div>
    
    )
}



