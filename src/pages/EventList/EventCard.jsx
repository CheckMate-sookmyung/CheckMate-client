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

  const toKoreanTime = (dateString) => {
    const date = new Date(dateString);
    // 한국 시간 (UTC+9)으로 변환
    return new Date(date.getTime() + 9 * 60 * 60 * 1000);
  };

  const isEventEnded = () => {
    const today = new Date();
    const eventEndDate = toKoreanTime(endDate || startDate);
    return today > eventEndDate;
  };

  const isEventStarted = () => {
    const today = new Date();
    const eventStartDate = toKoreanTime(startDate);
    return today >= eventStartDate;
  };

  const isAttendanceEnabled = () => {
    const today = new Date();
    const eventStartDate = toKoreanTime(startDate);
    return today >= eventStartDate.setHours(0, 0, 0, 0); // 행사 첫날 자정부터 출석 체크 가능
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
        isStarted={isEventStarted()}
        onClick={attendanceCheck}
        disabled={!isAttendanceEnabled()}
      >
        {isEventEnded()
          ? '행사 종료'
          : isEventStarted()
            ? '출석 체크'
            : '행사 예정'}
      </S.CheckButton>
    </S.CardWrapper>
  );
};

export default EventCard;
