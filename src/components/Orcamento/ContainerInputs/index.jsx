import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  border-radius: 20px;
  border: 1px solid #000;
  background: transparent;
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  gap: 0.5em;
  justify-content: center;
  padding: 3vh 6vw;
  text-align: center;
  width: 80vw;
  @media (min-width: 768px) {
        font-size: 2.5em;
        width: 60%;
        padding: 2vh 3vw;
    }
`;


function ContainerInputs({children}){
    return(
        <Container>
            {children}
        </Container>
    )
}

export default ContainerInputs