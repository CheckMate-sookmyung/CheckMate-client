import { format } from 'date-fns';
import { FaPaperclip } from 'react-icons/fa6';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { axiosInstance } from '@/axios/axiosInstance';
import {
  Button,
  EventScheduleList,
  Input,
  SlimButton,
  Textarea,
  UploadBox,
} from '@/components';
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
import useResetAllStates from '@/recoil/atoms/useResetAllState';

import BlueButton from '../RegisterComponents/Button/BlueButton';
import CompletionDropdown from '../RegisterComponents/Dropdown/CompletionDropdown';
import RegisterCompletedModal from './RegisterCompleted';
import * as S from './RegisterPage.style';

const RegisterSecond = () => {
  const setStep = useSetRecoilState(RegisterStep);
  const [showModal, setShowModal] = useState(false);

  // Recoil 상태
  const [eventType] = useRecoilState(eventTypeState);
  const [eventTarget] = useRecoilState(eventTargetState);
  const [eventTitleValue, setEventTitle] = useRecoilState(eventTitle);
  const [eventDetailValue, setEventDetail] = useRecoilState(eventDetail);
  const [eventImageValue, setEventImage] = useRecoilState(eventImage);
  const [attendanceListFileValue, setAttendanceListFile] =
    useRecoilState(attendanceListFile);
  const [minCompletionTimesValue, setMinCompletionTimesValue] =
    useRecoilState(minCompletionTimes);
  const [eventSchedules, setEventSchedules] = useRecoilState(eventScheduleList);
  const [eventAddress, setEventAddress] = useState('');

  const navigate = useNavigate();
  const resetAllStates = useResetAllStates();

  const dropdownItems = eventSchedules.map((_, index) => ({
    label: `${index + 1}회`,
    value: index + 1,
  }));

  const handleImageChange = (file) => {
    setEventImage(file);
  };

  const handleExcelChange = (file) => {
    setAttendanceListFile(file);
  };

  const handleSelect = (value) => {
    setMinCompletionTimesValue(value);
  };

  const handleDownload = async (e) => {
    e.preventDefault();
    try {
      const url =
        eventTarget === 'INTERNAL'
          ? 'https://checkmate-service-bucket.s3.ap-northeast-2.amazonaws.com/template+(student).xlsx'
          : 'https://checkmate-service-bucket.s3.ap-northeast-2.amazonaws.com/template+(%EC%99%B8%EB%B6%80%EC%9A%A9)+.xlsx';

      const response = await fetch(url);

      if (!response.ok) throw new Error('네트워크 응답에 문제가 있습니다.');

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'template.xlsx';

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('파일 다운로드 에러:', error);
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

  const formatSchedules = (schedules) => {
    return schedules.map((schedule) => ({
      eventDate: format(new Date(schedule.eventDate), 'yyyy-MM-dd'),
      eventStartTime: format(new Date(schedule.eventStartTime), 'HH:mm'),
      eventEndTime: format(new Date(schedule.eventEndTime), 'HH:mm'),
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
      completionTimes: minCompletionTimesValue,
      eventSchedules: formatSchedules(eventSchedules),
      eventUrl: eventAddress,
    };

    formData.append('eventDetail', JSON.stringify(event));
    formData.append('eventImage', eventImageValue);
    formData.append('attendanceListFile', attendanceListFileValue);

    try {
      await axiosInstance.post(`/api/v1/events`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setShowModal(true);
    } catch (error) {
      alert('행사가 제대로 등록되지 않았습니다.');
      navigate('/register');
    } finally {
      setStep(1);
      resetAllStates();
    }
  };

  return (
    <S.RegisterPage>
      <S.CenteredRegisterPage>
        <S.RegisterCategory>
          <S.BlueButtonWrapper>
            <BlueButton contents="이벤트 개요" />
          </S.BlueButtonWrapper>

          <S.ContentBox>
            <S.ContentWrapper>
              <S.MainTitle>행사 제목</S.MainTitle>
              <Input
                placeholder="행사 제목을 입력해 주세요"
                value={eventTitleValue}
                onChange={(e) => setEventTitle(e.target.value)}
              />
            </S.ContentWrapper>

            <S.ContentWrapper>
              <S.MainTitle>행사 설명</S.MainTitle>
              <Textarea
                placeholder="행사에 대해 상세히 설명해 주세요"
                value={eventDetailValue}
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
                        <FaPaperclip /> 출석 파일 템플릿 다운로드
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
              <CompletionDropdown
                items={dropdownItems}
                onSelect={handleSelect}
              />
            </S.ContentWrapper>

            <S.ContentWrapper>
              <S.MainTitle>WISE 주소</S.MainTitle>
              <Input
                placeholder="등록하실 행사의 WISE 주소를 입력해주세요."
                value={eventAddress}
                onChange={(e) => setEventAddress(e.target.value)}
              />
            </S.ContentWrapper>

            <S.ButtonWrapper>
              <Button
                label="이전"
                onClick={() => setStep((prevStep) => prevStep - 1)}
                type="button"
                backgroundColor="#F2F2F2"
                textColor="#323232"
              />
              <Button label="행사 등록 완료하기" onClick={handleRegister} />
            </S.ButtonWrapper>
          </S.ContentBox>
        </S.RegisterCategory>
      </S.CenteredRegisterPage>
      {showModal && (
        <RegisterCompletedModal
          eventTitle={eventTitleValue}
          eventScheduleList={eventSchedules}
        />
      )}
    </S.RegisterPage>
  );
};

export default RegisterSecond;
