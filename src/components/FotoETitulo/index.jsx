import styled from "styled-components";

const ConteinerPrincipal = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const FotoRafael = styled.img`
    border: 2px solid #FFF;
    border-radius: 100%; 
    height: 90vw; 
    width: 90vw; 
    object-fit: cover; 
    box-shadow: 8px 4px 10px 0px rgba(0, 0, 0, 0.866),19px 10px 21px -3px rgba(0,0,0,0.6),19px 14px 7px -3px rgba(0,0,0,0.3);    
    `

const TituloNome = styled.h1`
    font-size: 10vw; 
    text-align: center;
    padding: 0.5rem; 
    color: #000;
    text-shadow: 0px 0px 5px red;
    -webkit-text-stroke: 2px white;
    letter-spacing: 8px;

`

function FotoETitulo() {
    return (
        <ConteinerPrincipal>
            <FotoRafael src="/imagens/FotoRafael.jpg" alt="Foto Rafael"/>
            <TituloNome>RAFAEL CARVALHO INK</TituloNome>
        </ConteinerPrincipal>
    )
}

export default FotoETitulo;
