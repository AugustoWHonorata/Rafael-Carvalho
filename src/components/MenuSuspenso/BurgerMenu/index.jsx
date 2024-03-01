// BurgerMenu.js
import React from "react";
import styled from "styled-components";

const BurgerMenuContainer = styled.div`
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 5vh;
  margin: auto 0;
  justify-content: space-between;
  @media (min-width: 768px) {
        height: 5vh;
    }
`;

const BurgerBar = styled.div`
  width: 14vw;
  height:1vh;
  background-color: rgb(0, 0, 0);
  border-radius: 0.5em;
  @media (min-width: 768px) {
        width: 8vh;
    }
  &:nth-child(1) {
    ${({ MenuFoiClicado }) =>
      MenuFoiClicado &&
      `
        transform: rotate(45deg) translate(0.75em, 1.25em);
        transition: ease-out 0.5s;
      `}
  }

  &:nth-child(2) {
    ${({ MenuFoiClicado }) =>
      MenuFoiClicado &&
      `
        transform: scale(0.1);
        transition: ease-out 0.5s;
      `}
  }

  &:nth-child(3) {
    ${({ MenuFoiClicado }) =>
      MenuFoiClicado &&
      `
        transform: rotate(135deg) translate(-0.5em, 1em);
        transition: ease-out 0.5s;
      `}
  }

  ${({ MenuFoiClicado }) =>
    !MenuFoiClicado &&
    `
      transform: rotate(0) translate(0);
      transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
    `}
`;

const BurgerMenu = ({ MenuFoiClicado, onClick }) => {
  return (
    <BurgerMenuContainer onClick={onClick}>
      <BurgerBar MenuFoiClicado={MenuFoiClicado}></BurgerBar>
      <BurgerBar MenuFoiClicado={MenuFoiClicado}></BurgerBar>
      <BurgerBar MenuFoiClicado={MenuFoiClicado}></BurgerBar>
    </BurgerMenuContainer>
  );
};

export default BurgerMenu;
