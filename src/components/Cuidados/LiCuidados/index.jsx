import styled from "styled-components";

const Li = styled.li`
  color: #000;
  padding: 1em;
  font-size: 1.5em;
  font-style: italic ;
  list-style: none;
  border-bottom: 1px solid black;
  @media (min-width: 1024px) {
        font-size: 2em;
    }
`


function LiCuidados({children}) {
    return(
        <Li>
            {children}
        </Li>
    )
}

export default LiCuidados