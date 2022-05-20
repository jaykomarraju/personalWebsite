import React from 'react'
import styled from 'styled-components'
import AboutBody from '../components/AboutBody'
import HomeBody from '../components/HomeBody'
import Navbar from '../components/Navbar'
import ProjectsBody from '../components/ProjectsBody'
import ResumeBody from '../components/ResumeBody'
import SkillsBody from '../components/SkillsBody'



const Home = () => {
  return (
    <div id="#home">
        <Navbar/>
        <HomeBody/>
        <AboutBody/>
        <ProjectsBody/>
        <SkillsBody/>
        <ResumeBody/>
    </div>
  )
}

export default Home