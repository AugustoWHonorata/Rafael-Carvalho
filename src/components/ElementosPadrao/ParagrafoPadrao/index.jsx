import styled from "styled-components"

const Paragrafo = styled.p`
    font-size: 1.3em;
    text-align: justify;
    word-break: keep-all;
    line-height: 3rem;
    padding: 0 1rem;
`

function ParagrafoPadrao({children}){
    return(
        <Paragrafo>
            {children}
        </Paragrafo>
    )
}

export default ParagrafoPadrao