import styled from "styled-components"

const Foto = styled.img`
    border: 2px solid #FFF;
    border-radius: 100%; 
    height: 90vw; 
    width: 90vw; 
    margin: 0 0 1em 0;
    object-fit: cover; 
       filter: brightness(100%) saturate(100%) drop-shadow(0 0 5px #220000cb) drop-shadow(0 0 10px #220000cb) drop-shadow(0 0 15px #220000cb);
    @media (min-width: 768px) {
        height: 40vw;
        width: 40vw;
    }
    @media (min-width: 1024px) {
        height: 50vh;
        width: 50vh;
    }
    `

function FotoRafael({src}){
    return(
        <Foto src={src}/>
    )
}

export default FotoRafael