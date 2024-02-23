import styled from "styled-components";
import IndicadorDeRolagem from "./IndicadorDeRolagem";
import { useEffect } from "react";



const ConteinerPrincipal = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    padding-top: 2em;
    @media (min-width: 768px) {
        padding: 0;
    }
`

const FotoRafael = styled.img`
    border: 2px solid #FFF;
    border-radius: 100%; 
    height: 90vw; 
    width: 90vw; 
    object-fit: cover; 
       filter: brightness(100%) saturate(100%) drop-shadow(0 0 5px #220000cb) drop-shadow(0 0 10px #220000cb) drop-shadow(0 0 15px #220000cb);
    @media (min-width: 768px) {
        height: 40vw;
        width: 40vw;
    }
    @media (min-width: 1024px) {
        height: 50vh;
        width: 50vh;
    }
    `

const TituloNome = styled.h1`
    font-size: 3em;
    text-align: center;
    padding: 0.5rem; 
    margin: 4rem 0 1.5rem 0; 
    color: #000;
    @media (min-width: 1024px) {
        font-size: 7em;
    }
`



function FotoETitulo() {
    const handleScroll = () => {
        const SecaoIndicadorRolagem = document.querySelector('section[id="portfolio"]');
        if (SecaoIndicadorRolagem) {
          SecaoIndicadorRolagem.scrollIntoView({ behavior: "smooth" });
        }
      };
    

    return (
        <ConteinerPrincipal>
            <FotoRafael src="/imagens/FotoRafael.jpg" alt="Foto Rafael" />
            <TituloNome>Rafael Carvalho Ink</TituloNome>
            <IndicadorDeRolagem handleScroll={handleScroll}/>
        </ConteinerPrincipal>
    )
}

export default FotoETitulo;
