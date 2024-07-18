import React, { useEffect, useState } from 'react';
import * as S from './EventList.style';
import { USER_ID } from '../../constants';
import { axiosInstance } from '../../axios';
import EventCard from './EventCard';

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

        // 최신순으로 행사 정렬
        const sortedEvents = parsedEvents.sort(
          (a, b) => new Date(b.startDate) - new Date(a.startDate),
        );

        setEvents(sortedEvents);
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
