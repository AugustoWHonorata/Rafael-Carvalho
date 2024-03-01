import styled from "styled-components"
import DivPadrao from "../../ElementosPadrao/DivPadrao"
import LiCuidados from "../LiCuidados"
import TituloTipo from "../Titulo"
import UlCuidados from "../UlCuidados"

const CuidadosPreTopicos = ["Beber bastante água. Hidratação começa de dentro pra fora.", "Alimentação equilibrada. Se Possível evitar consumo excessivo de gordura nos dias anteriores.", "Usar protetor solar e hidratante.", "Evite Depilar a região antes da seesão. Porque você pode acabar machucando a pele.", "Não utilizar Pomada anestésica", "Optar por roupa que permita fácil acesso a região a ser tatuada."]

const AvisoAcompanhante = styled.p`
    background-color: #9b9b9baa;
    padding: 1rem;
    color: #000;
    font-size: 1.5em;
    @media (min-width: 1024px) {
        font-size: 2em;
    }
`
const QuantidadeAcompanhantes = styled.p`
    color: #000;
    @media (min-width: 1024px) {
        font-size: 1.5em;
    }
`

function CuidadosPre() {
    return (
        <div>
            <TituloTipo>Pré Tatto</TituloTipo>
            <DivPadrao>
                <UlCuidados>
                    {CuidadosPreTopicos.map((cuidado, index) => <LiCuidados key={index}>{cuidado}</LiCuidados>)}
                </UlCuidados>
                <AvisoAcompanhante>*ACOMPANHANTES*</AvisoAcompanhante>
                <QuantidadeAcompanhantes>PERMITIDO 1 PESSOA</QuantidadeAcompanhantes>
            </DivPadrao>
        </div>
    )
}

export default CuidadosPre