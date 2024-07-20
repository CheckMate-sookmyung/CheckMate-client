import React, { useState, useEffect, useRef } from 'react';
import * as S from './DashboardInfoPage.style';
import { FaAngleRight } from 'react-icons/fa6';
import { Sidebar } from '../../components/Navigator';
import { BlueButton90 } from '../../components/Button';
import { USER_ID } from '../../constants';
import { axiosInstance } from '../../axios';
import { useRecoilValue } from 'recoil';
import { eventIDState } from '../../recoil/atoms/state';
import PageLayout from '../../Layout/PageLayout';
import UploadBox from '../../pages/RegisterPage/RegisterComponents/DragnDrop';

export default function DashboardInfoPage() {
  const [active, setActive] = useState('online');
  const [selectedOption, setSelectedOption] = useState('option1');
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
    active,
    selectedOption,
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

        setActive(eventData.active ? 'online' : 'offline');
        setSelectedOption(eventData.selectedOption || 'option1');
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
          active: eventData.active ? 'online' : 'offline',
          selectedOption: eventData.selectedOption || 'option1',
          eventTitle: eventData.eventTitle,
          eventDescription: eventData.eventDetail,
          setImage: eventData.eventImage || '',
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
      active !== initialState.current.active ||
      selectedOption !== initialState.current.selectedOption ||
      eventTitle !== initialState.current.eventTitle ||
      eventDescription !== initialState.current.eventDescription ||
      eventImage !== initialState.current.eventImage ||
      eventSchedules.some(
        (schedule, index) =>
          schedule.eventDate.getTime() !==
            initialState.current.eventSchedules[index].eventDate.getTime() ||
          schedule.eventStartTime.getTime() !==
            initialState.current.eventSchedules[
              index
            ].eventStartTime.getTime() ||
          schedule.eventEndTime.getTime() !==
            initialState.current.eventSchedules[index].eventEndTime.getTime(),
      );

    setIsChanged(hasChanged);
  }, [
    active,
    selectedOption,
    eventTitle,
    eventDescription,
    eventImage,
    eventSchedules,
  ]);

  const handleScheduleChange = (index, key, value) => {
    const newSchedules = [...eventSchedules];
    newSchedules[index][key] = value;
    setEventSchedules(newSchedules);
  };

  const handleSave = async () => {
    const eventData = {
      EVENT_ID,
      eventTitle,
      eventDetail: eventDescription,
      eventImage,
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
                  dateFormat="MM월 dd일"
                  showYearDropdown={false}
                  showMonthDropdown={true}
                  dropdownMode="select"
                />
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
              </S.DateTimeContainer>
            ))}
          </S.Content>

          <S.Content>
            <S.ContentTitle>온라인/오프라인 여부</S.ContentTitle>
            <S.ToggleContainer>
              <S.ToggleBtn
                active={active === 'online'}
                onClick={() => setActive('online')}
              >
                온라인
              </S.ToggleBtn>
              <S.ToggleBtn
                active={active === 'offline'}
                onClick={() => setActive('offline')}
              >
                오프라인
              </S.ToggleBtn>
            </S.ToggleContainer>
          </S.Content>

          <S.Content>
            <S.ContentTitle>행사 진행 대상</S.ContentTitle>
            <S.OptionContainer>
              <S.Option onClick={() => setSelectedOption('option1')}>
                <S.RadioButton
                  type="radio"
                  name="platform"
                  value="option1"
                  checked={selectedOption === 'option1'}
                  readOnly
                />
                <S.TextContainer>
                  <S.OptionTitle>숙명여자대학교 학생</S.OptionTitle>
                  <S.OptionDescription>
                    출석체크시, 학번을 입력받습니다.
                  </S.OptionDescription>
                </S.TextContainer>
              </S.Option>
              <S.Option onClick={() => setSelectedOption('option2')}>
                <S.RadioButton
                  type="radio"
                  name="platform"
                  value="option2"
                  checked={selectedOption === 'option2'}
                  readOnly
                />
                <S.TextContainer>
                  <S.OptionTitle>외부인</S.OptionTitle>
                  <S.OptionDescription>
                    출석체크시, 휴대폰 번호를 입력받습니다.
                  </S.OptionDescription>
                </S.TextContainer>
              </S.Option>
            </S.OptionContainer>
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
              {eventImage && (
                <S.ImagePreview src={eventImage} alt="Event Cover" />
              )}
              <UploadBox />
            </S.ContentDescWrapper>
          </S.Content>
        </S.ContentContainer>
      </S.DashboardInfo>
    </PageLayout>
  );
}
