import React, { useState } from "react";
import styled from "styled-components";
import ContainerPadrao from "../ContainerPadrao";

const OrcamentoTitulo = styled.h3`
  color: #000;
  font-size: 8vw;
  letter-spacing: 8px;
  text-align: center;
  text-shadow: 0px 0px 5px red;
  -webkit-text-stroke: 2px white;
`;

const ContainerInputs = styled.div`
  align-items: center;
  border-radius: 20px;
  border: 1px solid #000;
  background: rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(12.5px);
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  justify-content: center;
  padding: 2vw 4vw;
  text-align: center;
  width: 85vw;
`;

const LabelInputs = styled.label`
  color: #FFF;
  font-family: "Krona One";
  font-size: 1rem;
  left: 0;
  letter-spacing: 4px;
  margin: 0.8rem 0;
  position: relative;
  align-self: start;
`;

const Inputs = styled.input`
  border: 1px solid #fff;
  border-radius: 80px;
  background: rgba(217, 217, 217, 0.20);
  height: 5vh;
  width: 90%;
  padding: 1.5vh;
  color: #ffffff9f;
  font-style: italic;

  &::placeholder {
    color: #ffffff9f;
    font-style: italic;
  }

`;

const PedirOrcamentoButton = styled.button`
  background: rgba(217, 217, 217, 0.20);
  border: 1px solid #fff;
  border-radius: 80px;
  color: #ffffff9f;
  font-style: italic;
  margin-top: 2em;
  padding: 1.5vh;
  cursor: pointer;
  width: 60%;
`;

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
`;

const ModalContainer = styled(ContainerInputs)`
  width: 60vw;
`;

const OkButton = styled(PedirOrcamentoButton)`
  margin-top: 1em;
`;

function Orcamento() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [ideia, setIdeia] = useState("");
  const [tamanho, setTamanho] = useState("");
  
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOkButtonClick = () => {
    const formData = {
      nome,
      ideia,
      tamanho,
    };
    const mensagem = `Olá%20me%20chamo%20${formData.nome}.%0ATenho%20interesse%20em%20fazer:%20${formData.ideia}.%0AAproximadamente:%20${formData.tamanho}%20cm`;

  // Criando o link do WhatsApp
    const numeroTelefone = '48988591897';
    const linkWhatsApp = `https://wa.me/55${numeroTelefone}?text=${mensagem}`;
    window.open(linkWhatsApp, '_blank')
    
    closeModal();
  };
  const CloseButton = styled.button`
  position: absolute;
  top: 1em;
  right: 1em;
  background: none;
  border: none;
  font-size: 1.5em;
  color: #ffffff9f;
  cursor: pointer;
`;
  return (
    <ContainerPadrao>
      <OrcamentoTitulo>FAÇA UM ORÇAMENTO</OrcamentoTitulo>
      <ContainerInputs>
        <LabelInputs htmlFor="InputNome">Nome:</LabelInputs>
        <Inputs 
            id="InputNome" 
            placeholder="Nome e um Sobrenome." 
            type="text" 
            onBlur={(e) => setNome(e.target.value)}
            />
        <LabelInputs htmlFor="InputIdeia">Descreva a sua ideia:</LabelInputs>
        <Inputs 
            id="InputIdeia" 
            placeholder="Diga brevemente o que tem em mente." 
            type="text" 
            onBlur={(e) => setIdeia(e.target.value)}/>
        <LabelInputs htmlFor="InputTamanho">Insira o tamanho aproximado em cm:</LabelInputs>
        <Inputs 
          id="InputTamanho" 
          placeholder="Apenas número, não precisa ser exato." 
          type="number"
          onBlur={(e) => setTamanho(e.target.value)} />
        <PedirOrcamentoButton onClick={openModal}>Pedir Orçamento</PedirOrcamentoButton>
      </ContainerInputs>

      {/* Modal */}
      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContainer>
            <CloseButton onClick={closeModal}>X</CloseButton>
            <LabelInputs>Vamos enviar esse pedido via WhatsApp. Ok?</LabelInputs>
            <OkButton onClick={handleOkButtonClick}>Ok</OkButton>
          </ModalContainer>
        </ModalOverlay>
      )}
    </ContainerPadrao>
  );
}

export default Orcamento;
