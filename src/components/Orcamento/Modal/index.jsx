import styled from "styled-components";
import ContainerInputs from "../ContainerInputs";
import PedirOrcamentoButton from "../PedirOrcamentoButton";


const ModalOverlay = styled.div`
  position: fixed;
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

const ModalContainer = styled(ContainerInputs)`
  width: 30vw;
`;

const OkButton = styled(PedirOrcamentoButton)`
  margin-top: 1em;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1em;
  right: 1em;
  background: none;
  border: none;
  font-size: 1.5em;
  color: #ffffff;
  cursor: pointer;
`
const PerguntaEnviar = styled.p`
  margin: 2em 0 1em 0;
  text-align: center;
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