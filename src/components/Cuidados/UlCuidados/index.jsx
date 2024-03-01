import styled from "styled-components";

const Ul = styled.ul`
    text-align: center;
    margin-bottom: 1em;
    
`

function UlCuidados({children}) {
    return(
        <Ul>
            {children}
        </Ul>
    )
}

export default UlCuidados