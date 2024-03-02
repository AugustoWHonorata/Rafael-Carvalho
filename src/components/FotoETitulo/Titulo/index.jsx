import styled from "styled-components";

const TituloNome = styled.h1`
    font-size: 3em;
    text-align: center;
    padding: 0.5rem; 
    margin: 0;
    color: #000;
    @media (min-width: 1024px) {
        font-size: 7em;
    }
`

function Titulo({children}){
    return(
        <TituloNome>
            {children}
        </TituloNome>
    )
}

export default Titulo