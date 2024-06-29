import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BackgroundPage from '../../components/Background/BackgroundPage';
import { USER_ID } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../axios';
import { BREAKPOINTS } from '../../styles';

export default function CurrentEvent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/api/v1/events/${USER_ID}`);
        console.log('response: ', response.data);
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

const EventCard = ({ title, poster, startDate, endDate }) => {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate('/currentevent/eventdetail');
  };

  const attendanceCheck = (event) => {
    event.stopPropagation();
    navigate('/attendance/student-id');
  };

  return (
    <CardWrapper onClick={handleDetail}>
      <EventImg>
        <EventCardPoster src={poster} alt="event_poster" />
      </EventImg>
      <EventTitle>{title}</EventTitle>
      <EventDate>
        <p>진행 일정</p>
        <CardDay>{endDate ? `${startDate} ~ ${endDate}` : startDate}</CardDay>
      </EventDate>
      <BlueButton onClick={attendanceCheck}>출석 체크</BlueButton>
    </CardWrapper>
  );
};

const EventCardPoster = styled.img`
  overflow: auto;
`;

const EventCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  max-width: 1200px;
  height: 100vh;

  @media (max-width: ${BREAKPOINTS[0]}px) {
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  width: 100%;
  height: 400px;
  padding: 12px;
  margin: 20px;
  box-shadow:
    rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
  }
`;

const EventImg = styled.div`
  display: flex;
  height: 300px;
  overflow: auto;
  justify-content: center;
`;

const EventTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  /* height: 80px; */
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
`;
