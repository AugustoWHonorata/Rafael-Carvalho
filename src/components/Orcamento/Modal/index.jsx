import styled from "styled-components";
import ContainerInputs from "../ContainerInputs";
import PedirOrcamentoButton from "../PedirOrcamentoButton";


const ModalOverlay = styled.div`
  position: fixed;
  color: #FFF;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

const ModalContainer = styled.div`
  border: 1px solid #ffffff;
  border-radius: 20px;
  background: transparent;
  backdrop-filter: blur(20px);
  font-size: 1.5em;
  padding: 2em;
  width: 60vw;
`;

const OkButton = styled.button`
  background: rgba(217, 217, 217, 0.20);
  border: 1px solid #fff;
  border-radius: 20px;
  box-shadow: 4px 4px 10px black;
  color: #fff;
  cursor: pointer;
  font-style: italic;
  font-weight: bold;
  margin-top: 1em;
  padding: 0.5em 3em;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 1.5em;
  margin-bottom: 1em;
  position: absolute;
  right: 1em;
  top: 1em;
`
const PerguntaEnviar = styled.p`
  margin: 2em 0 1em 0;
  text-align: center;
  color: #FFF;
`


const Modal = ({ closeModal, handleOkButtonClick }) => {
    return (
        <ModalOverlay onClick={closeModal}>
            <ModalContainer>
                <CloseButton onClick={closeModal}>X</CloseButton>
                <PerguntaEnviar>Vamos enviar esse pedido via WhatsApp. Ok?</PerguntaEnviar>
                <OkButton onClick={handleOkButtonClick}>Ok</OkButton>
            </ModalContainer>
        </ModalOverlay>
    );
};

export default Modal;