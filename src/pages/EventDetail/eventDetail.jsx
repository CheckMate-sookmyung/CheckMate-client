import React, { useEffect, useState } from 'react';
import * as S from './EventDetail.style';
import AttendanceList from './AttendanceList';
import { USER_ID } from '../../constants';
import { axiosInstance } from '../../axios';
import { useRecoilValue } from 'recoil';
import { eventIDState } from '../../recoil/atoms/state';
import { useNavigate } from 'react-router-dom';

const EventDetail = () => {
  const [parsedEvents, setParsedEvents] = useState(null);
  const EVENT_ID = useRecoilValue(eventIDState);
  const navigate = useNavigate();

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

  const DeleteEvent = async () => {
    const isConfirmed = window.confirm(
      '행사를 완전히 삭제하시겠습니까?\n삭제한 행사는 복구할 수 없습니다.',
    );
    if (!isConfirmed) {
      return;
    }
    try {
      const response = await axiosInstance.delete(
        `api/v1/events/${USER_ID}/${EVENT_ID}`,
      );
      if (response.status === 200) {
        alert('행사가 삭제되었습니다. 목록 페이지로 이동합니다.');
        navigate('/currentevent');
        console.log(response);
      }
    } catch (error) {
      alert('행사 삭제에 실패했습니다. 다시 시도해 주세요.');
      console.log(error);
    }
  };

  return (
    <S.Background>
      <S.ChangeEventWrapper>
        <S.EditEventButton>행사 수정</S.EditEventButton>
        <S.DeleteEventButton onClick={DeleteEvent}>
          행사 삭제
        </S.DeleteEventButton>
      </S.ChangeEventWrapper>
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
