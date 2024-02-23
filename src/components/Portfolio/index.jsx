import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imagesData from './cards.json';
import styled from 'styled-components';
import ModalOverlay from '../Modal';


const PortfolioTitulo = styled.h2`
   text-align: center;
 `;


const ImgCarousel = styled.img`
  height: 50vh;
  border: 1px solid #000;
  border-radius: 10px;
  width: 100vw;
  filter: brightness(100%) saturate(100%) drop-shadow(0 0 5px #220000cb) drop-shadow(0 0 10px #220000cb) drop-shadow(0 0 15px #220000cb);
  @media (min-width: 768px) {
      margin: 0 2em;
      width: auto;
    }
`;


function Portfolio() {

  const [modalOpen, setModalIsOpen] = useState(false)
  const [imagemClicada, setImagemClicada] = useState()

  function alteraAbertoFechado() {
    setModalIsOpen(!modalOpen)
  }

  const images = imagesData.map((item) => item.imagem);

  const settings = {
    autoplay: true,
    adaptiveHeight: true,
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
    pauseOnHover: true,
  };

  function armazenaImagemClicada(index) {
    setImagemClicada(imagesData[index])
    alteraAbertoFechado()
  }
  return (
    <section id='portfolio'>
      <PortfolioTitulo>PORTFÓLIO</PortfolioTitulo>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <ImgCarousel
              src={image}
              alt={`slide-${index}`}
              onClick={() => armazenaImagemClicada(index)
              }
            />
          </div>
        ))}
      </Slider>
      <ModalOverlay modalOpen={modalOpen} alteraAbertoFechado={alteraAbertoFechado} imagemClicada={imagemClicada}
      />
    </section>
  );
}

export default Portfolio;
