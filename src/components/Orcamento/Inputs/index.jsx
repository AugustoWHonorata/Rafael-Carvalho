import styled from "styled-components";

const InputsEstilo = styled.input`
  border: 1px solid #000;
  border-radius: 80px;
  background: rgba(217, 217, 217, 0.20);
  color: #000;
  font-style: italic;
  height: 5vh;
  padding: 1vw;
  padding-left: 4vw;
  width: 100%;
  transition: 1s;

  &::placeholder {
    color: #0000006a;
    font-style: italic;
    font-weight: bold;
    padding-left: 1vw;
  }

  &:focus {
    outline: none;
    border: 1px dotted #3626e2;
  }

  @media (min-width: 1024px) {
    padding-left: 1vw;
  }
`;

function Inputs({ id, type, onBlur, placeholder }) {
  
  return (
    <InputsEstilo
      id={id}
      placeholder={placeholder}
      type={type}
      onBlur={onBlur}
    />
  );
}

export default Inputs;
