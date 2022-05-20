import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
position:relative;
width:100vw;
height:100vh;
display:flex;
justify-content:center;
margin-top:10%;`

const Centered = styled.div`
width:650px;
position: absolute;
`


const MainParagraph = styled.p`
font-weight:400;
font-size:40px;`


const HomeBody = () => {
  return (
    <Container>
        <Centered>
        <MainParagraph>
            ~ Hello, I'm Jay Komarraju. I love engineering <b>software products and producing music</b>.
        </MainParagraph>
        </Centered>
    </Container>
  )
}

export default HomeBody