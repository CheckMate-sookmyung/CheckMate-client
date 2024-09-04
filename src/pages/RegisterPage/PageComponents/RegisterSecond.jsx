import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import * as S from './RegisterSecond.style';
import UploadBox from '../RegisterComponents/UploadBox/UploadBox';
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
import { Input, Textarea } from '@/components';
import BlueButton from '../RegisterComponents/Button/BlueButton';
import FileButton from '../RegisterComponents/Button/FileButton';
import EventScheduleList from '@/components/Scheduler/Scheduler';

const RegisterSecond = () => {
  const Step = useSetRecoilState(RegisterStep);

  const stepDown = () => {
    Step((prevStep) => prevStep - 1);
  };

  // Recoil state hooks
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
  const [isminCompletionTimesValue, setMinCompletionTimesValue] = useState();
  const [eventSchedules, setEventSchedules] = useRecoilState(eventScheduleList);

  const navigate = useNavigate();
  const resetAllStates = useResetAllStates();

  const handleImageChange = (file) => {
    setPoster(file);
  };

  const handleExcelChange = (file) => {
    setFile(file);
  };

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

  const handleScheduleChange = (index, key, value) => {
    const newSchedules = eventSchedules.map((schedule, i) =>
      i === index ? { ...schedule, [key]: value } : schedule,
    );
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

  const formatSchedules = (schedules) => {
    return schedules.map((schedule) => ({
      eventDate: format(schedule.eventDate, 'yyyy-MM-dd'),
      eventStartTime: format(schedule.eventStartTime, 'HH:mm'),
      eventEndTime: format(schedule.eventEndTime, 'HH:mm'),
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    const event = {
      eventType,
      eventTarget,
      eventTitle: eventTitleValue,
      eventDetail: eventDetailValue,
      minCompletionTimes: minCompletionTimesValue,
      eventSchedules: formatSchedules(eventSchedules),
    };

    formData.append('event', JSON.stringify(event));
    formData.append('eventImage', eventImageValue);
    formData.append('attendanceListFile', attendanceListFileValue);

    try {
      await axiosInstance.post(`/api/v1/events/${USER_ID}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      navigate('/register/completed');
    } catch (error) {
      alert('행사가 제대로 등록되지 않았습니다.');
      navigate('/register');
      console.error(error);
    } finally {
      Step(1);
      resetAllStates();
    }
  };

  return (
    <>
      <S.Container className="container">
        <S.SubContainer>
          <S.ContentBox>
            <S.FlexWrapper>
              <BlueButton contents={'이벤트 개요'} />
            </S.FlexWrapper>
            <S.ContentBox>
              <S.CategoryFont>행사 제목</S.CategoryFont>
              <Input
                placeholder="행사 제목을 입력해주세요"
                value={iseventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
              ></Input>
            </S.ContentBox>
            <S.ContentBox>
              <S.CategoryFont>행사 설명</S.CategoryFont>
              <Textarea
                placeholder="행사에 대해 상세히 설명해주세요"
                value={iseventDetail}
                onChange={(e) => setEventDetail(e.target.value)}
              />
            </S.ContentBox>
            <S.ContentBox>
              <S.CategoryFont>행사 포스터</S.CategoryFont>
              <UploadBox
                onFileUpload={handleImageChange}
                accept=".png, .jpeg, .pdf"
              />
            </S.ContentBox>
            <S.ContentBox>
              <S.CategoryFont>행사 출석 파일</S.CategoryFont>
              <UploadBox
                onFileUpload={handleExcelChange}
                accept=".xlsx, .xls"
              />
              <S.FlexWrapper
                style={{
                  justifyContent: 'end',
                }}
              >
                <FileButton
                  onClick={handleDownload}
                  content={'출석 파일 템플릿 다운'}
                  type={'blue'}
                />
              </S.FlexWrapper>
            </S.ContentBox>
            <S.ContentBox>
              <S.CategoryFont>행사 기간</S.CategoryFont>
              <EventScheduleList
                eventSchedules={eventSchedules}
                handleScheduleChange={handleScheduleChange}
                handleAddSchedule={handleAddSchedule}
                handleDeleteSchedule={handleDeleteSchedule}
              />
            </S.ContentBox>
            <S.ContentBox>
              <S.CategoryFont>행사 이수 기준</S.CategoryFont>
              <Input
                type="number"
                placeholder="행사 이수 기준을 입력해주세요"
                value={isminCompletionTimesValue}
                onChange={(e) => setMinCompletionTimesValue(e.target.value)}
              />
            </S.ContentBox>
            <S.FlexWrapper
              style={{
                justifyContent: 'end',
              }}
            >
              <S.BackButton onClick={stepDown}>이전</S.BackButton>
              <S.MainButton onClick={handleRegister}>
                행사 등록 완료하기
              </S.MainButton>
            </S.FlexWrapper>
          </S.ContentBox>
        </S.SubContainer>
      </S.Container>
    </>
  );
};

export default RegisterSecond;
