import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imagesData from './cards.json';
import styled from 'styled-components';
import ModalPortfolio from './ModalPortfolio';
import ImagemCarousel from './ImagemCarousel';


const PortfolioTitulo = styled.h2`
   text-align: center;
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
    arrows: false,
    autoplaySpeed: 4000,
    centerMode: true,
    dots: false,
    infinite: true,
    initialSlide: 0,
    pauseOnHover: false,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    waitAnimation: true,
    responsive: [     
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
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
            <ImagemCarousel
              src={image}
              alt={`slide-${index}`}
              onClick={() => armazenaImagemClicada(index)
              }
            />
          </div>
        ))}
      </Slider>
      <ModalPortfolio modalOpen={modalOpen} alteraAbertoFechado={alteraAbertoFechado} imagemClicada={imagemClicada}
      />
    </section>
  );
}

export default Portfolio;
