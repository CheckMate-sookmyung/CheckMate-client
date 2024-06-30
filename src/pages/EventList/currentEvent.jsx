import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BackgroundPage from '../../components/Background/BackgroundPage';
import { USER_ID } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../axios';
import { BREAKPOINTS } from '../../styles';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { eventIDState } from '../../recoil/atoms/state';

export default function CurrentEvent() {
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
    <BackgroundPage title={'진행 중인 행사'}>
      <EventCardList>
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
      </EventCardList>
    </BackgroundPage>
  );
}

const EventCard = ({ id, title, poster, startDate, endDate }) => {
  const setContent = useSetRecoilState(eventIDState);
  const navigate = useNavigate();

  const handleDetail = () => {
    setContent(id);
    navigate('/currentevent/eventdetail');
  };

  const attendanceCheck = (event) => {
    event.stopPropagation();
    navigate('/attendance/student-id');
  };

  return (
    <CardWrapper onClick={handleDetail}>
      <EventImgWrapper>
        <EventImg src={poster} alt="event_poster" />
      </EventImgWrapper>
      <EventTitle>{title}</EventTitle>
      <EventDate>
        <p>진행 일정</p>
        <CardDay>{endDate ? `${startDate} ~ ${endDate}` : startDate}</CardDay>
      </EventDate>
      <BlueButton onClick={attendanceCheck}>출석 체크</BlueButton>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px;
  box-shadow:
    rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

const EventImgWrapper = styled.div`
  display: flex;
  overflow: hidden;
  height: 300px;
  justify-content: center;
`;

const EventImg = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 420 / 594;
  object-fit: cover;
`;

const EventCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  width: 100%;
  padding: 20px;

  @media (max-width: ${BREAKPOINTS[2]}px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  @media (max-width: ${BREAKPOINTS[1]}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const EventTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 20px 0 10px;
`;

const EventDate = styled.div`
  display: flex;
  gap: 12px;
  margin: 10px 0px;
`;

const CardDay = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

const BlueButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  color: white;
  background: linear-gradient(to right, #0a2c83, #1f5fa9);
  cursor: pointer;
  font-size: 16px;
`;
