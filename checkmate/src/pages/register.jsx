import React from "react";
import Navigator from "../components/navigator";
import styled from "styled-components";
import { type } from "@testing-library/user-event/dist/type";

export default function Register() {
  return (
    <Container>
      <Navigator />
      <Background>
        <BodyWrapper>
          <Title>행사 등록</Title>
        </BodyWrapper>
        <FormWrapper>
          <ContentsWrapper>
            <FormItem>
              <PrimaryText>행사명</PrimaryText>
              <PrimaryInput
                width='600px'
                height='56px'
                placeholder='행사명을 입력하세요.'
              />
            </FormItem>
            <FormItem>
              <PrimaryText>행사 설명</PrimaryText>
              <ContentInput placeholder='행사에 대해 설명해주세요.' />
            </FormItem>
            <FormItem>
              <PrimaryText>행사 일정</PrimaryText>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  width: "400px",
                }}
              >
                <PrimaryInput
                  width='400px'
                  height='56px'
                  placeholder='행사 일정 선택'
                />
                <Calender />
              </div>
            </FormItem>
            <FormItem>
              <PrimaryText>행사 시간</PrimaryText>
              <TwoBoxWrapper>
                <PrimaryInput
                  width='280px'
                  height='56px'
                  placeholder='오전 10시'
                />
                <p>~</p>
                <PrimaryInput
                  width='280px'
                  height='56px'
                  placeholder='오후 9시'
                />
              </TwoBoxWrapper>
            </FormItem>
            <FormItem>
              <PrimaryText>포스터</PrimaryText>
              <TwoBoxWrapper>
                <PrimaryInput
                  width='400px'
                  height='56px'
                  placeholder='이미지(.png, .jpeg, .pdf) 파일 첨부'
                />
                <ChoiceButton></ChoiceButton>
              </TwoBoxWrapper>
            </FormItem>
            <FormItem>
              <PrimaryText>출석 명단</PrimaryText>
              <TwoBoxWrapper>
                <PrimaryInput
                  width='400px'
                  height='56px'
                  placeholder='엑셀 (.xlsx) 파일 첨부'
                />
                <ChoiceButton></ChoiceButton>
              </TwoBoxWrapper>
            </FormItem>
            <FormItem>
              <TwoBoxWrapper>
                <PrimaryText>안내 메일 발송 여부</PrimaryText>
                <Preview>미리보기</Preview>
              </TwoBoxWrapper>
            </FormItem>
            <FormItem>
              <GrayBox>
                <MailCheck />
                <MailAgree>메일 발송에 동의합니다.</MailAgree>
              </GrayBox>
            </FormItem>
            <FormItem>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <BlueButton>등록하기</BlueButton>
              </div>
            </FormItem>
          </ContentsWrapper>
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
  height: 1300px;
  bottom: 20px;
  background-color: white;
  transform: translate(0, -50px);
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0px;
`;

const FormItem = styled.div`
  margin-bottom: 20px;
`;

const PrimaryText = styled.p`
  font-size: 20px;
  font-weight: 700;
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

const Calender = styled.input.attrs({ type: "button" })`
  background: url("../utils/calender.png") no-repeat;
  position: absolute;
  right: 0;
  width: 26px;
  height: 26px;
  margin: 15px;
  cursor: pointer;
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

const ChoiceButton = styled.input.attrs({ type: "file" })`
  color: #1f5fa9;
  border-radius: 4px;
  border: 1px solid #1f5fa9;
  background-color: white;
  width: 181px;
  height: 50px;
  cursor: pointer;
`;

const ChoiceButtonLabel = styled.label.attrs({ htmlFor: "ChoiceButton" })`
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
  width: 800px;
  height: 80px;
  background-color: #f9f9f9;
`;

const MailCheck = styled.input.attrs({ type: "checkbox" })`
  width: 24px;
  height: 24px;
  margin: 28px 24px;
`;

const MailAgree = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin: 28px 0px;
`;

const BlueButton = styled.button`
  color: white;
  border-radius: 10px;
  background-color: #0a2c83;
  border: none;
  width: 181px;
  height: 56px;
  margin-bottom: 50px;
  cursor: pointer;
`;
