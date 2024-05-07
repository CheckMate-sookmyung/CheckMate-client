import React, { useState } from 'react';
import Navigator from '../../components/navigator';
import styled from 'styled-components';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { MdAccessAlarm } from 'react-icons/md';
import DateCalendar from '../../components/Calendar/DateCalendar';

export default function Register() {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  // const [eventTime, setEventTime] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedExcel, setSelectedExcel] = useState(null);
  const [dateCalendar, setDateCalendar] = useState(false);

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setSelectedImage(image);
    console.log(image.name);
  };

  const handleExcelChange = (event) => {
    const excel = event.target.files[0];
    setSelectedExcel(excel);
    console.log(excel.name);
  };

  const openCalendar = () => {
    setDateCalendar(true);
  };

  const closeCalendar = (selectedDate) => {
    setEventDate(selectedDate);
    setDateCalendar(false);
  };

  const handleDateClose = (selectedDate) => {};

  const registerEvent = () => {
    if (!eventTitle || !eventDescription || !selectedImage || !selectedExcel) {
      alert('모든 카테고리를 채워주세요.');
    }

    const formData = new FormData();
    formData.append('eventTitle', eventTitle);
    formData.append('eventDescription', eventDescription);
    formData.append('selectedImage', selectedImage);
    formData.append('selectedExcel', selectedExcel);

    // axios
    //   .post('', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   })
    //   .then((response) => {
    //     alert('행사가 등록되었습니다');
    //   })
    //   .catch((error) => {
    //     console.error('행사 등록 실패:', error);
    //   });
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
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
              />
            </FormItem>
            <FormItem>
              <PrimaryText>행사 설명</PrimaryText>
              <ContentInput
                placeholder="행사에 대해 설명해주세요."
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
              />
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
                    placeholder={eventDate ? eventDate : '행사 일정 선택'}
                    readOnly
                  />
                  <FaRegCalendarAlt
                    style={{
                      position: 'absolute',
                      right: '20px',
                      cursor: 'pointer',
                    }}
                    onClick={() => openCalendar()}
                  />
                </div>
              </div>
              {dateCalendar && <DateCalendar onClose={closeCalendar} />}
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
                <PrimaryInput1
                  placeholder={
                    selectedImage
                      ? selectedImage.name
                      : '이미지 (.png, .jpeg, .pdf) 파일 첨부'
                  }
                />
                <ChoiceButton1
                  accept=".png, .jpeg, .pdf"
                  onChange={handleImageChange}
                />
                <ChoiceButtonLabel1>파일 선택</ChoiceButtonLabel1>
              </TwoBoxWrapper>
            </FormItem>
            <FormItem>
              <PrimaryText>출석 명단</PrimaryText>
              <TwoBoxWrapper>
                <PrimaryInput2
                  placeholder={
                    selectedExcel ? selectedExcel.name : '엑셀(.xlsx) 파일 첨부'
                  }
                />
                <ChoiceButton2
                  accept=".xlsx, .xls"
                  onChange={handleExcelChange}
                />
                <ChoiceButtonLabel2>파일 선택</ChoiceButtonLabel2>
              </TwoBoxWrapper>
            </FormItem>
            <FormItem>
              <TwoBoxWrapper>
                <PrimaryText2>안내 메일 발송 여부</PrimaryText2>
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
                <BlueButton onClick={registerEvent}>등록하기</BlueButton>
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

const PrimaryInput1 = styled(PrimaryInput)`
  width: 400px;
  height: 56px;
  &:read-only {
  }
`;

const PrimaryInput2 = styled(PrimaryInput)`
  width: 400px;
  height: 56px;
  &:read-only {
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

const ChoiceButton1 = styled.input.attrs({ type: 'file', id: 'ChoiceButton1' })`
  display: none;
`;

const ChoiceButton2 = styled.input.attrs({ type: 'file', id: 'ChoiceButton2' })`
  display: none;
`;

const ChoiceButtonLabel1 = styled.label.attrs({ htmlFor: 'ChoiceButton1' })`
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

const ChoiceButtonLabel2 = styled.label.attrs({ htmlFor: 'ChoiceButton2' })`
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
