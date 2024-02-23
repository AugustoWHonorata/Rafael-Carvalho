import styled from "styled-components";

const Button = styled.button`
  background: rgba(217, 217, 217, 0.20);
  border: 1px solid #000;
  border-radius: 80px;
  box-shadow: 4px 4px 10px black;
  color: #000;
  font-style: italic;
  font-weight: bold;
  margin-top: 2em;
  padding: 1.5vh;
  cursor: pointer;
  width: 60%;
  @media (min-width: 768px) {
      padding: 2vh 3vw;
      width: 60%;
    }
`;

function PedirOrcamentoButton({children, onClick}){
    return(
        <Button onClick={onClick}>
            {children}
        </Button>
    )
}


export default PedirOrcamentoButton