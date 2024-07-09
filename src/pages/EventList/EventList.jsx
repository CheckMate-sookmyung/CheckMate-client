import React, { useEffect, useState } from 'react';
import { USER_ID } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../axios';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { eventIDState } from '../../recoil/atoms/state';
import * as S from './EventListStyle';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/api/v1/events/${USER_ID}`);
        const parsedEvents = response.data.map((event) => {
          const startDate = event.eventSchedules[0];
          const endDate =
            event.eventSchedules.length > 1
              ? event.eventSchedules[event.eventSchedules.length - 1]
              : null;
          return {
            id: event.eventId,
            title: event.eventTitle,
            poster: event.eventImage,
            startDate,
            endDate,
          };
        });
        setEvents(parsedEvents);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <S.EventCardList>
      {events.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
          title={event.title}
          startDate={event.startDate}
          endDate={event.endDate}
          poster={event.poster}
        />
      ))}
    </S.EventCardList>
  );
};

export default EventList;

const EventCard = ({ id, title, poster, startDate, endDate }) => {
  const setContent = useSetRecoilState(eventIDState);
  const navigate = useNavigate();

  const handleDetail = () => {
    setContent(id);
    navigate(`/event/${id}/dashboard`);
  };

  const attendanceCheck = (event) => {
    event.stopPropagation();
    navigate('/attendance/student-id');
  };

  return (
    <S.CardWrapper onClick={handleDetail}>
      <S.EventImgWrapper>
        <S.EventImg src={poster} alt="event_poster" />
      </S.EventImgWrapper>
      <S.EventTitle>{title}</S.EventTitle>
      <S.EventDate>
        <p>진행 일정</p>
        <S.CardDay>
          {endDate ? `${startDate} ~ ${endDate}` : startDate}
        </S.CardDay>
      </S.EventDate>
      <S.BlueButton onClick={attendanceCheck}>출석 체크</S.BlueButton>
    </S.CardWrapper>
  );
};
