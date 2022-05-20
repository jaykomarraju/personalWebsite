import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width:100vw;
height:100vh;`

const Heading =styled.p`
font-size:50px;
text-align:center;
padding-top:130px;
`

const Content = styled.div`
display:flex;
align-items:center;
justify-content:center;
`

const Picture = styled.img`
width:300px;
height:300px;`

const ContentText = styled.p`
width:800px;
padding:35px;
font-size:20px;`

const AboutBody = () => {
  return (
    <Container id="#about">
        <Heading>
            Who am I?
        </Heading>
        <Content>
            <Picture src={require('../assets/Picture.png')}></Picture>
            <ContentText>
                I'm a senior @ UNC Chapel Hill studying computer science. I'm passionate about building scalable technologies that impact the daily lives of users. I consider myself to be a growth engineer and spent most of my time understanding how to grow users and revenue tech products. I'm technically proficient in React, Python, Node.<b> My preferred tech stack is MERN.</b>  I also produce music. I've been a part of an alt rock band in high school and ever since, I couldn't leave music behind. Today, I love making beats and creating hooks. I also spend a lot of time trying to understand the workings of the music industry and how to break as an artist. Though I don't plan on pursuing music as a career, I would love to spot and give opportunties young talented artists. <b>Art and technology are the 2 main driving forces in my life. </b> My mind acts as an duality between creativity and reason.
            </ContentText>
        </Content>
    </Container>
  )
}

export default AboutBody