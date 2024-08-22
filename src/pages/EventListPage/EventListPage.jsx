import { useEffect, useState } from 'react';
import * as S from './EventListPage.style';
import { USER_ID } from '@/constants';
import { axiosInstance } from '@/axios';
import { EventCard } from '@/components';

const EventListPage = () => {
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
            startDate: new Date(startDate),
            endDate: endDate ? new Date(endDate) : null,
          };
        });

        // 최신 날짜 순으로 정렬
        parsedEvents.sort((a, b) => {
          const dateA = a.endDate || a.startDate;
          const dateB = b.endDate || b.startDate;
          return dateB - dateA;
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
          startDate={event.startDate.toLocaleDateString()}
          endDate={event.endDate ? event.endDate.toLocaleDateString() : null}
          poster={event.poster}
        />
      ))}
    </S.EventCardList>
  );
};

export default EventListPage;
