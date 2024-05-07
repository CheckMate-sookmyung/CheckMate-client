import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BackgroundPage from '../../components/Background/BackgroundPage';

const eventDataFromServer = [
  {
    id: 1,
    title: '라인 개발자가 알려주는 리액트 입문',
    date: new Date('2024.05.11'),
  },
  { id: 2, title: '숙명 sw star 특강 시리즈', date: new Date('2024.05.18') },
  {
    id: 3,
    title: 'sw 인플루언서 역량 강화 프로그램',
    date: new Date('2024.05.26'),
  },
];

export default function CurrentEvent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setEvents(eventDataFromServer);
    };

    fetchData();
  }, []);

  return (
    <BackgroundPage title={'진행 중인 행사'}>
      <EventCardList>
        {events.map((event) => (
          <EventCard key={event.id} title={event.title} date={event.date} />
        ))}
      </EventCardList>
    </BackgroundPage>
  );
}

const EventCard = ({ title, date }) => {
  const formattedDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;

  return (
    <CardWrapper>
      <CardPoster></CardPoster>
      <CardTitle>{title}</CardTitle>
      <DateWrapper>
        <p>진행일정</p>
        <CardDay>{formattedDate}</CardDay>
      </DateWrapper>
      <BlueButton onClick={() => console.log('출석 체크')}>
        출석 체크
      </BlueButton>
    </CardWrapper>
  );
};

const EventCardList = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 490px;
  padding: 12px;
  margin: 40px;
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
`;

const CardTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  height: 80px;
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
