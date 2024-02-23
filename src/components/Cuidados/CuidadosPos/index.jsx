import DivPadrao from "../../ElementosPadrao/DivPadrao"
import LiCuidados from "../LiCuidados"
import TituloTipo from "../Titulo"
import UlCuidados from "../UlCuidados"


const CuidadosPosTopicos = ["Ao sair do estúdio usar o plástico filme pelo mínimo de 3 horas", " Usar Plástico filme para dormir nos dois primeiros dias", "Lavar com água morna 2 vezes ao dia com sabonete neutro sem friccionar", "Aplicar uma fina camada de hidratante neutro 3 vezes ao dia", "Evitar comidas muito gordurosas. Não comer Frutos do mar durante o processo de cicatrização", "Evitar bebidas alcoólicas", "Mantenha-se bem hidratado", "Evitar atividades físicas como musculação durante os primeiros 5 dias", "Não se expor ao sol", "Não entrar em Rios, Piscinas e mar durante todo o processo de cicatrização"]


function CuidadosPos() {
    return (
        <div>
            <TituloTipo>Pós Tatto</TituloTipo>
            <DivPadrao>
                <UlCuidados>
                    {CuidadosPosTopicos.map((cuidado) => <LiCuidados>{cuidado}</LiCuidados>)}
                </UlCuidados>
            </DivPadrao>
        </div>
    )
}

export default CuidadosPos