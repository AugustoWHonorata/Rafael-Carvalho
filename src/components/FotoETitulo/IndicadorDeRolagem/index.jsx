import React from "react";
import styled from "styled-components";

const Indicador = styled.div`
    animation: arrowBounce 2s infinite;
    align-items: center;
    border: 2px solid #000000;
    border-radius: 50%;
    display: flex;
    height: 5vh;
    justify-content: center;
    margin: 1em 0 0 0;
    padding: 0.5em; 
    transform: translateX(-50%);
    transition: opacity 0.5s ease;
    width: 5vh;

    &:after {
        content: '';
        border-left: 2px solid #000000;
        border-bottom: 2px solid #000000;
        height: 10px;
        transform: rotate(-45deg);
        width: 10px;
    }
    @keyframes arrowBounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }
`;

const IndicadorDeRolagem = ({ handleScroll }) => {
    const handleClick = () => {
        if (handleScroll) {
          handleScroll();
        }
      };
    return (
        <Indicador  onClick={handleClick} />
    );
};

export default IndicadorDeRolagem;
