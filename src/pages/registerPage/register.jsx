import React, { useState } from 'react';
import Navigator from '../../components/navigator';
import styled from 'styled-components';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { MdAccessAlarm } from 'react-icons/md';
import DateCalendar from '../../components/calendar/DateCalendar';

export default function Register() {
  const [selectedImage, setSelectedImage] = useState([]);
  const [dateCalendar, setDateCalendar] = useState(false);

  const onSelectFile = (e) => {
    e.preventDefault();
    e.persist();
  };

  const OpenCalendar = () => {
    setDateCalendar(true);
    console.log('clicked');
  };

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
                width="600px"
                height="56px"
                placeholder="행사명을 입력하세요."
              />
            </FormItem>
            <FormItem>
              <PrimaryText>행사 설명</PrimaryText>
              <ContentInput placeholder="행사에 대해 설명해주세요." />
            </FormItem>
            <FormItem>
              <PrimaryText>행사 일정</PrimaryText>
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  width: '400px',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <PrimaryInput
                    width="400px"
                    height="56px"
                    placeholder="행사 일정 선택"
                    readOnly
                  />
                  <FaRegCalendarAlt
                    style={{
                      position: 'absolute',
                      right: '20px',
                      cursor: 'pointer',
                    }}
                    onClick={() => OpenCalendar()}
                  />
                </div>
              </div>
              {dateCalendar && <DateCalendar />}
              {dateCalendar ? <DateCalendar onClose={setDateCalendar} /> : null}
            </FormItem>
            <FormItem>
              <PrimaryText>행사 시간</PrimaryText>
              <TwoBoxWrapper>
                <div
                  style={{
                    position: 'relative',
                    display: 'flex',
                    width: '280px',
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <PrimaryInput
                      width="280px"
                      height="56px"
                      placeholder="행사 일정 선택"
                      readOnly
                    />
                    <MdAccessAlarm
                      style={{
                        position: 'absolute',
                        right: '20px',
                        cursor: 'pointer',
                      }}
                    />
                  </div>
                </div>
                <p>~</p>
                <div
                  style={{
                    position: 'relative',
                    display: 'flex',
                    width: '280px',
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <PrimaryInput
                      width="280px"
                      height="56px"
                      placeholder="행사 일정 선택"
                      readOnly
                    />
                    <MdAccessAlarm
                      style={{
                        position: 'absolute',
                        right: '20px',
                        cursor: 'pointer',
                      }}
                    />
                  </div>
                </div>
              </TwoBoxWrapper>
            </FormItem>
            <FormItem>
              <PrimaryText>포스터</PrimaryText>
              <TwoBoxWrapper>
                <PrimaryInput
                  width="400px"
                  height="56px"
                  placeholder="이미지(.png, .jpeg, .pdf) 파일 첨부"
                  readOnly
                />
                <ChoiceButton accept=".png, .jpeg, .pdf" />
                <ChoiceButtonLabel>파일 선택</ChoiceButtonLabel>
              </TwoBoxWrapper>
            </FormItem>
            <FormItem>
              <PrimaryText>출석 명단</PrimaryText>
              <TwoBoxWrapper>
                <PrimaryInput
                  width="400px"
                  height="56px"
                  placeholder="엑셀 (.xlsx) 파일 첨부"
                  readOnly
                />
                <ChoiceButton accept=".xls, .xlsx" />
                <ChoiceButtonLabel>파일 선택</ChoiceButtonLabel>
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
              <div style={{ display: 'flex', justifyContent: 'center' }}>
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
  height: 1200px;
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
  margin-bottom: 30px;
`;

const PrimaryText = styled.p`
  font-size: 20px;
  font-weight: 700;
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

const Calendar = styled.input.attrs({ type: 'button' })`
  position: absolute;
  right: 0;
  width: 26px;
  height: 26px;
  margin: 15px;
  cursor: pointer;
  svg {
    fill: #007bff; /* 아이콘 색상 */
    width: 20px; /* 아이콘 너비 */
    height: 20px; /* 아이콘 높이 */
    /* 추가적인 스타일들... */
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
  color: #1f5fa9;
  border-radius: 4px;
  border: 1px solid #1f5fa9;
  background-color: white;
  width: 181px;
  height: 50px;
  cursor: pointer;
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
  margin-bottom: 20px;
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
