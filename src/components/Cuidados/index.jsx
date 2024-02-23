import styled from "styled-components";
import CuidadosPre from "./CuidadosPre";
import CuidadosPos from "./CuidadosPos";


const CuidadosTitulo = styled.p`
  color: #4d4646;
  font-size: 5vw;
  font-style: italic;
  font-weight: bold;
  margin: 4em 0 -2em 0;
  text-align: center;
  @media (min-width: 768px) {
        font-size: 3em;
        margin-bottom: -1em;
    }

`;



function CuidadosPrePos(){
    return(
        <section id="cuidados">
            <CuidadosTitulo>Cuidados com</CuidadosTitulo>
            <CuidadosPre/>
            <CuidadosTitulo>Cuidados com</CuidadosTitulo>
            <CuidadosPos/>
        </section>
    )
}

export default CuidadosPrePos