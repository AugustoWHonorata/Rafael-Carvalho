import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #ffffff6b;
  border-top: 5px solid #00000075;
  backdrop-filter: blur(20px);
  color: #000;
  font-weight: bold;
  font-size: 1.5em;
  margin-top: 3em;
  padding: 1em 0;
  text-align: center;
  width: 100%;
`;

const CopyrightSymbol = styled.span`
  font-size: 1.2rem;
  margin-right: 5px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <CopyrightSymbol>&copy;</CopyrightSymbol>
      Rafael Carvalho Ink 2024
    </FooterContainer>
  );
};

export default Footer;
