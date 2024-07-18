import React from 'react';
import * as S from './EventCard.style';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { eventIDState } from '../../recoil/atoms/state';

const EventCard = ({ id, title, poster, startDate, endDate }) => {
  const setContent = useSetRecoilState(eventIDState);
  const navigate = useNavigate();

  const handleDetail = () => {
    setContent(id);
    navigate(`/event/dashboard`);
  };

  const attendanceCheck = (event) => {
    event.stopPropagation();
    navigate('/attendance/student-id');
  };

  // 행사 종료시
  const isEventEnded = () => {
    const today = new Date();
    const eventEndDate = new Date(endDate || startDate);
    return today > eventEndDate;
  };

  return (
    <S.CardWrapper onClick={handleDetail}>
      <S.EventImgWrapper>
        <S.EventImg src={poster} alt="event_poster" />
      </S.EventImgWrapper>
      <S.EventTitle>{title}</S.EventTitle>
      <S.EventDate>
        <p>일정</p>
        <S.CardDay>
          {endDate ? `${startDate} ~ ${endDate}` : startDate}
        </S.CardDay>
      </S.EventDate>
      <S.CheckButton
        isEnded={isEventEnded()}
        onClick={attendanceCheck}
        disabled={isEventEnded()}
      >
        {isEventEnded() ? '행사 종료' : '출석 체크'}
      </S.CheckButton>
    </S.CardWrapper>
  );
};

export default EventCard;
