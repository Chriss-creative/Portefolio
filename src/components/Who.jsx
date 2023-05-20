import React from "react";
import { styled } from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
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
  width: 120px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  border: none;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>{/* 3d model */}</Left>
        <Right>
          <Title>Pensez en dehors de l'espace carré</Title>
          <WhatWedo>
            <Line src="./img/line.png"></Line>
            <Subtitle>Ce que je fais</Subtitle>
          </WhatWedo>
          <Desc>Pensez en dehors de l'espace carré</Desc>
          <Button>Voir mon travail</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
