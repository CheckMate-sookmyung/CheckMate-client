import React, { useState } from 'react';
import styled from 'styled-components';
import Navigator from '../navigator';

export default function BackgroundPage(props) {
  return (
    <Container>
      <Navigator />
      <Background>
        <BodyWrapper>
          <Title>{props.title}</Title>
        </BodyWrapper>
        <FormWrapper>
          <ContentsWrapper>{props.contents}</ContentsWrapper>
        </FormWrapper>
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
  height: 85vh;
  bottom: 20px;
  background-color: white;
  transform: translate(0, -50px);
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0px;
`;

// 아래로 삭제햣

const FormItem = styled.div`
  margin-bottom: 30px;
`;

const PrimaryText2 = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const PrimaryText = styled(PrimaryText2)`
  margin-bottom: 20px;
`;

const PrimaryInput = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 4px;
  border: 1px solid #ccc;
  padding-left: 15px;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;

const ContentInput = styled.textarea`
  width: 800px;
  height: 260px;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding-top: 15px;
  padding-left: 15px;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const ChoiceButton = styled.input.attrs({ type: 'file', id: 'ChoiceButton' })`
  display: none;
`;

const ChoiceButtonLabel = styled.label.attrs({ htmlFor: 'ChoiceButton' })`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1f5fa9;
  border-radius: 4px;
  border: 1px solid #1f5fa9;
  background-color: white;
  width: 181px;
  height: 50px;
  cursor: pointer;
`;

const TwoBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Preview = styled.button`
  color: white;
  border-radius: 4px;
  border: none;
  background-color: #1f5fa9;
  width: 70px;
  height: 24px;
  cursor: pointer;
`;

const GrayBox = styled.div`
  display: flex;
  align-items: center;
  width: 800px;
  height: 80px;
  background-color: #f9f9f9;
`;

const MailCheck = styled.input.attrs({ type: 'checkbox' })`
  width: 24px;
  height: 24px;
  margin: 20px;
  background-color: white;
  cursor: pointer;
`;

const MailAgree = styled.p`
  font-weight: 500;
  font-size: 16px;
`;

const BlueButton = styled.button`
  font-size: 18px;
  color: white;
  border-radius: 10px;
  background-color: #0a2c83;
  border: none;
  width: 181px;
  height: 56px;
  margin-bottom: 50px;
  cursor: pointer;
`;
