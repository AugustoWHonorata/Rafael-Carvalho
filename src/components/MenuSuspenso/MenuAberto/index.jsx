import React from "react";
import styled from "styled-components";

const OpcoesMenuAberto = [
  { nome: "PORTFÓLIO", id: "portfolio" },
  { nome: "ORÇAMENTO", id: "orcamento" },
  { nome: "QUEM SOU EU", id: "quemSouEu" },
  { nome: "CUIDADOS PRÉ E PÓS", id: "cuidados" },
  { nome: "MINHA PRIMEIRA TATTO", id: "primeiraTatto" },
  { nome: "POR QUE FAZER OLD SCHOOL", id: "porqueoldSchool" }
];

const MenuUl = styled.ul`
  background-color: #0000009b;
  backdrop-filter: blur(20px);
  display: flex;
  position: absolute;
  flex-direction: column;
  @media (min-width: 768px) {
    background: none;
    height: auto;
  }
`;

const MenuLi = styled.li`
  background-color: #000000e1;
  border: 1px #fff solid;
  border-radius: 10px;
  backdrop-filter: blur(20px);
  color: #fff;
  letter-spacing: 8px;
  list-style: none;
  text-align: center;
  padding: 5vh;
  cursor: pointer;
  @media (min-width: 1024px) {
    font-size: 1em;
    width: 35vw;
  }
`;

const MenuAberto = ({ closeMenu}) => {
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };
  return (
    <MenuUl>
      {OpcoesMenuAberto.map((opcao, index) => (
        <MenuLi key={index} onClick={() => handleClick(opcao.id)}>
          {opcao.nome}
        </MenuLi>
      ))}
    </MenuUl>
  );
};

export default MenuAberto;
