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

const Skillset = styled.div`
width:70%;
text-align:center;
margin-left:15%;
`

const Skill = styled.div`
display:flex;
justify-content:space-between;
font-size:20px;
padding:20px;`

const Name = styled.div``

const Level = styled.div``

const SkillsBody = () => {
  return (
    <Container>
        <Heading id="#skills">Core Skills</Heading>
        <Skillset>
            <Skill>
                <Name>
                <b>Python</b>
                </Name>
                <Level>
                4.5/5
                </Level>
            </Skill>
            <Skill>
                <Name>
                <b>Java</b> (Taught in most classes at college)
                </Name>
                <Level>
                4.8/5
                </Level>
            </Skill>
            <Skill>
                <Name>
                <b>TypeScript</b>
                </Name>
                <Level>
                4.5/5
                </Level>
            </Skill>
            <Skill>
                <Name>
                <b>React</b>
                </Name>
                <Level>
                4.9/5
                </Level>
            </Skill>
            <Skill>
                <Name>
                <b>Node</b>
                </Name>
                <Level>
                4.9/5
                </Level>
            </Skill>
            <Skill>
                <Name>
                <b>Swift</b>
                </Name>
                <Level>
                3/5
                </Level>
            </Skill>
            <Skill>
                <Name>
                <b>SQL</b>
                </Name>
                <Level>
                3/5
                </Level>
            </Skill>
        </Skillset>
    </Container>
  )
}

export default SkillsBody