import styled from "styled-components";
import IndicadorDeRolagem from "./IndicadorDeRolagem";
import FotoRafael from "./FotoRafael";
import Titulo from "./Titulo";



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



function FotoETitulo() {
    const handleScroll = () => {
        const SecaoIndicadorRolagem = document.querySelector('section[id="portfolio"]');
        if (SecaoIndicadorRolagem) {
          SecaoIndicadorRolagem.scrollIntoView({ behavior: "smooth" });
        }
      };
    

    return (
        <ConteinerPrincipal>
            <FotoRafael src="/assets/FotoRafael.jpg" alt="Foto Rafael" />
            <Titulo>Rafael Carvalho Ink</Titulo>
            <IndicadorDeRolagem handleScroll={handleScroll}/>
        </ConteinerPrincipal>
    )
}

export default FotoETitulo;
