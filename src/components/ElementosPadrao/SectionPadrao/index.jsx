import styled from "styled-components"

const Section = styled.section`
  height: 100vh;
  margin: 2em 0;
`

function SectionPadrao({children}) {
    return (
        <Section>
            {children}  
        </Section>
    )
}

export default SectionPadrao