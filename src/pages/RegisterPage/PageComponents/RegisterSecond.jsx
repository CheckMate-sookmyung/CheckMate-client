import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import * as S from './RegisterPage.style';
import UploadBox from '../RegisterComponents/UploadBox/UploadBox';
import { axiosInstance } from '@/axios/axiosInstance';
// import { USER_ID } from '@/constants';
import useResetAllStates from '@/recoil/atoms/useResetAllState';
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
} from '@/recoil/atoms/state';
import { Button, Input, SlimButton, Textarea } from '@/components';
import BlueButton from '../RegisterComponents/Button/BlueButton';
import EventScheduleList from '@/components/Scheduler/Scheduler';
import { FaPaperclip } from 'react-icons/fa6';
import RegisterCompletedModal from './RegisterCompleted';

const RegisterSecond = () => {
  const USER_ID = sessionStorage.getItem('id');
  const accessToken = sessionStorage.getItem('accessToken');
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        eventTarget === 'INTERNAL'
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

    const eventDetail = {
      eventType,
      eventTarget,
      eventTitle: eventTitleValue,
      eventDetail: eventDetailValue,
      completionTimes: minCompletionTimesValue,
      eventSchedules: formatSchedules(eventSchedules),
    };

    formData.append('eventDetail', JSON.stringify(eventDetail));
    formData.append('eventImage', eventImageValue);
    formData.append('attendanceListFile', attendanceListFileValue);

    try {
      await axiosInstance.post(`/api/v1/events`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Value': `Bearer ${accessToken}`,
        },
      });
      alert('행사가 등록됐습니다!');
      navigate('/event');
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
    <S.RegisterPage>
      <S.CenteredRegisterPage>
        <S.RegisterCategory>
          <S.BlueButtonWrapper>
            <BlueButton contents={'이벤트 개요'} />
          </S.BlueButtonWrapper>

          <S.ContentBox>
            <S.ContentWrapper>
              <S.MainTitle>행사 제목</S.MainTitle>
              <Input
                placeholder="행사 제목을 입력해 주세요"
                value={iseventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
              />
            </S.ContentWrapper>

            <S.ContentWrapper>
              <S.MainTitle>행사 설명</S.MainTitle>
              <Textarea
                placeholder="행사에 대해 상세히 설명해 주세요"
                value={iseventDetail}
                onChange={(e) => setEventDetail(e.target.value)}
              />
            </S.ContentWrapper>

            <S.ContentWrapper>
              <S.MainTitle>행사 포스터</S.MainTitle>
              <UploadBox
                onFileUpload={handleImageChange}
                accept=".png, .jpeg, .pdf"
              />
            </S.ContentWrapper>

            <S.ContentWrapper>
              <S.TitleDownButtonWrapper>
                <S.MainTitle>행사 출석 파일</S.MainTitle>
                <S.ButtonWrapper>
                  <SlimButton
                    onClick={handleDownload}
                    label={
                      <>
                        <FaPaperclip /> 출석 파일 템플릿 다운
                      </>
                    }
                  />
                </S.ButtonWrapper>
              </S.TitleDownButtonWrapper>
              <UploadBox
                onFileUpload={handleExcelChange}
                accept=".xlsx, .xls"
              />
            </S.ContentWrapper>

            <S.ContentWrapper>
              <S.MainTitle>행사 기간</S.MainTitle>
              <EventScheduleList
                eventSchedules={eventSchedules}
                handleScheduleChange={handleScheduleChange}
                handleAddSchedule={handleAddSchedule}
                handleDeleteSchedule={handleDeleteSchedule}
              />
            </S.ContentWrapper>

            <S.ContentWrapper>
              <S.MainTitle>행사 이수 기준</S.MainTitle>
              <Input
                type="number"
                placeholder="행사 이수 기준을 입력해 주세요"
                value={isminCompletionTimesValue}
                onChange={(e) => setMinCompletionTimesValue(e.target.value)}
                className="custom-input"
              />
            </S.ContentWrapper>

            <S.ButtonWrapper>
              <Button
                label="이전"
                onClick={stepDown}
                type="button"
                backgroundColor="#F2F2F2"
                textColor="#323232"
              />
              <Button label="행사 등록 완료하기" onClick={handleRegister} />
              {/* {isModalOpen && <RegisterCompletedModal />} */}
            </S.ButtonWrapper>
          </S.ContentBox>
        </S.RegisterCategory>
      </S.CenteredRegisterPage>
    </S.RegisterPage>
  );
};

export default RegisterSecond;
