import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ContainerPadrao from "../ContainerPadrao";
import Modal from "react-modal";

// Importa os dados do arquivo cards.json
import cardsData from "./cards.json";

const CardContainer = styled.div`
  display: flex;
  gap: 11px;
  overflow: hidden;
  margin: 0 auto;
  transition: transform 0.5s ease;
`;

const PortfolioTitulo = styled.h2`
  font-size: 10vw;
  color: #000;
  text-shadow: 0px 0px 5px red;
  -webkit-text-stroke: 2px white;
  letter-spacing: 8px;
`;

const CardPortfolio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 31px;
  border: 2px solid #000;
  background: rgba(255, 255, 255, 0.512);
  backdrop-filter: blur(4px);
  height: 11.5rem; 
  overflow: hidden;
  width: 33vw;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;

const ImgCard = styled.img`
  width: 100%;
  height: 80%; /* Ajuste a altura da imagem conforme necessário */
  border-radius: 31px 31px 0 0;
`;

const DescricaoCard = styled.p`
  color: #000;
  text-align: center;
  font-weight: 800;
  font-size: 1rem;
`;

// Estilização para a modal
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalImg = styled.img`
  width: 100%;
  max-height: 300px;
  border-radius: 31px 31px 0 0;
`;

const ModalDescricao = styled.p`
  color: #000;
  text-align: center;
  font-weight: 800;
  font-size: 1rem;
`;

function Portfolio() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentPosition, setCurrentPosition] = useState(0);

  const openModal = (card) => {
    setSelectedCard(card);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Atualiza a posição do carrossel a cada segundo
      setCurrentPosition((prevPosition) =>
        prevPosition + 1 >= cardsData.length ? 0 : prevPosition + 1
      );
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <ContainerPadrao>
      <PortfolioTitulo>PORTFÓLIO</PortfolioTitulo>
      <CardContainer style={{ transform: `translateX(-${currentPosition * 33}vw)` }}>
        {cardsData.map((card, index) => (
          <CardPortfolio key={index} onClick={() => openModal(card)}>
            <ImgCard src={card.imagem} alt={card.descricao} />
            <DescricaoCard>{card.descricao}</DescricaoCard>
          </CardPortfolio>
        ))}
      </CardContainer>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Detalhes do Card"
      >
        <ModalContent>
          <ModalImg src={selectedCard.imagem} alt={selectedCard.descricao} />
          <ModalDescricao>{selectedCard.descricao}</ModalDescricao>
        </ModalContent>
      </Modal>
    </ContainerPadrao>
  );
}

export default Portfolio;
