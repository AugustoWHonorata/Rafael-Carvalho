import styled from "styled-components";

const Titulo = styled.h6`
  color: #000;
  text-align: center;
  margin-top: 1em;
  margin-bottom: 1em;
`

function TituloTipo({children}){
    return(
        <Titulo>
            {children}
        </Titulo>
    )
}

export default TituloTipo