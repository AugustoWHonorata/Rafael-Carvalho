import Modal from "react-modal"
import styled from "styled-components";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    borderRadius: '20px',
    padding: '0 1em',
    marginTop: '3vh',
    maxHeight: '80vh',
    maxWidth: '90vw',
    border: '2px solid black',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '5'
  },
};

const BotaoFechar = styled.button`
    position: relative;
    margin-left: 90%;
    font-size: 3em;
    background-color: transparent;
    color: #000;
    border: none;
    cursor: pointer;
  `
const ImagemProps = styled.img`
    max-height: 45vh;
    max-width: 90vw;
    border-radius: 20px;
  `
const Titulo = styled.p`
  background-color: #ffffff;
  color: #747171;
  border: 1px solid #747171;
  font-size: 1.5em;
  font-weight: bold;
  padding: 1em 0;
`
const ButtonLink = styled.button`
  background-color: #747171;
  border: 1px solid #000;
  border-radius: 15px;
  padding: 1em;
  margin-bottom: 1em;
`

const LinkInstagram = styled.a`
  text-decoration: none;
  color: #ffffff;

  
`
function ModalOverlay({ modalOpen, alteraAbertoFechado, imagemClicada }) {

  // Modal.setAppElement('#root');
  return (
    <Modal isOpen={modalOpen} style={customStyles}>
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

export default ModalOverlay