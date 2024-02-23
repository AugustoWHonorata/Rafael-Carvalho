import styled from "styled-components";
import FotoQuemSouEu from "./FotoQuemSouEu";
import DescricaoQuemSouEu from "./DescricaoQuemSouEu";
import DivDesktop from "../ElementosPadrao/DivDesktop";

const Section = styled.section`
  padding: 0;
`
const QuemSouEuTitulo = styled.h4`
  color: #000;
  text-align: center;
`;



function QuemSouEu() {
  return (
    <Section id="quemSouEu">
      <QuemSouEuTitulo>Quem Sou Eu</QuemSouEuTitulo>
      <DivDesktop>
        <FotoQuemSouEu/>
        <DescricaoQuemSouEu/>
      </DivDesktop>
    </Section>
  )
}

export default QuemSouEu