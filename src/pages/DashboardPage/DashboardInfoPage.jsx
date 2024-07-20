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
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [isChanged, setIsChanged] = useState(false);
  const EVENT_ID = useRecoilValue(eventIDState);

  const initialState = useRef({
    active,
    selectedOption,
    startDate,
    endDate,
    eventTitle,
    eventDescription,
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
        setStartDate(
          new Date(
            eventData.eventSchedules[0].eventDate +
              'T' +
              eventData.eventSchedules[0].eventStartTime,
          ),
        );
        setEndDate(
          new Date(
            eventData.eventSchedules[0].eventDate +
              'T' +
              eventData.eventSchedules[0].eventEndTime,
          ),
        );
        setEventTitle(eventData.eventTitle);
        setEventDescription(eventData.eventDetail);

        initialState.current = {
          active: eventData.active ? 'online' : 'offline',
          selectedOption: eventData.selectedOption || 'option1',
          startDate: new Date(
            eventData.eventSchedules[0].eventDate +
              'T' +
              eventData.eventSchedules[0].eventStartTime,
          ),
          endDate: new Date(
            eventData.eventSchedules[0].eventDate +
              'T' +
              eventData.eventSchedules[0].eventEndTime,
          ),
          eventTitle: eventData.eventTitle,
          eventDescription: eventData.eventDetail,
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
      startDate.getTime() !== initialState.current.startDate.getTime() ||
      endDate.getTime() !== initialState.current.endDate.getTime() ||
      eventTitle !== initialState.current.eventTitle ||
      eventDescription !== initialState.current.eventDescription;

    setIsChanged(hasChanged);
  }, [
    active,
    selectedOption,
    startDate,
    endDate,
    eventTitle,
    eventDescription,
  ]);

  const handleSave = async () => {
    const eventData = {
      EVENT_ID,
      eventTitle,
      eventDetail: eventDescription,
      eventImage: '',
      eventSchedules: [
        {
          eventDate: startDate.toISOString().split('T')[0],
          eventStartTime: startDate.toISOString().split('T')[1],
          eventEndTime: endDate.toISOString().split('T')[1],
          attendanceListResponseDtos: [],
        },
      ],
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
            <BlueButton90 disabled={!isChanged}>저장하기</BlueButton90>
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
            <S.DateTimeContainer>
              <S.DateTimeInput
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MM월 dd일"
                showYearDropdown={false}
                showMonthDropdown={true}
                dropdownMode="select"
              />
              <S.DateTimeInput
                selected={startDate}
                onChange={(date) => {
                  const newDate = new Date(startDate);
                  newDate.setHours(date.getHours());
                  newDate.setMinutes(date.getMinutes());
                  setStartDate(newDate);
                }}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
              <FaAngleRight />
              <S.DateTimeInput
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="MM월 dd일"
                showYearDropdown={false}
                showMonthDropdown={true}
                dropdownMode="select"
              />
              <S.DateTimeInput
                selected={endDate}
                onChange={(date) => {
                  const newDate = new Date(endDate);
                  newDate.setHours(date.getHours());
                  newDate.setMinutes(date.getMinutes());
                  setEndDate(newDate);
                }}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
            </S.DateTimeContainer>
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
              <UploadBox />
            </S.ContentDescWrapper>
          </S.Content>
        </S.ContentContainer>
      </S.DashboardInfo>
    </PageLayout>
  );
}
