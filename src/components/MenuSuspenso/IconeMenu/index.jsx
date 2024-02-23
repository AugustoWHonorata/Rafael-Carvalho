import styled from "styled-components";

const IconeImgMenu = styled.img`
  height: 50%;
  width: 10vw;
  cursor: pointer;
  @media (min-width: 768px) {
        height: 5vh;
    }
`;

function IconeMenu(props){
    return(
        <IconeImgMenu src={props.src} onClick={props.onClick}/>
    )
}

export default IconeMenu