import styled from "styled-components"

const Div = styled.div`
  @media (min-width: 768px) {
        display: flex;
        align-items: center;
        gap: 5%;
        justify-content: space-around;
        padding: 0 1.5em;
    }
  @media (min-width: 1024px){
    padding: 0 2em;
  }
`

function DivDesktop({children}){
    return(
        <Div>
            {children}
        </Div>
    )
}

export default DivDesktop