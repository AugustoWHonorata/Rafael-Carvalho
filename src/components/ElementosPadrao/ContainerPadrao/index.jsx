import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

function ContainerPadrao({children}) {
    return(

        <Container>
            {children}
        </Container>
    )
}

export default ContainerPadrao