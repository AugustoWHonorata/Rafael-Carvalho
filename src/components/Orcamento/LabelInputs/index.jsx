import styled from "styled-components";

const Label = styled.label`
  align-self: start;
  color: #000;
  font-family: "Krona One";
  left: 0;
  letter-spacing: 4px;
  margin: 0.8rem 0;
  position: relative;
  text-align: start;
  
`;

function LabelInputs({children}){
    return(
        <Label>
            {children}
        </Label>
    )
}

export default LabelInputs