import { useState, useEffect, useRef } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import * as S from './DashboardInfoPage.style';
import {
  Sidebar,
  Button,
  Input,
  Textarea,
  TopNavigation,
  EventTypeRadioGroup,
  UploadBox,
  EventScheduleList,
  EventTargetOption,
} from '@/components';
import { minCompletionTimes } from '@/recoil/atoms/state';
import { USER_ID } from '@/constants';
import { useRecoilValue, useRecoilState } from 'recoil';
import { eventIDState } from '@/recoil/atoms/state';
import { PageLayout } from '@/Layout';
import { getEventDetail, updateEventDetail } from '@/apis';
import CompletionDropdown from '@/pages/RegisterPage/RegisterComponents/Dropdown/CompletionDropdown';

export default function DashboardInfoPage() {
  const [eventType, setEventType] = useState('OFFLINE');
  const [eventTarget, setEventTarget] = useState('EXTERNAL');
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventImage, setEventImage] = useState('');
  const [eventUrlAddress, setEventUrlAddress] = useState('');
  const [minCompletionTimesValue, setMinCompletionTimesValue] =
    useRecoilState(minCompletionTimes);
  const [eventSchedules, setEventSchedules] = useState([
    {
      eventDate: new Date(),
      eventStartTime: new Date(),
      eventEndTime: new Date(),
    },
  ]);
  const [isChanged, setIsChanged] = useState(false);
  const eventId = useRecoilValue(eventIDState);

  const dropdownItems = eventSchedules.map((_, index) => ({
    label: `${index + 1}회`,
    value: index + 1,
  }));

  const handleSelect = (value) => {
    setMinCompletionTimesValue(value);
  };

  const initialState = useRef({
    eventType,
    eventTarget,
    eventTitle,
    eventDescription,
    eventImage,
    eventSchedules,
    completionTimes: minCompletionTimesValue,
  });

  const {
    data: eventDetail,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['getEventDetail', eventId],
    queryFn: () => getEventDetail(eventId),
    onSuccess: ({ eventImage, eventUrl }) => {
      setEventImage(eventImage);
      setEventUrlAddress(eventUrl);
    },
  });

  const {
    mutate: updateEventDetailMutate,
    isPending: isUpdateEventDetailPending,
  } = useMutation({
    mutationKey: ['updateEventDetail', eventId],
    mutationFn: (body) => updateEventDetail(eventId, body),
    onSuccess: () => {
      alert('행사 정보가 성공적으로 저장되었습니다.');
      setIsChanged(false); // 저장 후 변경 사항을 초기화
    },
    onError: () => {
      alert('행사 정보를 저장하는 데 실패했습니다. 다시 시도해 주세요.');
    },
  });

  useEffect(() => {
    if (eventDetail === undefined) {
      return;
    }

    const {
      eventType,
      eventTarget,
      eventTitle,
      eventDetail: eventDescription,
      eventImage,
      eventSchedules,
    } = eventDetail;

    const parseDateTime = (date, time) => {
      const parsedTime = Date.parse(`${date}T${time}`);
      if (isNaN(parsedTime)) {
        console.error(`Invalid time value: ${date}T${time}`);
        return new Date();
      }
      return new Date(`${date}T${time}`);
    };

    setEventType(eventType);
    setEventTarget(eventTarget);
    setEventTitle(eventTitle);
    setEventDescription(eventDescription);
    setEventImage(eventImage || '');
    setEventSchedules(
      eventSchedules.map(({ eventDate, startTime, endTime }) => ({
        eventDate: new Date(eventDate),
        eventStartTime: parseDateTime(eventDate, startTime),
        eventEndTime: parseDateTime(eventDate, endTime),
      })),
    );

    initialState.current = {
      eventType,
      eventTarget,
      eventTitle,
      eventDescription,
      eventImage: eventImage || '',
      eventSchedules: eventSchedules.map(
        ({ eventDate, startTime, endTime }) => ({
          eventDate: new Date(eventDate),
          eventStartTime: parseDateTime(eventDate, startTime),
          eventEndTime: parseDateTime(eventDate, endTime),
        }),
      ),
    };
  }, [eventDetail]);

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

  const handleDeleteSchedule = (index) => {
    if (eventSchedules.length > 1) {
      const newSchedules = eventSchedules.filter((_, i) => i !== index);

      setEventSchedules(newSchedules);
      setIsChanged(true);
    }
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

  // 저장하기 버튼
  const handleSaveButtonClick = () => {
    updateEventDetailMutate({
      eventId,
      eventTitle,
      eventDetail: eventDescription,
      // eventImage,
      eventType: eventType ? 'OFFLINE' : 'ONLINE',
      eventTarget: eventTarget === 'EXTERNAL' ? 'EXTERNAL' : 'INTERNAL',
      eventSchedules: eventSchedules.map((schedule) => ({
        eventDate: schedule.eventDate.toISOString().split('T')[0],
        eventStartTime: schedule.eventStartTime.toISOString().split('T')[1],
        eventEndTime: schedule.eventEndTime.toISOString().split('T')[1],
        attendanceListResponseDtos: [],
      })),
    });
  };

  const handleEventTypeRadioGroupChange = (eventType) => {
    setEventType(eventType);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const filePath = URL.createObjectURL(file);
      setEventImage(filePath);
      setIsChanged(true);
    }
  };

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return null;
  }

  return (
    <PageLayout
      topNavigation={<TopNavigation eventTitle={eventTitle} />}
      sideBar={<Sidebar />}
    >
      <S.DashboardInfo>
        <S.TopContainer>
          <S.Title>행사 기본 정보</S.Title>
          <S.ButtonContainer>
            <Button
              label="저장하기"
              disabled={!isChanged || isUpdateEventDetailPending}
              backgroundColor={!isChanged ? '#ccc' : '#007BFF'}
              style={{
                cursor: !isChanged ? 'not-allowed' : 'pointer',
              }}
              onClick={handleSaveButtonClick}
            />
          </S.ButtonContainer>
        </S.TopContainer>

        {/* 행사 정보 */}
        <S.ContentContainer>
          <S.Content>
            <S.ContentTitle>행사 제목</S.ContentTitle>
            <Input
              placeholder="행사 제목을 입력해주세요"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
            />
          </S.Content>

          {/* 행사 일정 수정이 안되는 관계로 임시 주석 처리 */}
          {/* <S.Content>
            <S.ContentTitle>행사 기간</S.ContentTitle>
            <EventScheduleList
              eventSchedules={eventSchedules}
              handleScheduleChange={handleScheduleChange}
              handleAddSchedule={handleAddSchedule}
              handleDeleteSchedule={handleDeleteSchedule}
            />
          </S.Content> */}

          <S.Content>
            <S.ContentTitle>온라인/오프라인 여부</S.ContentTitle>
            <S.EventTypeCardWrapper>
              <EventTypeRadioGroup
                value={eventType}
                onChange={handleEventTypeRadioGroupChange}
              />
            </S.EventTypeCardWrapper>
          </S.Content>

          <S.Content>
            <S.ContentTitle>행사 진행 대상</S.ContentTitle>
            <S.EventTargetContainer>
              <EventTargetOption
                value="INTERNAL"
                selectedValue={eventTarget}
                onSelect={setEventTarget}
              />
              <EventTargetOption
                value="EXTERNAL"
                selectedValue={eventTarget}
                onSelect={setEventTarget}
              />
            </S.EventTargetContainer>
          </S.Content>

          <S.Content>
            <S.ContentTitle>행사 설명</S.ContentTitle>
            <Textarea
              placeholder="행사에 대해 상세히 설명해주세요"
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
                defaultImageUrl={eventImage}
                onImageUpload={handleImageUpload}
              />
            </S.ContentDescWrapper>
          </S.Content>

          <S.Content>
            <S.ContentTitle>행사 이수 기준</S.ContentTitle>
            <CompletionDropdown
              defaultItem={{
                value: eventDetail.completionTimes,
              }}
              items={dropdownItems}
              onSelect={handleSelect}
            />
          </S.Content>
        </S.ContentContainer>
      </S.DashboardInfo>
    </PageLayout>
  );
}
