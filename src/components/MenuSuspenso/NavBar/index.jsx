import React, { useState } from "react";
import styled from "styled-components";
import MenuAberto from '../MenuAberto';
import IconesRedes from '../IconesRedes'


const NavbarContainer = styled.div`
  border: 1px solid #000;
  background: rgba(0, 0, 0, 0.478);
  backdrop-filter: blur(12.5px);
  /* border-radius: 10px; */
  height: auto;
  position: sticky;
  top: 1px;
  width: 100%;
  z-index: 3;
`;

const Nav = styled.nav`
  height: 6%;
  display: flex;
  justify-content: flex-start;
  padding: 1em;
`;

const BurgerMenu = styled.div`
  width: 4em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  cursor: pointer;
`;

const BurgerBar = styled.div`
  width: 13vw;
  height: 1vh;
  background-color: rgb(240, 240, 240);
  border-radius: 0.5em;

  &:nth-child(1) {
    ${({ isMenuClicked }) =>
      isMenuClicked &&
      `
        transform: rotate(45deg) translate(0.75em, 1.25em);
        transition: ease-out 0.5s;
      `}
  }

  &:nth-child(2) {
    ${({ isMenuClicked }) =>
      isMenuClicked &&
      `
        transform: scale(0.1);
        transition: ease-out 0.5s;
      `}
  }

  &:nth-child(3) {
    ${({ isMenuClicked }) =>
      isMenuClicked &&
      `
        transform: rotate(135deg) translate(-0.5em, 1em);
        transition: ease-out 0.5s;
      `}
  }

  ${({ isMenuClicked }) =>
    !isMenuClicked &&
    `
      transform: rotate(0) translate(0);
      transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
    `}
`;

const Menu = styled.div`
  ${({ isMenuClicked }) => !isMenuClicked && `display: none;`}
`;

const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <NavbarContainer>
      <Nav>
        <BurgerMenu onClick={updateMenu}>
          <BurgerBar isMenuClicked={isMenuClicked}></BurgerBar>
          <BurgerBar isMenuClicked={isMenuClicked}></BurgerBar>
          <BurgerBar isMenuClicked={isMenuClicked}></BurgerBar>
        </BurgerMenu>
        <IconesRedes />
      </Nav>
      <Menu isMenuClicked={isMenuClicked}>
        {isMenuClicked && <MenuAberto/>}
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
