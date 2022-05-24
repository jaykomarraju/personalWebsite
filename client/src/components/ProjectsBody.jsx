import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width:100vw;
// height:100vh;
display:flex;
flex-direction:column;`

const Heading =styled.p`
font-size:50px;
text-align:center;
padding-top:50px;
`

const ProjectGrid = styled.div`
display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  margin: auto;
`

const Project = styled.div`
border:1.5px solid black;
width:90%;
height:70%;
margin:35px;
padding:10px;
align-items:center;
display:flex;
flex-direction:column;
justify-content:center;
border-radius:20px;`

const Head = styled.p`
padding:5px;
font-size:20px;`

const Head2 = styled.p`
margin-top:-25px;`

const Thumbnail = styled.img`
width:350px;
height:200px;`

const GitButton = styled.button`margin:15px;
background-color:white;
padding:5px;
border:1.5px solid black;
border-radius:8px;
font-size:17px;
cursor:pointer; `

const ProjectsBody = () => {
  return (
    <Container id="#projects">
        <Heading>
            Projects
        </Heading>
        <ProjectGrid>
        <a href="https://www.buyananswer.com">
            <Project>
                <Head>BUYANANSWER.COM</Head>
                <Head2><i>Current Project (Founder)</i></Head2>
                <Thumbnail src={require('../assets/buyananswer.png')}></Thumbnail>
                {/* <GitButton>PRIVATE GITHUB (CONTACT FOR REPO ACCESS)</GitButton> */}
            </Project>
            </a>
            <a href="https://github.com/jaykomarraju/ontecha.git">
            <Project>
                <Head>ONTECHA</Head>
                <Thumbnail src={require('../assets/ontecha.png')}></Thumbnail>
                <GitButton>VIEW GITHUB</GitButton>
            </Project></a>
            <a href="https://github.com/jaykomarraju/hundreddollarart.git">
            <Project>
                <Head>HUNDREDDOLLARART.COM</Head>
                <Thumbnail src={require('../assets/hundreddollarart.png')}></Thumbnail>
                <GitButton>VIEW GITHUB</GitButton>
            </Project></a>
            <a href="https://github.com/jaykomarraju/expense-tracker.git">
            <Project>
                <Head>EXPENSE TRACKER</Head>
                <Thumbnail src={require('../assets/expense.png')}></Thumbnail>
                <GitButton>VIEW GITHUB</GitButton>
            </Project></a>
        </ProjectGrid>
    </Container>
  )
}

export default ProjectsBody