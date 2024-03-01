import styled from "styled-components";
import IconeMenu from "../IconeMenu";

const UlIconesRedes = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5vw;
  margin-left: auto; 
  @media (min-width: 768px) {
       gap: 0;
    }
`;

const LiIconesRedes = styled.li`
  list-style: none;
`;

function IconesRedes() {
  return (
    <UlIconesRedes>
      <LiIconesRedes>
        <a href="https://wa.me/5548988591897?text=Olá%20vim%20pelo%20site" aria-label="Chamar no WhatsApp" target="_blank" rel="noopener noreferrer">
          <IconeMenu src='/imagens/icones/whatsapp.svg' />
        </a>
      </LiIconesRedes>
      <LiIconesRedes>
        <a href="https://www.instagram.com/rafaelcarvalhoink/" aria-label="Acessar instagram" target="_blank" rel="noopener noreferrer">
          <IconeMenu src='/imagens/icones/instagram.svg' />
        </a>
      </LiIconesRedes>
      <LiIconesRedes>
        <a href="mailto:rafaelcarvalhoink@gmail.com?subject=Assunto do email&cc=rafaelcarvalhoink@gmail.com&bcc=rafaelcarvalhoink@gmail.com&body=Olá gostaria de fazer um orçamento" aria-label="Enviar email" target="_blank" rel="noopener noreferrer">
          <IconeMenu src='/imagens/icones/email.svg' />
        </a>
      </LiIconesRedes>
    </UlIconesRedes>
  );
}

export default IconesRedes;
