// import React, { useState } from 'react';
// import styled from 'styled-components';
// import MenuAberto from './MenuAberto';
// import IconeMenu from './IconeConfig';
// import Modal from './Modal';

// const Navbar = styled.nav`
//   align-items: center;
//   background-color: #00000085;
//   border-radius: 10px;
//   backdrop-filter: blur(5px);
//   display: flex;
//   padding: 2px 6vw;
//   position: sticky;
//   justify-content: space-between;
//   margin: 0 auto;
//   height: 10vh;
//   top: 5px;
//   width: 80%;
//   z-index: 5;
// `;


// const MenuSuspenso = () => {
//   const [menuAberto, setMenuAberto] = useState(false);

//   const [iconeMenuSrc, setIconeMenuSrc] = useState('/imagens/icones/menu-aberto.png');

//   const handleIconeMenuClick = () => {
//     setMenuAberto(!menuAberto);
//     setIconeMenuSrc(menuAberto ? '/imagens/icones/menu-fechado.png' : '/imagens/icones/menu-aberto.png');
//   };

//   return (
//     <Navbar>
//       <IconeMenu src={iconeMenuSrc} onClick={handleIconeMenuClick} />
//       {menuAberto && (
//         <Modal>
//           <MenuAberto />
//         </Modal>
//       )}
//     </Navbar>
//   );
// };

// export default MenuSuspenso;
