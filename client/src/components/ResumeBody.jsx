import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:100vw;
    height:100vh;
`

const Heading =styled.p`
font-size:50px;
text-align:center;
padding-top:130px;
`

const ResumeBox = styled.div`
display:flex;
width:40%;
justify-content:space-between;
margin-left:30%;
margin-top:10%;
padding:30px;
border-radius:20px;
border:1.5px solid black;`

const Name = styled.p`
font-size:20px;`

const DownloadButton = styled.button`
    background:white;
    font-size:17px;
    border-radius:10px;
    border:none;
    font-weight:700;
`

const ResumeBody = () => {
  return (
    <Container id="#resume">
        <Heading>Resume</Heading>
        <ResumeBox>
            <Name>JAY_KOMARRAJU_RESUME.PDF</Name>
            
            <DownloadButton><a href='https://drive.google.com/file/d/1unUqKe2bHc9lTT4BpeoqjmfYXGw8UhIR/view?usp=sharing'>DOWNLOAD</a></DownloadButton>
        </ResumeBox>
    </Container>
  )
}

export default ResumeBody