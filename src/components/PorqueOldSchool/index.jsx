import styled from "styled-components"
import DivDesktop from "../ElementosPadrao/DivDesktop"
import DivPadrao from "../ElementosPadrao/DivPadrao"

const Titulo = styled.h6`
    
`
const Paragrafo = styled.p`
  font-size: 6vw;
  @media (min-width: 768px) {
        font-size: 1em;
    }
  @media (min-width: 1024px) {
        font-size: 3em;
    }

`


function PorqueOldSchool (){
    return( 
        <section id="porqueoldSchool">
            <Titulo>Porque Fazer Old School?</Titulo>
            <DivDesktop>
                <DivPadrao>
                    <Paragrafo>Por que optar pelo estilo Old School? Cada estilo de tatuagem oferece sua própria beleza e singularidade, mas o Old School tem uma aura especial que evoca nostalgia e autenticidade. Suas linhas audaciosas e cores vibrantes contam histórias que resistem ao teste do tempo, criando uma conexão emocional duradoura. Embora eu trabalhe com uma variedade de estilos, gostaria de apresentar o encanto único do Old School. Deixe-me guiá-lo por esta jornada clássica, onde tradição e estilo se unem para criar uma obra de arte eterna e cheia de significad</Paragrafo>
                </DivPadrao>
            </DivDesktop>
        </section>
    )
}


export default PorqueOldSchool