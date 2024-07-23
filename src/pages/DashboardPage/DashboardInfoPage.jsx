import React, { useState, useEffect, useRef } from 'react';
import * as S from './DashboardInfoPage.style';
import { FaAngleRight, FaRegTrashCan, FaCircleInfo } from 'react-icons/fa6';
import { Sidebar } from '../../components/Navigator';
import { BlueButton90 } from '../../components/Button';
import { USER_ID } from '../../constants';
import { axiosInstance } from '../../axios';
import { useRecoilValue } from 'recoil';
import { eventIDState } from '../../recoil/atoms/state';
import PageLayout from '../../Layout/PageLayout';
import UploadBox from '../../pages/RegisterPage/RegisterComponents/DragnDrop';

export default function DashboardInfoPage() {
  const [eventType, setEventType] = useState('OFFLINE');
  const [eventTarget, setEventTarget] = useState('EXTERNAL');
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventImage, setEventImage] = useState('');
  const [eventSchedules, setEventSchedules] = useState([
    {
      eventDate: new Date(),
      eventStartTime: new Date(),
      eventEndTime: new Date(),
    },
  ]);
  const [isChanged, setIsChanged] = useState(false);
  const EVENT_ID = useRecoilValue(eventIDState);

  const initialState = useRef({
    eventType,
    eventTarget,
    eventTitle,
    eventDescription,
    eventImage,
    eventSchedules,
  });

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/v1/events/${USER_ID}/${EVENT_ID}`,
        );
        const eventData = response.data;

        setEventType(eventData.eventType ? 'ONLINE' : 'OFFLINE');
        setEventTarget(eventData.eventTarget || 'EXTERNAL : INTERNAL');
        setEventTitle(eventData.eventTitle);
        setEventDescription(eventData.eventDetail);
        setEventImage(eventData.eventImage || '');
        setEventSchedules(
          eventData.eventSchedules.map((schedule) => ({
            eventDate: new Date(schedule.eventDate),
            eventStartTime: new Date(
              `${schedule.eventDate}T${schedule.eventStartTime}`,
            ),
            eventEndTime: new Date(
              `${schedule.eventDate}T${schedule.eventEndTime}`,
            ),
          })),
        );

        initialState.current = {
          eventType: eventData.eventType ? 'ONLINE' : 'OFFLINE',
          eventTarget: eventData.eventTarget || 'EXTERNAL : INTERNAL',
          eventTitle: eventData.eventTitle,
          eventDescription: eventData.eventDetail,
          eventImage: eventData.eventImage || '',
          eventSchedules: eventData.eventSchedules.map((schedule) => ({
            eventDate: new Date(schedule.eventDate),
            eventStartTime: new Date(
              `${schedule.eventDate}T${schedule.eventStartTime}`,
            ),
            eventEndTime: new Date(
              `${schedule.eventDate}T${schedule.eventEndTime}`,
            ),
          })),
        };
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchEventData();
  }, [EVENT_ID, USER_ID]);

  useEffect(() => {
    const hasChanged =
      eventType !== initialState.current.eventType ||
      eventTarget !== initialState.current.eventTarget ||
      eventTitle !== initialState.current.eventTitle ||
      eventDescription !== initialState.current.eventDescription ||
      eventImage !== initialState.current.eventImage ||
      eventSchedules.length !== initialState.current.eventSchedules.length ||
      eventSchedules.some(
        (schedule, index) =>
          schedule.eventDate.getTime() !==
            initialState.current.eventSchedules[index]?.eventDate.getTime() ||
          schedule.eventStartTime.getTime() !==
            initialState.current.eventSchedules[
              index
            ]?.eventStartTime.getTime() ||
          schedule.eventEndTime.getTime() !==
            initialState.current.eventSchedules[index]?.eventEndTime.getTime(),
      );

    setIsChanged(hasChanged);
  }, [
    eventType,
    eventTarget,
    eventTitle,
    eventDescription,
    eventImage,
    eventSchedules,
  ]);

  const handleScheduleChange = (index, key, value) => {
    const newSchedules = [...eventSchedules];
    newSchedules[index][key] = value;
    setEventSchedules(newSchedules);
    setIsChanged(true);
  };

  // 행사 기간 추가하기 버튼
  const handleAddSchedule = () => {
    const lastSchedule = eventSchedules[eventSchedules.length - 1];
    const newSchedule = {
      eventDate: new Date(lastSchedule.eventDate),
      eventStartTime: new Date(lastSchedule.eventStartTime),
      eventEndTime: new Date(lastSchedule.eventEndTime),
    };
    setEventSchedules([...eventSchedules, newSchedule]);
    setIsChanged(true);
  };

  // 행사 기간 삭제하기 버튼
  const handleDeleteSchedule = (index) => {
    if (eventSchedules.length > 1) {
      const newSchedules = eventSchedules.filter((_, i) => i !== index);
      setEventSchedules(newSchedules);
      setIsChanged(true);
    }
  };

  // 저장하기 버튼
  const handleSave = async () => {
    const eventData = {
      eventId: EVENT_ID,
      eventTitle,
      eventDetail: eventDescription,
      eventImage,
      eventType: eventType ? 'OFFLINE' : 'ONLINE',
      eventTarget: eventTarget === 'EXTERNAL' ? 'EXTERNAL' : 'INTERNAL',
      eventSchedules: eventSchedules.map((schedule) => ({
        eventDate: schedule.eventDate.toISOString().split('T')[0],
        eventStartTime: schedule.eventStartTime.toISOString().split('T')[1],
        eventEndTime: schedule.eventEndTime.toISOString().split('T')[1],
        attendanceListResponseDtos: [],
      })),
    };

    try {
      await axiosInstance.put(
        `/api/v1/events/${USER_ID}/${EVENT_ID}`,
        eventData,
      );
      alert('행사 정보가 성공적으로 저장되었습니다.');
      setIsChanged(false);
    } catch (error) {
      alert('행사 정보를 저장하는 데 실패했습니다. 다시 시도해 주세요.');
      console.error('행사 정보 저장 실패: ', error);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const filePath = URL.createObjectURL(file);
      setEventImage(filePath);
      setIsChanged(true);
    }
  };

  return (
    <PageLayout sideBar={<Sidebar />}>
      <S.DashboardInfo>
        <S.TopContainer>
          <S.Title>행사 기본 정보</S.Title>
          <S.ButtonContainer>
            <BlueButton90 disabled={!isChanged} onClick={handleSave}>
              저장하기
            </BlueButton90>
          </S.ButtonContainer>
        </S.TopContainer>

        {/* 행사 정보 */}
        <S.ContentContainer>
          <S.Content>
            <S.ContentTitle>행사 제목</S.ContentTitle>
            <S.ContentInput
              type="text"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
            />
          </S.Content>

          <S.Content>
            <S.ContentTitle>행사 기간</S.ContentTitle>
            {eventSchedules.map((schedule, index) => (
              <S.DateTimeContainer key={index}>
                <S.DateTimeWrapper>
                  <S.DateTimeInput
                    selected={schedule.eventDate}
                    onChange={(date) =>
                      handleScheduleChange(index, 'eventDate', date)
                    }
                    dateFormat="MM월 dd일"
                    showYearDropdown={false}
                    showMonthDropdown={true}
                    dropdownMode="select"
                  />
                  <S.DateTimeInput
                    selected={schedule.eventStartTime}
                    onChange={(date) =>
                      handleScheduleChange(index, 'eventStartTime', date)
                    }
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                  />
                  <FaAngleRight />

                  <S.DateTimeInput
                    selected={schedule.eventEndTime}
                    onChange={(date) =>
                      handleScheduleChange(index, 'eventEndTime', date)
                    }
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                  />
                </S.DateTimeWrapper>
                <S.InfoDeleteIconWrapper>
                  {index === 0 ? (
                    <S.InfoIconWrapper>
                      <FaCircleInfo />
                    </S.InfoIconWrapper>
                  ) : (
                    <S.DeleteIconWrapper
                      onClick={() => handleDeleteSchedule(index)}
                    >
                      <FaRegTrashCan />
                    </S.DeleteIconWrapper>
                  )}
                </S.InfoDeleteIconWrapper>
              </S.DateTimeContainer>
            ))}
            <S.AddTimeWrapper>
              <S.AddTimeBtn onClick={handleAddSchedule}>
                행사 일정 추가하기
              </S.AddTimeBtn>
            </S.AddTimeWrapper>
          </S.Content>

          <S.Content>
            <S.ContentTitle>온라인/오프라인 여부</S.ContentTitle>
            <S.ToggleContainer>
              <S.ToggleButton
                active={eventType === 'ONLINE'}
                onClick={() => setEventType('ONLINE')}
              >
                온라인
              </S.ToggleButton>
              <S.ToggleButton
                active={eventType === 'OFFLINE'}
                onClick={() => setEventType('OFFLINE')}
              >
                오프라인
              </S.ToggleButton>
            </S.ToggleContainer>
          </S.Content>

          <S.Content>
            <S.ContentTitle>행사 진행 대상</S.ContentTitle>
            <S.EventTargetContainer>
              <S.EventTarget onClick={() => setEventTarget('INTERNAL')}>
                <S.EventTargetRadioButton
                  type="radio"
                  name="eventTarget"
                  value="INTERNAL"
                  checked={eventTarget === 'INTERNAL'}
                  readOnly
                />
                <S.EventTargetWrapper>
                  <S.EventTargetTitle>숙명여자대학교 학생</S.EventTargetTitle>
                  <S.EventTargetDescription>
                    출석체크시, 학번을 입력받습니다.
                  </S.EventTargetDescription>
                </S.EventTargetWrapper>
              </S.EventTarget>
              <S.EventTarget onClick={() => setEventTarget('EXTERNAL')}>
                <S.EventTargetRadioButton
                  type="radio"
                  name="eventTarget"
                  value="EXTERNAL"
                  checked={eventTarget === 'EXTERNAL'}
                  readOnly
                />
                <S.EventTargetWrapper>
                  <S.EventTargetTitle>외부인</S.EventTargetTitle>
                  <S.EventTargetDescription>
                    출석체크시, 휴대폰 번호를 입력받습니다.
                  </S.EventTargetDescription>
                </S.EventTargetWrapper>
              </S.EventTarget>
            </S.EventTargetContainer>
          </S.Content>

          <S.Content>
            <S.ContentTitle>행사 설명</S.ContentTitle>
            <S.Textarea
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            />
          </S.Content>

          <S.Content>
            <S.ContentTitle>행사 커버 이미지</S.ContentTitle>
            <S.ContentDescWrapper>
              <S.ContentDesc>
                사진은 PNG, JPG, JPEG 파일만 가능 합니다.
              </S.ContentDesc>
              <UploadBox
                imageUrl={eventImage}
                onImageUpload={handleImageUpload}
              />
            </S.ContentDescWrapper>
          </S.Content>
        </S.ContentContainer>
      </S.DashboardInfo>
    </PageLayout>
  );
}
