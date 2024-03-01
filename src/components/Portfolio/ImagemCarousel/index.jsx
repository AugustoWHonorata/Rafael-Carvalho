import styled from "styled-components";

const Imagem = styled.img`
  height: 50vh;
  border: 1px solid #000;
  border-radius: 10px;
  margin: 0 2em;
  width: 100vw;
  filter: brightness(100%) saturate(100%) drop-shadow(0 0 5px #220000cb) drop-shadow(0 0 10px #220000cb) drop-shadow(0 0 15px #220000cb);
  @media (min-width: 768px) {
      margin: 0 2em;
      width: auto;
    }
`;


function ImagemCarousel({src}){
    return (
        <Imagem src={src} />
    )
}

export default ImagemCarousel