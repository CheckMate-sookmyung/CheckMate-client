import React, { useEffect, useState } from 'react';
import * as S from '../RegisterStyle';
import styled from 'styled-components';
import DateCalendar from '../../../components/Calendar/DateCalendar';
import TimeCalendar from '../../../components/Calendar/TimeCalendar';
import { IoIosArrowDown } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  eventScheduleList,
  minCompletionTimes,
  RegisterStep,
} from '../../../recoil/atoms/state';
import BackButton from './BackButton';
import useResetAllStates from '../../../recoil/atoms/useResetAllState';

const MinTimesDropdown = ({ eventSchedules, value, setValue }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleItemClick = (idx) => {
    setValue(idx + 1);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        {value}
        <span style={{ alignItems: 'center' }}>
          <IoIosArrowDown style={{ fontSize: '18px', color: 'gray' }} />
        </span>
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {eventSchedules.map((event, idx) => (
            <DropdownListItem key={idx} onClick={() => handleItemClick(idx)}>
              {idx + 1}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

const RegisterThird = () => {
  const navigate = useNavigate();
  const Step = useSetRecoilState(RegisterStep);
  const [eventDate, setEventDate] = useState(null);
  const [eventStartTime, setEventStartTime] = useState('');
  const [eventEndTime, setEventEndTime] = useState('');
  const [eventSchedules, setEventSchedules] = useRecoilState(eventScheduleList);
  const [minCompletionTime, setMinCompletionTime] =
    useRecoilState(minCompletionTimes);
  const resetAllStates = useResetAllStates();

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
      setEventDate(null);
      setEventStartTime('');
      setEventEndTime('');
    }
  }, [eventDate, eventStartTime, eventEndTime, setEventSchedules]);

  const handleRegister = () => {
    // e.preventDefault();
    // if (
    //   !eventTitle ||
    //   !eventDetail ||
    //   !eventImage ||
    //   !attendanceListFile ||
    //   !minCompletionTimes
    // ) {
    //   // 예외처리
    //   alert('모든 카테고리를 채워주세요.');
    //   return;
    // }

    // const formData = new FormData();

    // const event = {
    //   // eventStatus,
    //   eventType,
    //   eventTitle,
    //   eventDetail,
    //   alarmRequest: true,
    //   minCompletionTimes,
    //   eventSchedules,
    // };

    // formData.append('event', JSON.stringify(event));
    // formData.append('eventImage', eventImage);
    // formData.append('attendanceListFile', attendanceListFile);

    // axiosInstance
    //   .post(`/api/v1/events/${USER_ID}`, formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   })
    //   .then((response) => {
    //     alert('행사가 등록됐습니다.');
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     alert('행사가 제대로 등록되지 않았습니다.');
    //     console.error(error);
    //   })
    //   .finally(() => {
    //     navigate('/event');
    //   });
    navigate('/event');
    Step(1);
    resetAllStates();
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
              <MinTimesDropdown
                eventSchedules={eventSchedules}
                value={minCompletionTime}
                setValue={setMinCompletionTime}
              />
            </div>
            <S.MainButton onClick={handleRegister}>행사 생성</S.MainButton>
          </S.ContentBox>
        </S.SubContainer>
      </S.Container>
    </>
  );
};

export default RegisterThird;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 56px;
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  font-size: 16px;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownList = styled.ul`
  position: absolute;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  padding: 0;
  margin: 0;
  list-style: none;
  z-index: 1;
`;

const DropdownListItem = styled.li`
  padding: 20px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const CategoryFont = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin: 30px 0;
`;
