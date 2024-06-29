import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { axiosInstance } from '../../axios';
import { USER_ID } from '../../constants';
import BackgroundPage from '../../components/Background/BackgroundPage';
import { useNavigate } from 'react-router-dom';
import DateCalendar from '../../components/Calendar/DateCalendar';
import TimeCalendar from '../../components/Calendar/TimeCalendar';
import { IoMdAdd } from 'react-icons/io';

export default function Register() {
  const navigate = useNavigate();
  const [eventType, setEventType] = useState('OFFLINE');
  const [eventTitle, setEventTitle] = useState('');
  const [eventDetail, setEventDetail] = useState('');
  const [eventDate, setEventDate] = useState(null);
  const [eventSchedules, setEventSchedules] = useState([]);
  const [eventStartTime, setEventStartTime] = useState('');
  const [eventEndTime, setEventEndTime] = useState('');
  const [eventImage, setEventImage] = useState(null);
  const [attendanceListFile, setAttendanceListFile] = useState(null);
  const [minCompletionTimes, setCompletionTimes] = useState('');
  // const [alarmRequest, setAlarmRequest] = useState(false);

  const getEventType = (event) => {
    setEventType(event.target.value);
  };

  const handleDateSelect = (day) => {
    setEventDate(day);
  };

  const handleStartTimeSelect = (time) => {
    setEventStartTime(time);
  };

  const handleEndTimeSelect = (time) => {
    setEventEndTime(time);
  };

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setEventImage(image);
  };

  const handleExcelChange = (event) => {
    const excel = event.target.files[0];
    setAttendanceListFile(excel);
  };

  useEffect(() => {
    if (eventDate && eventStartTime && eventEndTime) {
      const newEvent = {
        eventDate,
        eventStartTime,
        eventEndTime,
      };
      setEventSchedules((prevEvents) => [...prevEvents, newEvent]);
      setEventDate('');
      setEventStartTime('');
      setEventEndTime('');
    }
  }, [eventDate, eventStartTime, eventEndTime]);

  // const setAlarm = (setAlarmRequest) => {
  //   setAlarmRequest(true);
  // };

  const handleDownload = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://checkmate-service-bucket.s3.ap-northeast-2.amazonaws.com/%EC%B2%B4%ED%81%AC%EB%A9%94%EC%9D%B4%ED%8A%B8+%EC%B0%B8%EC%84%9D+%EB%AA%85%EB%8B%A8+%ED%8F%AC%EB%A7%B7.xlsx',
        {
          method: 'GET',
        },
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');

      link.setAttribute('href', url);
      link.setAttribute('download', 'template.xlsx');

      document.body.appendChild(link);
      link.click();

      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const registerEvent = (e) => {
    e.preventDefault();
    if (
      !eventTitle ||
      !eventDetail ||
      !eventImage ||
      !attendanceListFile ||
      !minCompletionTimes
    ) {
      alert('모든 카테고리를 채워주세요.');
      return;
    }

    const formData = new FormData();

    const event = {
      eventType,
      eventTitle,
      eventDetail,
      alarmRequest: true,
      minCompletionTimes,
      eventSchedules,
    };

    formData.append('event', JSON.stringify(event));
    formData.append('eventImage', eventImage);
    formData.append('attendanceListFile', attendanceListFile);

    axiosInstance
      .post(`/api/v1/events/${USER_ID}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        alert('행사가 등록됐습니다.');
        console.log(response);
      })
      .catch((error) => {
        alert('행사가 제대로 등록되지 않았습니다.');
        console.error(error);
      });
  };

  return (
    <BackgroundPage title={'행사 등록'}>
      <form>
        <div style={{ padding: '50px 10px' }}>
          <FormItem>
            <PrimaryText>행사 유형</PrimaryText>
            <TwoBoxWrapper>
              <RadioButton
                name="eventType"
                value="OFFLINE"
                defaultChecked
                onClick={getEventType}
              />
              <MailAgree>대면 행사</MailAgree>
              <RadioButton
                name="eventType"
                value="ONLINE"
                onClick={getEventType}
              />
              <MailAgree>비대면 행사</MailAgree>
            </TwoBoxWrapper>
          </FormItem>
          <FormItem>
            <PrimaryText>행사명</PrimaryText>
            <PrimaryInput
              width="600px"
              placeholder="행사명을 입력하세요."
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <PrimaryText>행사 설명</PrimaryText>
            <ContentInput
              placeholder="행사에 대해 설명해주세요."
              value={eventDetail}
              onChange={(e) => setEventDetail(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <PrimaryText>행사 일정</PrimaryText>
            <TwoBoxWrapper>
              <DateCalendar onSaveDate={handleDateSelect} />
              :
              <TimeCalendar
                timeLabel="행사 시작 시간 선택"
                onSaveTime={handleStartTimeSelect}
              />
              ~
              <TimeCalendar
                timeLabel="행사 종료 시간 선택"
                onSaveTime={handleEndTimeSelect}
              />
            </TwoBoxWrapper>
          </FormItem>
          <GrayBox style={{ padding: '30px', marginBottom: '20px' }}>
            <div>
              {eventSchedules.map((event, index) => (
                <NewDateItem key={index}>
                  {event.eventDate} : {event.eventStartTime} ~{' '}
                  {event.eventEndTime}
                  <AddDate>
                    <IoMdAdd />
                  </AddDate>
                  <br />
                </NewDateItem>
              ))}
            </div>
          </GrayBox>
          <FormItem>
            <PrimaryText>포스터</PrimaryText>
            <TwoBoxWrapper>
              <PrimaryInput2
                placeholder={
                  eventImage
                    ? eventImage.name
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
            <div style={{ display: 'flex', gap: '20px' }}>
              <PrimaryText>출석 명단</PrimaryText>
              <Preview onClick={handleDownload}>엑셀 템플릿 다운받기</Preview>
            </div>
            <TwoBoxWrapper>
              <PrimaryInput2
                placeholder={
                  attendanceListFile
                    ? attendanceListFile.name
                    : '엑셀(.xlsx) 파일 첨부'
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
            <PrimaryText>이수 기준</PrimaryText>
            <PrimaryInput
              width="600px"
              placeholder="행사 이수 기준 횟수를 입력해주세요. (1, 2, 3 ... )"
              value={minCompletionTimes}
              onChange={(e) => setCompletionTimes(e.target.value)}
            />
          </FormItem>
          {/* <FormItem>
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
          </FormItem> */}
          <FormItem>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <BlueButton onClick={registerEvent}>등록하기</BlueButton>
            </div>
          </FormItem>
        </div>
      </form>
    </BackgroundPage>
  );
}

const NewDateItem = styled.li`
  line-height: 130%;
  margin: 5px;
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
  height: 56px;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding-left: 15px;
  box-sizing: border-box;
  white-space: pre-wrap;
  &::placeholder {
    color: gray;
  }
  &:focus {
    outline: none;
  }
`;

const PrimaryInput2 = styled(PrimaryInput)`
  width: 400px;
  height: 56px;
`;

const ContentInput = styled.textarea`
  width: 50rem;
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

const AddDate = styled.button`
  height: 30px;
  width: 30px;
  background-color: white;
  box-shadow: 0px 0px 20px #e0e0e0;
  border-radius: 50px;
  margin: 0 20px;
`;

const Preview = styled.button`
  color: white;
  border-radius: 4px;
  border: none;
  background-color: #0a2c83;
  width: fit-content;
  height: 24px;
  padding: 0px 10px;
  cursor: pointer;
`;

const GrayBox = styled.div`
  display: flex;
  align-items: center;
  width: 800px;
  height: auto;
  background-color: #f9f9f9;
`;

const MailCheck = styled.input.attrs({ type: 'checkbox' })`
  width: 24px;
  height: 24px;
  margin: 20px;
  background-color: white;
  cursor: pointer;
`;

const RadioButton = styled(MailCheck).attrs({ type: 'radio' })``;

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
