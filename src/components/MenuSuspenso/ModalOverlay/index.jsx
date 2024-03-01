import React from 'react'
import styled from 'styled-components'

const ModalDiv = styled.div`
    background: rgba(0,0,0,0.6);
    display: ${p => p.block && p.block};
    height:100vh;
    left:0;
    position: fixed;
    top: 8vh + 4px;
    width: 100vw;
    z-index: 3;
`


function ModalOverlay  (
    {
        children,
        menuFoiClicado,
        alturaNavbar 
    }
) {
    return (
        <ModalDiv block={menuFoiClicado ? "block" : "none"} alturaNavbar={alturaNavbar}>
            {children}              
        </ModalDiv>
    )
}

export default ModalOverlay