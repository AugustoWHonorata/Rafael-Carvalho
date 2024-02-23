import styled from "styled-components"
import DivPadrao from "../ElementosPadrao/DivPadrao"

const Paragrafo = styled.p`
    font-size: 1.8em;
    padding: 0 1rem;
    @media (min-width: 1024px) {
        font-size: 3em;
    }
`
function MinhaPrimeiraTatto() {
    return (
        <section id="primeiraTatto">
            <h6 >Minha Primeira Tatto</h6>
            <DivPadrao>
                <Paragrafo>
                Olá! Se você está pensando em fazer sua primeira tatuagem, deixe-me tranquilizá-lo(a). Entrar no mundo da tatuagem é mergulhar em uma forma de arte única e pessoal. Cada tatuagem é uma expressão de quem somos, uma obra-prima que carregamos conosco para sempre.<br/>
                É natural sentir um misto de emoções, desde empolgação até um pouco de ansiedade. Você pode estar se perguntando sobre a dor, e é importante lembrar que ela é diferente para cada pessoa. Alguns descrevem como um leve incômodo, enquanto outros a consideram mais intensa. Mas saiba que você está no controle, e pode sempre pedir ao tatuador para fazer pausas sempre que precisar.<br/>
                Deixe-me destacar que sou extremamente cuidadosos. Entendo que este é um momento importante para você e farei tudo ao meu alcance para tornar a experiência o mais confortável possível. Estou sempre aberto a conversa para esclarecer quaisquer dúvidas que você possa ter sobre o processo, desde o design até os cuidados pré/pós-tatuagem.<br/>
                Então, respire fundo e confie no processo. Tenho certeza de que você sairá do estúdio com uma obra de arte que o(a) encherá de orgulho. Estou aqui para tornar este momento especial para você.
                </Paragrafo>
            </DivPadrao>
        </section>
    )
}

export default MinhaPrimeiraTatto