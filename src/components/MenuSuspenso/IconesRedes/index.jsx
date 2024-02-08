import styled from "styled-components";
import IconeMenu from "../IconeConfig";

const UlIconesRedes = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5vw;
  margin-left: auto;
`;

const LiIconesRedes = styled.li`
  list-style: none;
`;

function IconesRedes() {
  return (
    <UlIconesRedes>
      <LiIconesRedes><IconeMenu src='/imagens/icones/whatsapp-svg.svg' /></LiIconesRedes>
      <LiIconesRedes><IconeMenu src='/imagens/icones/instagram-svg(1).svg' /></LiIconesRedes>
    </UlIconesRedes>
  )
}

export default IconesRedes