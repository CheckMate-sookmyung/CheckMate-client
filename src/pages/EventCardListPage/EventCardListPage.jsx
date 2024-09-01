import { useEffect, useState } from 'react';
import * as S from './EventCardListPage.style';
import { USER_ID } from '@/constants';
import { axiosInstance } from '@/axios';
import { EventCard, Dropdown, TopNavigation } from '@/components';
import { PageLayout } from '@/Layout';

const EventCardListPage = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('전체');

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
            status: endDate
              ? new Date() > new Date(endDate)
                ? '마감'
                : '진행중'
              : '진행중', // 현재 날짜와 비교해 상태 결정
          };
        });

        // 최신 날짜 순으로 정렬
        parsedEvents.sort((a, b) => {
          const dateA = a.endDate || a.startDate;
          const dateB = b.endDate || b.startDate;
          return dateB - dateA;
        });

        setEvents(parsedEvents);
        setFilteredEvents(parsedEvents); // 초기 필터 설정
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedFilter === '전체') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(
        events.filter((event) => event.status === selectedFilter),
      );
    }
  }, [selectedFilter, events]);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <PageLayout topNavigation={<TopNavigation />}>
      <S.Container>
        <S.EventCardListPage>
          <Dropdown
            items={['전체', '진행중', '마감']}
            defaultItem="전체"
            onSelect={handleFilterChange}
          />
          <S.EventCardList>
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                startDate={event.startDate.toLocaleDateString()}
                endDate={
                  event.endDate ? event.endDate.toLocaleDateString() : null
                }
                poster={event.poster}
              />
            ))}
          </S.EventCardList>
        </S.EventCardListPage>
      </S.Container>
    </PageLayout>
  );
};

export default EventCardListPage;
