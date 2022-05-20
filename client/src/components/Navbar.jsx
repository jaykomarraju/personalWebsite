import React from "react";
import styled from "styled-components";
import {Link} from 'react-scroll';

const Container = styled.div`
  height: 60px;
  padding-bottom: 25px;
  
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position:fixed;
  width:100vw;
  background:white;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
`;


const Center = styled.div`
  flex: 1;
  text-align: center;
  align-items: center;
`;

const LogoText = styled.h1`
  font-weight: 400;
  cursor:pointer;
  font-size: 27px;
`;


const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right:50px;
`;

const MenuItem = styled.div`
  font-size: 17px;
  cursor: pointer;
  margin: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
        <Link to="#about" smooth={true}>
          <MenuItem>ABOUT ME</MenuItem>
          </Link>
          <Link to="#projects" smooth={true}>
          <MenuItem>PROJECTS</MenuItem>
          </Link>
        </Left>
        <Center>
        <Link to="#home" smooth={true}>
          <LogoText>JAY KOMARRAJU</LogoText></Link>
        </Center>
        <Right>
        <Link to="#skills" smooth={true}>
          <MenuItem>CORE SKILLS</MenuItem>
          </Link>
          <Link to="#resume" smooth={true}>
          <MenuItem>RESUME</MenuItem></Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
