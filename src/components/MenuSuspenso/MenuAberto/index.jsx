import styled from "styled-components"

const OpcoesMenuAberto = ["PORTFÓLIO", "ORÇAMENTO", "QUEM SOU EU", "CUIDADOS PRÉ E PÓS", "MINHA PRIMEIRA TATTO", "POR QUE FAZER OLD SCHOOL"]

const MenuUl = styled.ul`
    background-color: #00000079;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 4px;
    backdrop-filter: blur(10px);
    align-self: start;
`
const MenuLi = styled.li`
    background-color: #000000a4;
    backdrop-filter: blur(20px);
    border: 1px #FFF solid;
    border-radius: 10px;
    color: #FFF;
    letter-spacing: 8px;
    list-style: none;
    text-align: center;
    padding: 5vw;
`

function MenuAberto() {
    return (
        <MenuUl>
            {OpcoesMenuAberto.map((opcao, index) => (
                <MenuLi key={index}>{opcao}</MenuLi>
            ))}
        </MenuUl>
    )
}

export default MenuAberto