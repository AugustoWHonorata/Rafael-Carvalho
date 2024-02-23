import styled from "styled-components"

const DivComEfeito = styled.div`
  border-radius: 20px;
  border: 1px solid #000;
  background: transparent;
  backdrop-filter: blur(20px);
  padding: 1rem;
  margin: 0 auto;
  max-width: 90vw;
  text-align: center;
  @media (min-width: 768px) {
        width: 60%;
    }
`


function DivPadrao({children}){
    return(
        <DivComEfeito>
            {children}
        </DivComEfeito>
    )
}

export default DivPadrao