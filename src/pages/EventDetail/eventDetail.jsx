import React, { useEffect, useState } from 'react';
import * as S from './EventDetail.style';
import AttendanceList from './AttendanceList';
import { USER_ID } from '../../constants';
import { axiosInstance } from '../../axios';
import { useRecoilValue } from 'recoil';
import { eventIDState } from '../../recoil/atoms/state';

const EventDetail = () => {
  const [parsedEvents, setParsedEvents] = useState(null);
  const EVENT_ID = useRecoilValue(eventIDState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/v1/events/${USER_ID}/${EVENT_ID}`,
        );
        const eventData = response.data;
        if (eventData) {
          const parsedEvent = {
            title: eventData.eventTitle,
            detail: eventData.eventDetail,
          };
          setParsedEvents(parsedEvent);
        }
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchData();
  }, [EVENT_ID]);

  const handleEmail = async () => {
    const isConfirmed = window.confirm(
      '출석 명단을 이메일로 전송하시겠습니까?\n확인 버튼을 누르면 즉시 전송됩니다.',
    );
    if (!isConfirmed) {
      return;
    }
    try {
      const response = await axiosInstance.get(
        `api/v1/attendance/list/${USER_ID}/${EVENT_ID}`,
      );
      if (response.status === 200) {
        alert('전송이 완료됐습니다.');
        console.log(response);
      }
    } catch (error) {
      alert('전송에 실패했습니다.');
      console.log(error);
    }
  };

  return (
    <S.Background>
      <S.EventChangeWrapper>
        <S.EventEdit>이벤트 수정</S.EventEdit>
        <S.EventDelete>이벤트 삭제</S.EventDelete>
      </S.EventChangeWrapper>
      {parsedEvents && (
        <S.DetailWrapper>
          <S.AttendanceSection>
            <S.AttendanceListWrapper>
              <AttendanceList />
            </S.AttendanceListWrapper>
          </S.AttendanceSection>
          <S.EventSection>
            <S.EventTitle>{parsedEvents.title}</S.EventTitle>
            <S.EventContent>
              <S.EventContentTitle>행사 설명</S.EventContentTitle>
              <S.EventContentDescription>
                {parsedEvents.detail}
              </S.EventContentDescription>
            </S.EventContent>
            <S.SendButtonWrapper>
              <S.SendButton onClick={handleEmail}>출석 명단 전송</S.SendButton>
            </S.SendButtonWrapper>
          </S.EventSection>
        </S.DetailWrapper>
      )}
    </S.Background>
  );
};

export default EventDetail;
