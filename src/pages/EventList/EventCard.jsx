import React from 'react';
import * as S from './EventCard.style';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { eventIDState } from '../../recoil/atoms/state';
import { isAfter, isWithinInterval, isPast } from 'date-fns';

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

  const isEventOngoing = () => {
    console.log(new Date());
    console.log(startDate);
    console.log(new Date(startDate));

    console.log(isAfter(new Date(), new Date(startDate)));
    return isWithinInterval(new Date(), {
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    });
  };

  const isEventEnded = () => {
    return isPast(new Date(endDate));
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
        isStarted={isEventOngoing()}
        onClick={attendanceCheck}
        disabled={!isEventOngoing()}
      >
        {isEventEnded()
          ? '행사 종료'
          : isEventOngoing()
            ? '출석 체크'
            : '행사 예정'}
      </S.CheckButton>
    </S.CardWrapper>
  );
};

export default EventCard;
