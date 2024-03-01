import Modal from "react-modal"
import styled, { keyframes } from "styled-components";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    borderRadius: '20px',
    padding: '0px 1em 1em',
    marginTop: '5vh',
    maxHeight: '80vh',
    maxWidth: '90vw',
    border: '2px solid black',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '5px 5px 8px gray',
    overflowY: 'hidden'
  },
};

const BotaoFechar = styled.button`
    background-color: transparent;
    border: none;
    color: #000;
    cursor: pointer;
    font-size: 2.5em;
    margin-left: 95%;
    margin-top: 0;
    position: relative;
  `
const ImagemProps = styled.img`
    border-radius: 20px;
    box-shadow: 5px 5px 8px gray;
    max-height: 45vh;
    width: 85vw;
    @media (min-width: 768px){
      max-height: 45vh;
      width: 50vw;
    }
    @media (min-width: 1024px){
      max-height: 55vh;
      width: 35vw;
    }

    
  `
const Titulo = styled.p`
  background-color: #747474;
  color: #ffffff;
  border: 1px solid #000;
  font-size: 1.5em;
  font-weight: bold;
  padding: 1em;
  box-shadow: 5px 5px 8px gray;

`

const circleInCenter = keyframes`
 from {
    clip-path: circle(0%);
  }
  to {
    clip-path: circle(125%);
    transform: scale(1.1);
  }
`;

const ButtonLink = styled.button`
  background: #FFF;
  box-shadow: 5px 5px 8px gray;
  border: 1px solid #000;
  border-radius: 15px;
  padding: 1em;
  margin-bottom: 1em;
  transition: 1s;
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) ${circleInCenter} infinite;
  &:hover{
    background-color: #000;
    transform: scale(1.05);
  }

`

const LinkInstagram = styled.a`
  text-decoration: none;
  color: #747474;
  font-size: 1.3em;
  font-weight: bold;

  &:hover{
    color: #FFF;
  }
`
function ModalPortfolio({ modalOpen, alteraAbertoFechado, imagemClicada }) {

  Modal.setAppElement('#root');
  return (
    <Modal isOpen={modalOpen} style={customStyles} shouldCloseOnEsc={true} onRequestClose={alteraAbertoFechado} >
      <BotaoFechar onClick={alteraAbertoFechado}>x</BotaoFechar>
      {imagemClicada &&
        <div>
          <ImagemProps src={imagemClicada.imagem} alt="Imagem" />
          <Titulo>{imagemClicada.titulo}</Titulo>
          <ButtonLink><LinkInstagram href={imagemClicada.linkInstagram} target="_blank"> Veja melhor essa obra!</LinkInstagram></ButtonLink>
        </div>
      }
    </Modal>
  )
}

export default ModalPortfolio