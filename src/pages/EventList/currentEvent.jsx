import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BackgroundPage from '../../components/Background/BackgroundPage';
import { USER_ID } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../axios';

export default function CurrentEvent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/v1/event/list/${USER_ID}`,
        );

        const parsedEvents = response.data.result.map((event) => ({
          id: event.eventId,
          title: event.eventTitle,
          poster: event.eventImage,
          date: event.eventSchedules[0],
        }));

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
            date={event.date}
            poster={event.poster}
          />
        ))}
      </EventCardList>
    </BackgroundPage>
  );
}

const EventCard = ({ title, poster, date }) => {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate('/eventDetail');
  };

  const attendanceCheck = (event) => {
    event.stopPropagation();
    navigate('/attendance/student-id');
  };
  return (
    <CardWrapper onClick={handleDetail}>
      <CardPoster>
        <img src={poster} alt="event_poster" />
      </CardPoster>
      <CardTitle>{title}</CardTitle>
      <DateWrapper>
        <p>진행 일정</p>
        <CardDay>{date}</CardDay>
      </DateWrapper>
      <BlueButton onClick={attendanceCheck}>출석 체크</BlueButton>
    </CardWrapper>
  );
};

const EventCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  width: 1200px;
  height: 100vh;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 490px;
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
`;

const CardPoster = styled.div`
  display: flex;
  width: 296px;
  height: 300px;
  overflow: auto;
  justify-content: center;
`;

const CardTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  height: 80px;
  margin: 15px 0px;
`;

const DateWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin: 15px 0px;
`;

const CardDay = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

const BlueButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 296px;
  height: 36px;
  border: none;
  border-radius: 4px;
  color: white;
  background: linear-gradient(to right, #0a2c83, #1f5fa9);
  cursor: pointer;
`;
