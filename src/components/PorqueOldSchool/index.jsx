import styled from "styled-components"
import DivDesktop from "../ElementosPadrao/DivDesktop"
import DivPadrao from "../ElementosPadrao/DivPadrao"
import ParagrafoPadrao from "../ElementosPadrao/ParagrafoPadrao"

const Titulo = styled.h6`
    
`



const ImgPq = styled.img`
    margin-top: 1em;
    max-width: 100vw;
    max-height: 90vh;
    border: 1px solid #FFF;
    border-radius: 40px;
    @media (min-width: 768px){
        width: 40vw;
    }
`
const DivVejaExemplos = styled.div`

`
const ParagrafoVejaExemplos = styled.p`
    background-color: gray;
    color: #FFF;
    font-size: 2em;
    text-shadow: 1px 1px 2px #000;
    padding: 0.8rem 0;
`
function PorqueOldSchool() {
    return (
        <section id="porqueoldSchool">
            <Titulo>Porque Fazer Old School?</Titulo>
            <DivDesktop>
                <DivPadrao>
                    <ParagrafoPadrao>Por que optar pelo estilo Old School? Cada estilo de tatuagem oferece sua própria beleza e singularidade, mas o Old School tem uma aura especial que evoca nostalgia e autenticidade. Suas linhas audaciosas e cores vibrantes contam histórias que resistem ao teste do tempo, criando uma conexão emocional duradoura. Embora eu trabalhe com uma variedade de estilos, gostaria de apresentar o encanto único do Old School. Deixe-me guiá-lo por esta jornada clássica, onde tradição e estilo se unem para criar uma obra de arte eterna e cheia de significad</ParagrafoPadrao>
                </DivPadrao>
                <DivVejaExemplos>
                    <ParagrafoVejaExemplos>Alguns exemplos</ParagrafoVejaExemplos>
                    <ImgPq src="src/assets/DesenhosJuntos.png" />
                </DivVejaExemplos>
            </DivDesktop>
        </section>
    )
}


export default PorqueOldSchool