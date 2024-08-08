import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import * as S from '../RegisterStyle';
import BackButton from '../RegisterComponents/BackButton';
import UploadBox from '../RegisterComponents/UploadBox';
import { axiosInstance } from '../../../axios/axiosInstance';
import { USER_ID } from '../../../constants/tempData';
import useResetAllStates from '../../../recoil/atoms/useResetAllState';
import {
  attendanceListFile,
  eventDetail,
  eventImage,
  eventScheduleList,
  eventTargetState,
  eventTitle,
  eventTypeState,
  minCompletionTimes,
  RegisterStep,
} from '../../../recoil/atoms/state';
import EventScheduleList from '../RegisterComponents/Scheduler';

const RegisterSecond = () => {
  // Recoil state hooks
  const Step = useSetRecoilState(RegisterStep);
  const eventType = useRecoilValue(eventTypeState);
  const eventTarget = useRecoilValue(eventTargetState);
  const eventTitleValue = useRecoilValue(eventTitle);
  const eventDetailValue = useRecoilValue(eventDetail);
  const eventImageValue = useRecoilValue(eventImage);
  const attendanceListFileValue = useRecoilValue(attendanceListFile);
  const minCompletionTimesValue = useRecoilValue(minCompletionTimes);

  const [iseventTitle, setEventTitle] = useRecoilState(eventTitle);
  const [iseventDetail, setEventDetail] = useRecoilState(eventDetail);
  const [poster, setPoster] = useRecoilState(eventImage);
  const [file, setFile] = useRecoilState(attendanceListFile);
  const [eventDate, setEventDate] = useState(null);
  const [eventStartTime, setEventStartTime] = useState('');
  const [eventEndTime, setEventEndTime] = useState('');
  const [eventSchedules, setEventSchedules] = useState([
    {
      eventDate: new Date(),
      eventStartTime: new Date(),
      eventEndTime: new Date(),
    },
  ]);

  const navigate = useNavigate();
  const resetAllStates = useResetAllStates();

  // File upload handlers
  const handleImageChange = (file) => {
    setPoster(file);
  };

  const handleExcelChange = (file) => {
    setFile(file);
  };

  // Template download based on event type
  const handleDownload = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        eventType === 'INTERNAL'
          ? 'https://checkmate-service-bucket.s3.ap-northeast-2.amazonaws.com/template+(student).xlsx'
          : 'https://checkmate-service-bucket.s3.ap-northeast-2.amazonaws.com/template+(%EC%99%B8%EB%B6%80%EC%9A%A9)+.xlsx',
        { method: 'GET' },
      );

      if (!response.ok) throw new Error('Network response was not ok');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'template.xlsx';

      document.body.appendChild(link);
      link.click();

      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Fetch operation error:', error);
    }
  };

  // Schedule handling
  const handleScheduleChange = (index, key, value) => {
    const newSchedules = [...eventSchedules];
    newSchedules[index][key] = value;
    setEventSchedules(newSchedules);
  };

  const handleAddSchedule = () => {
    const lastSchedule = eventSchedules[eventSchedules.length - 1];
    const newSchedule = {
      eventDate: new Date(lastSchedule.eventDate),
      eventStartTime: new Date(lastSchedule.eventStartTime),
      eventEndTime: new Date(lastSchedule.eventEndTime),
    };
    setEventSchedules([...eventSchedules, newSchedule]);
  };

  const handleDeleteSchedule = (index) => {
    if (eventSchedules.length > 1) {
      const newSchedules = eventSchedules.filter((_, i) => i !== index);
      setEventSchedules(newSchedules);
    }
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

  // Register event
  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    const event = {
      eventType,
      eventTarget,
      eventTitle: eventTitleValue,
      eventDetail: eventDetailValue,
      minCompletionTimes: minCompletionTimesValue,
      eventSchedules,
    };

    formData.append('event', JSON.stringify(event));
    formData.append('eventImage', eventImageValue);
    formData.append('attendanceListFile', attendanceListFileValue);

    try {
      await axiosInstance.post(`/api/v1/events/${USER_ID}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('행사가 등록됐습니다.');
      navigate('/event');
    } catch (error) {
      alert('행사가 제대로 등록되지 않았습니다.');
      console.error(error);
    } finally {
      Step(1);
      resetAllStates();
    }
  };

  return (
    <>
      <S.Container>
        <S.ButtonWrapper>
          <BackButton />
        </S.ButtonWrapper>
        <S.SubContainer>
          <S.ContentBox style={{ alignItems: 'left' }}>
            <div style={{ width: '70%' }}>
              <CategoryFont>행사 제목</CategoryFont>
              <S.PrimaryInput
                placeholder="행사 제목"
                value={iseventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
              ></S.PrimaryInput>
              <CategoryFont>행사 설명</CategoryFont>
              <S.ContentInput
                placeholder="행사 상세 설명"
                value={iseventDetail}
                onChange={(e) => setEventDetail(e.target.value)}
              ></S.ContentInput>
              <CategoryFont>행사 포스터</CategoryFont>
              <UploadBox
                onFileUpload={handleImageChange}
                accept=".png, .jpeg, .pdf"
              />
              <S.FlexWrapper style={{ justifyContent: 'left' }}>
                <CategoryFont>행사 출석 파일</CategoryFont>
                <S.TemplateButton onClick={handleDownload}>
                  출석 파일 템플릿 다운
                </S.TemplateButton>
              </S.FlexWrapper>
              <UploadBox
                onFileUpload={handleExcelChange}
                accept=".xlsx, .xls"
              />
              <CategoryFont>행사 기간</CategoryFont>
              <EventScheduleList
                eventSchedules={eventSchedules}
                handleScheduleChange={handleScheduleChange}
                handleAddSchedule={handleAddSchedule}
                handleDeleteSchedule={handleDeleteSchedule}
              />
              <CategoryFont>행사 이수 기준</CategoryFont>
            </div>
            <S.MainButton onClick={handleRegister}>행사 생성</S.MainButton>
          </S.ContentBox>
        </S.SubContainer>
      </S.Container>
    </>
  );
};

export default RegisterSecond;

const CategoryFont = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin: 30px 0;
`;
