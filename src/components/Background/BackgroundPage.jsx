import React from 'react';
import styled from 'styled-components';

export default function BackgroundPage({ title, children }) {
  return (
    <Container>
      <Background>
        <BodyWrapper>
          <Title>{title}</Title>
        </BodyWrapper>
        <FormWrapper>{children}</FormWrapper>
      </Background>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Background = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  min-height: 100vh;
  /* padding-top: 80px; */
`;

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 100%;
  background: linear-gradient(to right, #0a2c83, #1f5fa9);
`;

const Title = styled.p`
  display: flex;
  color: white;
  font-size: 2.5vw;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 80vw;
  height: 1200px;
  bottom: 20px;
  background-color: white;
  transform: translate(0, -50px);
`;
