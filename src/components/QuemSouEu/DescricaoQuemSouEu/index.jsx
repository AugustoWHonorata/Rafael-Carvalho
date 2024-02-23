import styled from "styled-components"
import DivPadrao from "../../ElementosPadrao/DivPadrao"

const Paragrafo = styled.p`
  font-size: 6vw;
  @media (min-width: 768px) {
        font-size: 1em;
    }
  @media (min-width: 1024px) {
        font-size: 2em;
    }

`



function DescricaoQuemSouEu() {
    return (
        <DivPadrao>
            <Paragrafo>Aqui é o Rafa, sou tatuador e hoje vou contar um pouco da minha história!
                Desde meus 12 anos já tinha indícios que eu iria trabalhar com arte, gostava muito de desenhar!
                Mas a vida cria rumos diferentes, porém todos me fizeram chegar até aqui e no tempo certo!<br />
                Costumava a dizer que a vida adulta é onde os sonhos morrem! Mas…
                A certa de dois anos dei início no que já era sonho desde a pré adolescente, hoje eu vivencio isso!
                No processo decidi participar de uma convenção on-line de tatuagem em busca de me desafiar! Entregar o meu melhor e evoluir!<br />
                E eu ganhei! O que isso muda para vocês? Nada! Pra mim? A certeza que estou no caminho certo e que posso evoluir ainda mais!
                Parar não é uma opção!
                Acredite nos seus sonhos!
            </Paragrafo>
        </DivPadrao>)
}

export default DescricaoQuemSouEu

