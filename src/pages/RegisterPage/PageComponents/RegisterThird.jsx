import React, { useEffect, useState } from 'react';
import * as S from '../RegisterStyle';
import styled from 'styled-components';
import DateCalendar from '../../../components/Calendar/DateCalendar';
import TimeCalendar from '../../../components/Calendar/TimeCalendar';
import BackButton from '../RegisterComponents/BackButton';
import { IoIosArrowDown } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { axiosInstance } from '../../../axios/axiosInstance';
import { USER_ID } from '../../../constants/tempData';
import * as A from '../../../recoil/atoms/state';
import useResetAllStates from '../../../recoil/atoms/useResetAllState';

const RegisterThird = () => {
  const navigate = useNavigate();
  const setStep = useSetRecoilState(A.RegisterStep);
  const [eventDate, setEventDate] = useState(null);
  const [eventStartTime, setEventStartTime] = useState('');
  const [eventEndTime, setEventEndTime] = useState('');
  const [eventSchedules, setEventSchedules] = useRecoilState(
    A.eventScheduleList,
  );
  const resetAllStates = useResetAllStates();

  const eventTypeState = useRecoilValue(A.eventTypeState);
  const eventTargetState = useRecoilValue(A.eventTargetState);
  const eventTitle = useRecoilValue(A.eventTitle);
  const eventDetail = useRecoilValue(A.eventDetail);
  const eventImage = useRecoilValue(A.eventImage);
  const attendanceListFile = useRecoilValue(A.attendanceListFile);
  const minCompletionTimes = useRecoilValue(A.minCompletionTimes);

  const handleDateSelect = (day) => {
    setEventDate(day);
  };

  const handleStartTimeSelect = (time) => {
    setEventStartTime(time);
  };

  const handleEndTimeSelect = (time) => {
    setEventEndTime(time);
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

  const handleRegister = (e) => {
    e.preventDefault();
    const RegisterformData = new FormData();

    const event = {
      eventType: eventTypeState,
      eventTarget: eventTargetState,
      eventTitle,
      eventDetail,
      minCompletionTimes,
      eventSchedules,
    };

    RegisterformData.append('event', JSON.stringify(event));
    RegisterformData.append('eventImage', eventImage);
    RegisterformData.append('attendanceListFile', attendanceListFile);

    axiosInstance
      .post(`/api/v1/events/${USER_ID}`, RegisterformData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        alert('행사가 등록됐습니다.');
        console.log(response);
        navigate('/event');
      })
      .catch((error) => {
        alert('행사가 제대로 등록되지 않았습니다.');
        console.error(error);
        console.log(A.eventImage);
        console.log(A.attendanceListFile);
      })
      .finally(() => {
        setStep(1);
        resetAllStates();
      });
  };

  return (
    <>
      <S.Container>
        <S.ButtonWrapper>
          <BackButton />
        </S.ButtonWrapper>
        <S.SubContainer>
          <S.ContentBox style={{ alignItems: 'left' }}>
            <div>
              <CategoryFont>행사 기간</CategoryFont>
              <S.FlexWrapper style={{ justifyContent: 'space-between' }}>
                <DateCalendar onSaveDate={handleDateSelect} />
                <TimeCalendar
                  timeLabel="행사 시작 시간 선택"
                  onSaveTime={handleStartTimeSelect}
                />
                <TimeCalendar
                  timeLabel="행사 종료 시간 선택"
                  onSaveTime={handleEndTimeSelect}
                />
              </S.FlexWrapper>
              <CategoryFont>행사 이수 기준</CategoryFont>
            </div>
            <S.MainButton onClick={handleRegister}>행사 생성</S.MainButton>
          </S.ContentBox>
        </S.SubContainer>
      </S.Container>
    </>
  );
};

export default RegisterThird;

const CategoryFont = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin: 30px 0;
`;
