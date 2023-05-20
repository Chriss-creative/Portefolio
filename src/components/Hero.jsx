import React from "react";
import { styled } from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const Title = styled.h1`
  font-size: 68px;
`;
const WhatWedo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Line = styled.img`
  height: 5px;
`;
const Subtitle = styled.h2`
  color: #ff127e;
  font-size: 30px;
`;
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;
const Button = styled.button`
  background-color: #ff127e;
  font-weight: 600;
  width: 150px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  border: none;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
`;
const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(28px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Innover. Réaliser. Résoudre.</Title>
          <WhatWedo>
            <Line src="./img/line.png"></Line>
            <Subtitle>Ce que je fais</Subtitle>
          </WhatWedo>
          <Desc>J'adore créer des expériences numériques délicieuses et humaines.</Desc>
          <Button>En apprendre d'avantage</Button>
        </Left>
        <Right>
          {/* 3d model */}
          <Img src="./img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
