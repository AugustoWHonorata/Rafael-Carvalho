import React, { useState } from "react";
import styled from "styled-components";
import ContainerPadrao from "../ElementosPadrao/ContainerPadrao";
import Modal from "./Modal";
import ContainerInputs from "./ContainerInputs";
import LabelInputs from "./LabelInputs";
import Inputs from "./Inputs";
import PedirOrcamentoButton from "./PedirOrcamentoButton";

const OrcamentoTitulo = styled.h3`
  color: #000;
  text-align: center;
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
  
  return (
    <section id="orcamento">
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
          <LabelInputs htmlFor="InputIdeia">Descreva a sua ideia brevemente:</LabelInputs>
          <Inputs
            id="InputIdeia"
            placeholder="Envie uma imagem de referência na conversa caso houver."
            type="text"
            onBlur={(e) => setIdeia(e.target.value)} />
          <LabelInputs htmlFor="InputTamanho">Insira o tamanho aproximado em cm:</LabelInputs>
          <Inputs
            id="InputTamanho"
            placeholder="Apenas número, não precisa ser exato."
            type="number"
            onBlur={(e) => setTamanho(e.target.value)} />
          <PedirOrcamentoButton onClick={openModal}>Pedir Orçamento</PedirOrcamentoButton>
        </ContainerInputs>

        {isModalOpen && <Modal closeModal={closeModal} handleOkButtonClick={handleOkButtonClick}/>}
      </ContainerPadrao>
    </section>

  );
}

export default Orcamento;
