import styled from "styled-components"


const ImgRafa = styled.img`
    border: 2px solid transparent;
    border-radius: 50px;
    height: 50vh;
    margin-bottom: 3em;
    filter: brightness(100%) saturate(100%) drop-shadow(0 0 5px #220000cb) drop-shadow(0 0 10px #220000cb) drop-shadow(0 0 15px #220000cb);
    @media (min-width: 768px) {
        height: auto;
        max-height: 90vh;
        width: 40%;
    }

`

function FotoQuemSouEu(){
    return(
        <ImgRafa src="/assets/FotoComTrofeu.jpeg"/>
    )
}

export default FotoQuemSouEu