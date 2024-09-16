import { useEffect, useState } from 'react';
import * as S from './EventCardListPage.style';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { axiosInstance } from '@/axios';
import { EventCard, Dropdown, TopNavigation, Search } from '@/components';
import { PageLayout } from '@/Layout';

const EventCardListPage = () => {
  const USER_ID = sessionStorage.getItem('id');
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedFilter = searchParams.get('status') || '전체'; // 기본값이 전체

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/v1/events?memberId=${USER_ID}&authority=MEMBER&member=true`,
        );
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
              : '진행중',
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
  }, [USER_ID]);

  useEffect(() => {
    const filtered = events.filter((event) => {
      const statusMatch =
        selectedFilter === '전체' || event.status === selectedFilter;
      const searchMatch = event.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return statusMatch && searchMatch;
    });

    setFilteredEvents(filtered);
  }, [selectedFilter, events, searchTerm]);

  const handleFilterChange = (filter) => {
    setSearchParams({ status: filter });
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <PageLayout topNavigation={<TopNavigation />}>
      <S.EventCardListPage>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Dropdown
            items={['전체', '진행중', '마감']}
            defaultItem={selectedFilter}
            onSelect={handleFilterChange}
          />
          <Search onSearch={handleSearch} />
        </div>

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
    </PageLayout>
  );
};

export default EventCardListPage;
