import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import BurgerMenu from "../BurgerMenu";
import MenuAberto from "../MenuAberto";
import IconesRedes from "../IconesRedes";
import ModalOverlay from "../ModalOverlay";

const NavbarContainer = styled.div`
  border: 1px solid #000000d0;
  background: rgba(255, 255, 255, 0.478);
  backdrop-filter: blur(12.5px);
  position: sticky;
  top: 4px;
  width: 100vw;
  z-index: 3;
`;

const Nav = styled.nav`
  height: 8vh;
  display: flex;
  justify-content: flex-start;
  padding: 1em;
`;

const Menu = styled.div`
  ${({ MenuFoiClicado }) => !MenuFoiClicado && `display: none;`}
`;

const Navbar = () => {
  const [MenuFoiClicado, setMenuFoiClicado] = useState(false);  

  const updateMenu = () => {
    setMenuFoiClicado(!MenuFoiClicado);
  };

  const closeMenu = () => {
    setMenuFoiClicado(false);
  };

  return (
    <NavbarContainer>
      <Nav >
        <BurgerMenu onClick={updateMenu} MenuFoiClicado={MenuFoiClicado} />
        <IconesRedes />
      </Nav>
      <Menu MenuFoiClicado={MenuFoiClicado}>
        {MenuFoiClicado &&
          <ModalOverlay MenuFoiClicado={MenuFoiClicado} > 
            <MenuAberto closeMenu={closeMenu}  />
          </ModalOverlay>
        }
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
